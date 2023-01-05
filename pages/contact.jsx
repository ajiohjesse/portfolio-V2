import ContactForm from '@components/contact/ContactForm'
import Container from '@components/container/Container'
import SEO from '@components/SEO'
import SocialCard from '@components/socialCard/SocialCard'
import TitleHeading from '@components/titleHeading/TitleHeading'
import useScrollAnimate from '@hooks/useScrollAnimate'
import { socialDetails } from '@lib/socialDetails'
import styles from '@styles/contactPage.module.css'

const contact = () => {
  useScrollAnimate('scale', 'scale-in')

  return (
    <>
      <SEO title="Contact Me" description="Get in touch with me." />
      <div className={styles.contact}>
        <Container>
          <TitleHeading>Get In Touch</TitleHeading>
          <div className={styles.wrapper}>
            <div className={styles.cards}>
              {socialDetails.map((detail, i) => (
                <SocialCard key={i} details={detail} />
              ))}
            </div>
            <div className={styles.form}>
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default contact
