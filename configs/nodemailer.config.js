const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testironhack@gmail.com',
    pass: process.env.MAIL_PASSWORD
  }
});


module.exports = transporter;