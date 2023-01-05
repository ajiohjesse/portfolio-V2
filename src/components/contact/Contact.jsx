import Container from '@components/container/Container'
import Image from 'next/image'
import styles from './contact.module.css'
import pattern from '@public/images/blue-pattern.jpg'
import TitleHeading from '@components/titleHeading/TitleHeading'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Container>
        <TitleHeading>Send a Message</TitleHeading>

        <div className={styles.wrapper}>
          <Image
            src={pattern}
            alt="Patterned decoration"
            className={styles.pattern}
            placeholder="blur"
          />

          <ContactForm />
        </div>
      </Container>
    </section>
  )
}

export default Contact
