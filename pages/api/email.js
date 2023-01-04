import nodemailer from 'nodemailer'

export default function handler(req, res) {
  const transporter = nodemailer.createTransport({
    service: 'Mailgun',
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const mailOptions = {
    from: process.env.GMAIL,
    to: 'ajiohjesse@gmail.com',
    subject: 'Mail from portfolio website',
    text: req.body,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.json({ success: false, error, message: null })
    } else {
      return res.json({
        success: true,
        error: null,
        message: `Email sent: ${info.response}`,
      })
    }
  })
}
