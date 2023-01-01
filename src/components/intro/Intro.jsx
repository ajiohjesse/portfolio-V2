import Container from '@components/container/Container'
import TitleHeading from '@components/titleHeading/TitleHeading'
import styles from './intro.module.css'
import { introText, introSkills } from '@lib/introduction'
import IntroCard from './IntroCard'

const Intro = () => {
  return (
    <section className={styles.intro}>
      <Container>
        <TitleHeading>Introduction</TitleHeading>
        <div className={styles.introWrapper}>
          <div className={styles.introText}>
            <p className={styles.introHeading}>Hello! I&#39;m Jesse Ajioh.</p>
            <p>{introText.firstParagraph}</p>
            <p>{introText.secondParagraph}</p>
          </div>

          <div className={styles.introCards}>
            {introSkills.map((skill, i) => (
              <IntroCard key={i} skill={skill} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Intro
