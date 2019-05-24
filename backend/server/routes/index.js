const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(process.env.NODE_ENV);
});

router.post('/contact', (req, res) => {
  const data = req.body;
  res.status(200).send(data);
  // console.log(data);
});

router.use('/contact', require('./mail'));


module.exports = router;
