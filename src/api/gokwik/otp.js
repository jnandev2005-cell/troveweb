const express = require('express');
const router = express.Router();

router.post('/send', (req, res) => {
  // Placeholder logic – integrate GoKwik SDK/API here
  console.log(`Sending OTP to ${req.body.phone}`);
  res.status(200).json({ message: 'OTP sent (mock)', success: true });
});

router.post('/verify', (req, res) => {
  console.log(`Verifying OTP ${req.body.otp} for ${req.body.phone}`);
  res.status(200).json({ message: 'OTP verified (mock)', success: true });
});

module.exports = router;
