const Mailer = require('nodemailer');
const Hbs = require('handlebars');
const Path = require('path');
const data = require('../routes/index');

const Email = {};

Email.transporter = Mailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ghnodemailer@gmail.com',
    password: 'nodemailer'
  },
  tls: {
    rejectUnauthorized: false
  }
}, {
    from: data.email,
    header: []
  });

Email.transporter.use('compile', Hbs({
  viewEngine: 'hbs',
  extName: '.hbs',
  viewPath: Path.join(__dirname, '../views')
}));

module.exports = Email;