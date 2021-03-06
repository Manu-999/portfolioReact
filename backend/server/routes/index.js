const router = require('express').Router();
const Email = require('../config/nodemailer');
const Path = require('path');

router.get('/', (req, res) => {
  res.send(process.env.NODE_ENV);
});

router.post('/contact', (req, res) => {
  const data = req.body;

  console.log(Path.join(__dirname, '..', 'views'));

  let message = {
    replyTo: 'manuelbalbas@gmail.com',
    from: data.email,
    to: 'manuelbalbas@gmail.com',
    subject: 'Portfolio',
    template: 'email',
    context: {
      title: data.name,
      text: data.message
    }
  };

  const portfolioEmail = () => {
    Email.transporter.sendMail(message, (error, info) => {
      // res.setHeader('email', 'ok');
      // console.log(message);
      if (error) {
        // console.log(message);
        console.log(error);
        return res.status(500).send(error);
      } else {
        Email.transporter().close();
        res.status(200).send('Respuesta "%s"' + info.res);
      }
    })
  };


  portfolioEmail();
  // res.status(200).send(data);
  // console.log(data);

});

// router.use('/contact', require('./mail'));

module.exports = router;