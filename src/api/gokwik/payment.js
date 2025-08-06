const express = require('express');
const router = express.Router();

router.get('/token', (req, res) => {
  res.status(200).json({
    paymentToken: 'MOCK_PAYMENT_TOKEN',
    gateway: 'razorpay',
    message: 'Mock payment token generated'
  });
});

module.exports = router;
