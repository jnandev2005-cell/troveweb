import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCard, Smartphone, MapPin, Phone, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const navigate = useNavigate();
  
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: ""
  });
  
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  const generateWhatsAppMessage = () => {
    const orderDetails = items.map(item => 
      `• ${item.name} x${item.quantity} - ₹${item.price * item.quantity}`
    ).join('\n');
    
    const message = `🛍️ *New Order from Trove*

👤 *Customer Details:*
Name: ${customerInfo.name}
Phone: ${customerInfo.phone}
Email: ${customerInfo.email}

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

  const handlePayment = async () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsProcessing(true);

    try {
      if (paymentMethod === "online") {
        // Simulate payment gateway integration
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // In a real app, you would integrate with Razorpay, Stripe, etc.
        const options = {
          key: "rzp_test_your_key_here", // Replace with actual Razorpay key
          amount: getTotalPrice() * 100, // Amount in paise
          currency: "INR",
          name: "Trove Desserts",
          description: "Order Payment",
          handler: function (response: any) {
            toast.success("Payment successful!");
            proceedWithOrder();
          },
          prefill: {
            name: customerInfo.name,
            email: customerInfo.email,
            contact: customerInfo.phone
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
      toast.error("Payment failed. Please try again.");
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

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customer Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Customer Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={customerInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
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