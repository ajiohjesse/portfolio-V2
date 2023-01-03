import Container from '@components/container/Container'
import Image from 'next/image'
import styles from './contact.module.css'
import pattern from '@public/images/blue-pattern.jpg'
import TitleHeading from '@components/titleHeading/TitleHeading'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Container>
        <div className={styles.wrapper}>
          <TitleHeading>Send a Message</TitleHeading>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className="scale">
                Your Name:
              </label>
              <input type="text" name="name" id="name" placeholder="Jon Snow" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className="scale">
                Your Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="sample@mail.com"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message" className="scale">
                Message:
              </label>
              <textarea
                name="message"
                id="messageW"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <button type="submit" className="scale">
              Send Message
            </button>
          </form>
        </div>
      </Container>
      <Image
        src={pattern}
        alt="Blue patterned decoration"
        className={styles.pattern}
      />
    </section>
  )
}

export default Contact
