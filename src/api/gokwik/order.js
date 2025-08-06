const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log('Placing order with data:', req.body);
  res.status(200).json({ message: 'Order placed (mock)', gokwikOrderId: 'GK12345' });
});

module.exports = router;
