// Backend API endpoints for order management
// This would typically be in a separate backend service

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// In-memory storage (use database in production)
let orders = [];
let otpStore = {};

// Generate random OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Send OTP endpoint
app.post('/api/send-otp', async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    
    if (!phoneNumber) {
      return res.status(400).json({ error: 'Phone number is required' });
    }
    
    const otp = generateOTP();
    
    // Store OTP with expiration (5 minutes)
    otpStore[phoneNumber] = {
      otp,
      expiresAt: Date.now() + 5 * 60 * 1000,
      attempts: 0
    };
    
    // In production, send SMS using services like Twilio, AWS SNS, etc.
    console.log(`OTP for ${phoneNumber}: ${otp}`);
    
    // Simulate SMS sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    res.json({ 
      success: true, 
      message: 'OTP sent successfully',
      // Don't send OTP in production
      otp: process.env.NODE_ENV === 'development' ? otp : undefined
    });
    
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: 'Failed to send OTP' });
  }
});

// Verify OTP endpoint
app.post('/api/verify-otp', (req, res) => {
  try {
    const { phoneNumber, otp } = req.body;
    
    if (!phoneNumber || !otp) {
      return res.status(400).json({ error: 'Phone number and OTP are required' });
    }
    
    const storedOTP = otpStore[phoneNumber];
    
    if (!storedOTP) {
      return res.status(400).json({ error: 'OTP not found. Please request a new one.' });
    }
    
    if (Date.now() > storedOTP.expiresAt) {
      delete otpStore[phoneNumber];
      return res.status(400).json({ error: 'OTP has expired. Please request a new one.' });
    }
    
    if (storedOTP.attempts >= 3) {
      delete otpStore[phoneNumber];
      return res.status(400).json({ error: 'Too many attempts. Please request a new OTP.' });
    }
    
    if (storedOTP.otp !== otp) {
      storedOTP.attempts++;
      return res.status(400).json({ error: 'Invalid OTP' });
    }
    
    // OTP verified successfully
    delete otpStore[phoneNumber];
    
    res.json({ 
      success: true, 
      message: 'Phone number verified successfully',
      phoneNumber 
    });
    
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ error: 'Failed to verify OTP' });
  }
});

// Create order endpoint
app.post('/api/orders', (req, res) => {
  try {
    const orderData = req.body;
    
    // Validate required fields
    if (!orderData.customerInfo || !orderData.items || !orderData.totalAmount) {
      return res.status(400).json({ error: 'Missing required order information' });
    }
    
    // Generate order ID
    const orderId = 'ORD_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    const order = {
      id: orderId,
      ...orderData,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    
    // Store order (use database in production)
    orders.push(order);
    
    console.log('New order created:', order);
    
    res.json({ 
      success: true, 
      message: 'Order created successfully',
      id: orderId,
      order 
    });
    
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Get order by ID
app.get('/api/orders/:id', (req, res) => {
  try {
    const { id } = req.params;
    const order = orders.find(o => o.id === id);
    
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    
    res.json({ success: true, order });
    
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ error: 'Failed to fetch order' });
  }
});

// Update order status
app.patch('/api/orders/:id/status', (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const orderIndex = orders.findIndex(o => o.id === id);
    
    if (orderIndex === -1) {
      return res.status(404).json({ error: 'Order not found' });
    }
    
    orders[orderIndex].status = status;
    orders[orderIndex].updatedAt = new Date().toISOString();
    
    res.json({ 
      success: true, 
      message: 'Order status updated',
      order: orders[orderIndex] 
    });
    
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ error: 'Failed to update order' });
  }
});

// Get all orders (admin endpoint)
app.get('/api/orders', (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    
    let filteredOrders = orders;
    
    if (status) {
      filteredOrders = orders.filter(o => o.status === status);
    }
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    
    const paginatedOrders = filteredOrders.slice(startIndex, endIndex);
    
    res.json({
      success: true,
      orders: paginatedOrders,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: filteredOrders.length,
        pages: Math.ceil(filteredOrders.length / limit)
      }
    });
    
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Available endpoints:');
  console.log('POST /api/send-otp - Send OTP to phone number');
  console.log('POST /api/verify-otp - Verify OTP');
  console.log('POST /api/orders - Create new order');
  console.log('GET /api/orders/:id - Get order by ID');
  console.log('PATCH /api/orders/:id/status - Update order status');
  console.log('GET /api/orders - Get all orders (admin)');
});

module.exports = app;