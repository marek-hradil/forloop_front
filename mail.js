const nodemailer = require('nodemailer')
nodemailer.createTransport({
  host: 'email-smtp.eu-central-1.amazonaws.com',
  port: 587,
  secure: false, // true for 465, false for other ports
})
