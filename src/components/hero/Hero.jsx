import Container from '@components/container/Container'
import styles from './hero.module.css'
import heroImg from '@public/images/hero-img.png'
import Image from 'next/image'
import { cl } from '@utils/classNames'
import useScrollAnimate from '@hooks/useScrollAnimate'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroWrapper}>
          <div className={styles.heroText}>
            <h1 className={styles.mainHeading}>
              <span className="scale">Front-end</span>
              <span className="scale">developer</span>
              <span className="scale">&#38; UI designer</span>
            </h1>

            <button className={cl(styles.cta, 'scale')}>Contact Me</button>
          </div>

          <Image
            priority
            src={heroImg}
            className={cl(styles.heroImg, 'scale')}
            alt="3d Illustration of a guy holding a laptop."
          />
        </div>
        <div className={styles.experience}>
          <div className={cl(styles.card, 'slide-left')}>
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

          <div className={cl(styles.card, 'slide-right')}>
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
