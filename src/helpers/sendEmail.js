import { toast } from 'react-hot-toast'

export const sendEmail = (details, resetDetails) => {
  const message = `
    Sent by: ${details.name} \n
    Email: ${details.email} \n\n
    Message: \n
    ${details.message}
    `

  const loading = toast.loading('Sending email')

  fetch('/api/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: message,
  })
    .then((res) => res.json())
    .then((data) => {
      toast.dismiss(loading)

      if (!data.success) {
        return toast.error('Email not sent.')
      }

      resetDetails()

      return toast.success('Email sent!')
    })
}
