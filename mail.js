// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const APP_MAIL = 'test_conference_app@outlook.com'

const sendMail = msg => {
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey('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')
  sgMail.send(msg)
}

const getInvitationMail = ({
  mail,
  user_name,
  location,
  creator_name,
  company_name,
  creator_email,
}) => ({
  to: mail,
  from: APP_MAIL,
  subject: 'Invitation',
  text: `
    Dear ${user_name},
    You were invited to a meeting in ${location} by ${creator_name} from the company ${company_name}.
    It's taking place on 5th of December, at Veveøí 15, at 15 o'clock.
    If you think this is a mistake or want to tell John some information
    about yourself (i.e. you can't make it) contact him at ${creator_email}
  `,
})
