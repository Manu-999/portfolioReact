const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(process.env.NODE_ENV);
});

router.post('/contact', (req, res) => {
  const email = req.body;
  res.status(200).send(email);
});

module.exports = router;

