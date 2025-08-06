const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log('Checking RTO risk for:', req.body.phone);
  res.status(200).json({ isHighRisk: false, message: 'RTO check (mock)' });
});

module.exports = router;
