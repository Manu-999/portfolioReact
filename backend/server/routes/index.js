const router = require('express').Router();
const Email = require('../config/nodemailer');


router.get('/', (req, res) => {
  res.send(process.env.NODE_ENV);
});

router.post('/contact', (req, res) => {
  const data = req.body;
  let message = {
    from: '',
    to: 'manuelbalbas@gmail.com',
    subject: 'Portfolio',
    template: 'email',
    context: {
      title: data.name,
      text: data.message
    }
  };

  const portfolioEmail = (response) => {
    Email.transporter.sendMail(message, (error, info) => {
      if (error) {
        return response.status(500).send(error);
      } else {
        Email.transporter.close();
        response.status(200).send('Respuesta "%s"' + info.response);
      }
    })
  };
  res.status(200).send(data);
  // console.log(data);

});

// router.use('/contact', require('./mail'));


module.exports = router;
