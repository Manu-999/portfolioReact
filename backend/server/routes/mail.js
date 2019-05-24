const Email = require('../config/nodemailer');
const data = require('./index');

let message = {
  to: 'manuelbalbas@gmail.com',
  subject: 'Portfolio',
  template: 'email',
  context: {
    title: data.name,
    text: data.message
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