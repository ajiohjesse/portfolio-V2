import Container from '@components/container/Container'
import styles from './hero.module.css'
import heroImg from '@public/svg/hero-img.svg'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroWrapper}>
          <div className={styles.heroText}>
            <h1 className={styles.mainHeading}>
              <span>Front-end</span>
              <span>developer</span>
              <span>&#38; UI designer</span>
            </h1>

            <button className={styles.cta}>Contact Me</button>
          </div>

          <Image
            priority
            src={heroImg}
            className={styles.heroImg}
            alt="3d Illustration of a guy holding a laptop."
          />
        </div>
        <div className={styles.experience}>
          <div className={styles.card}>
            <p>
              <span className={styles.number}>
                1<span className={styles.primary}>&#43;</span>
              </span>
              <span className={styles.desc}>
                <span>years</span>
                <span>experience</span>
              </span>
            </p>
          </div>

          <div className={styles.card}>
            <p>
              <span className={styles.number}>
                10<span className={styles.primary}>&#43;</span>
              </span>
              <span className={styles.desc}>
                <span>projects</span>
                <span>completed</span>
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
