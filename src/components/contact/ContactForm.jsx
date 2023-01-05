import { sendEmail } from '@helpers/sendEmail'
import { validateContactForm } from '@utils/validateContactForm'
import { useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import styles from './contact.module.css'

const ContactForm = () => {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: '',
  })

  //reset contact form
  const resetDetails = () => {
    setDetails({
      name: '',
      email: '',
      message: '',
    })

    nameRef.current.value = ''
    emailRef.current.value = ''
    messageRef.current.value = ''
  }

  //on contact form input change
  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.id]: e.target.value.trim(),
    })
  }

  //on contact form submit
  const handleSubmit = (e) => {
    e.preventDefault()

    const { validated, message: msg } = validateContactForm(details)

    if (!validated) {
      return toast.error(msg)
    }

    sendEmail(details, resetDetails)
  }

  return (
    <form
      className={styles.form}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <div className={styles.inputGroup}>
        <label htmlFor="name" className="scale ">
          Your Name:
        </label>
        <input
          ref={nameRef}
          type="text"
          name="name"
          id="name"
          placeholder="Jon Snow"
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="email" className="scale ">
          Your Email:
        </label>
        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          placeholder="sample@mail.com"
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="message" className="scale ">
          Message:
        </label>
        <textarea
          ref={messageRef}
          name="message"
          id="message"
          placeholder="Type your message..."
        ></textarea>
      </div>
      <button type="submit" className="scale">
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
