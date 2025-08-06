const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // This could eventually return pre-filled addresses for logged-in users
  res.status(200).json({
    addresses: [],
    message: 'No addresses found (mock)'
  });
});

module.exports = router;
