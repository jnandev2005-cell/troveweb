import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { ArrowLeft, Phone, Shield, Clock } from "lucide-react";
import toast from "react-hot-toast";

interface OTPVerificationProps {
  phoneNumber: string;
  onVerified: (phoneNumber: string) => void;
  onBack: () => void;
}

const OTPVerification = ({ phoneNumber, onVerified, onBack }: OTPVerificationProps) => {
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const sendOTP = async (phone: string) => {
    try {
      // Simulate API call to send OTP
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: phone })
      });
      
      if (response.ok) {
        toast.success("OTP sent successfully!");
        return true;
      } else {
        toast.error("Failed to send OTP. Please try again.");
        return false;
      }
    } catch (error) {
      // For demo purposes, always succeed
      toast.success("OTP sent to " + phone);
      console.log("Demo OTP: 123456"); // In real app, this would be sent via SMS
      return true;
    }
  };

  const verifyOTP = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    setIsVerifying(true);
    
    try {
      // Simulate API call to verify OTP
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber, otp })
      });
      
      if (response.ok || otp === "123456") { // Demo: accept 123456 as valid OTP
        toast.success("Phone number verified successfully!");
        onVerified(phoneNumber);
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      // For demo purposes, accept 123456 as valid OTP
      if (otp === "123456") {
        toast.success("Phone number verified successfully!");
        onVerified(phoneNumber);
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendOTP = async () => {
    setCanResend(false);
    setTimeLeft(30);
    setOtp("");
    await sendOTP(phoneNumber);
  };

  // Send OTP when component mounts
  useEffect(() => {
    sendOTP(phoneNumber);
  }, [phoneNumber]);

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4 max-w-md">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 hover:bg-primary/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <Card className="shadow-elegant">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">Verify Your Phone</CardTitle>
            <p className="text-muted-foreground mt-2">
              We've sent a 6-digit code to
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-semibold text-primary">{phoneNumber}</span>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="otp" className="text-center block">
                Enter 6-digit OTP
              </Label>
              <div className="flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={setOtp}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>

            <Button
              onClick={verifyOTP}
              disabled={isVerifying || otp.length !== 6}
              className="w-full"
              size="lg"
            >
              {isVerifying ? "Verifying..." : "Verify OTP"}
            </Button>

            <div className="text-center space-y-2">
              {!canResend ? (
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Resend OTP in {timeLeft}s</span>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  onClick={handleResendOTP}
                  className="text-primary hover:text-primary-dark"
                >
                  Resend OTP
                </Button>
              )}
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                For demo: Use OTP <span className="font-mono font-bold">123456</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OTPVerification;