import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCard, Smartphone, MapPin, Phone, Mail, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import OTPVerification from "@/components/OTPVerification";

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const navigate = useNavigate();
  
  const [step, setStep] = useState<'phone' | 'otp' | 'details' | 'payment'>('phone');
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verifiedPhone, setVerifiedPhone] = useState("");
  
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
    notes: ""
  });
  
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  const handlePhoneSubmit = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    setStep('otp');
  };

  const handleOTPVerified = (phone: string) => {
    setVerifiedPhone(phone);
    setStep('details');
  };

  const generateWhatsAppMessage = () => {
    const orderDetails = items.map(item => 
      `• ${item.name} x${item.quantity} - ₹${item.price * item.quantity}`
    ).join('\n');
    
    const message = `🛍️ *New Order from Trove*

👤 *Customer Details:*
Name: ${customerInfo.name}
Phone: ${verifiedPhone}
Email: ${customerInfo.email || 'Not provided'}

📍 *Delivery Address:*
${customerInfo.address}

🍰 *Order Items:*
${orderDetails}

💰 *Total Amount: ₹${getTotalPrice()}*
💳 *Payment Method: ${paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}*

${customerInfo.notes ? `📝 *Special Notes:*\n${customerInfo.notes}` : ''}

Thank you for choosing Trove! 🎂`;

    return encodeURIComponent(message);
  };

  const createOrder = async () => {
    const orderData = {
      customerInfo: {
        ...customerInfo,
        phone: verifiedPhone
      },
      items,
      totalAmount: getTotalPrice(),
      paymentMethod,
      orderDate: new Date().toISOString(),
      status: 'pending'
    };

    try {
      // Simulate API call to create order
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      if (response.ok) {
        const order = await response.json();
        return order.id;
      }
    } catch (error) {
      console.log('Order created locally:', orderData);
      return 'ORDER_' + Date.now();
    }
  };

  const handlePayment = async () => {
    if (!customerInfo.name || !customerInfo.address) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsProcessing(true);

    try {
      // Create order first
      const orderId = await createOrder();

      if (paymentMethod === "online") {
        // Simulate payment gateway integration
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // In a real app, you would integrate with Razorpay, Stripe, etc.
        const options = {
          key: "rzp_test_your_key_here", // Replace with actual Razorpay key
          amount: getTotalPrice() * 100, // Amount in paise
          currency: "INR",
          name: "Trove Desserts",
          description: `Order #${orderId}`,
          order_id: orderId,
          handler: function (response: any) {
            toast.success("Payment successful!");
            proceedWithOrder();
          },
          prefill: {
            name: customerInfo.name,
            email: customerInfo.email,
            contact: verifiedPhone
          },
          theme: {
            color: "#8B5CF6"
          }
        };

        // For demo purposes, we'll proceed directly
        toast.success("Payment processed successfully!");
        proceedWithOrder();
      } else {
        proceedWithOrder();
      }
    } catch (error) {
      toast.error("Order processing failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const proceedWithOrder = () => {
    const whatsappMessage = generateWhatsAppMessage();
    const whatsappNumber = "919876543210"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Clear cart and redirect
    clearCart();
    toast.success("Order placed successfully! Redirecting to WhatsApp...");
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      navigate('/');
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <Button asChild>
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Phone Number Step
  if (step === 'phone') {
    return (
      <div className="min-h-screen bg-muted/30 py-8">
        <div className="container mx-auto px-4 max-w-md">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <Card className="shadow-elegant">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Quick Checkout</CardTitle>
              <p className="text-muted-foreground">
                Enter your phone number to get started
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="mt-2"
                />
              </div>
              
              <Button 
                onClick={handlePhoneSubmit}
                className="w-full" 
                size="lg"
              >
                Continue with OTP
              </Button>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  We'll send you a verification code via SMS
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // OTP Verification Step
  if (step === 'otp') {
    return (
      <OTPVerification
        phoneNumber={phoneNumber}
        onVerified={handleOTPVerified}
        onBack={() => setStep('phone')}
      />
    );
  }

  // Customer Details and Payment Step
  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => setStep('otp')}
            className="mb-4 hover:bg-primary/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold">Complete Your Order</h1>
          <p className="text-muted-foreground">Phone verified: {verifiedPhone}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customer Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Customer Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Textarea
                    id="address"
                    value={customerInfo.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Enter your complete delivery address"
                    className="min-h-[100px]"
                  />
                </div>
                <div>
                  <Label htmlFor="notes">Special Instructions</Label>
                  <Textarea
                    id="notes"
                    value={customerInfo.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Any special instructions for your order"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex items-center gap-2 cursor-pointer">
                      <MapPin className="h-4 w-4" />
                      Cash on Delivery
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online" className="flex items-center gap-2 cursor-pointer">
                      <Smartphone className="h-4 w-4" />
                      Online Payment (UPI/Card)
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-md"
                        />
                        <div>
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-semibold">₹{item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{getTotalPrice()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{getTotalPrice()}</span>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : `Place Order - ₹${getTotalPrice()}`}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By placing this order, you agree to our terms and conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;