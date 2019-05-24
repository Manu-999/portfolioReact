const Email = require('../config/mailer');

let message = {
  to: 'manuelbalbas@gmail.com',
  subject: 'Portfolio',
  template: 'email',
  context: {
    text: ''
  }
};

const portfolioEmail = (res) => {
  Email.transporter.sendMail(message, (error, info) => {
    if (error) {
      return res.status(500).send(error);
    } else {
      Email.transporter.close();
      res.status(200).send('Respuesta "%s"' + info.response);
    }
  })
};


module.exports = portfolioEmail;