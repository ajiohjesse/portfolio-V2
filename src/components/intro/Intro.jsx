import Container from '@components/container/Container'
import TitleHeading from '@components/titleHeading/TitleHeading'
import styles from './intro.module.css'
import { introText, introSkills } from '@lib/introduction'
import IntroCard from './IntroCard'
import { cl } from '@utils/classNames'

const Intro = () => {
  return (
    <section className={styles.intro}>
      <Container>
        <TitleHeading>Introduction</TitleHeading>
        <div className={styles.introWrapper}>
          <div className={styles.introCards}>
            {introSkills.map((skill, i) => (
              <IntroCard key={i} skill={skill} />
            ))}
          </div>

          <div className={styles.introText}>
            <p className={cl(styles.introHeading, 'scale')}>
              Hello! I&#39;m Jesse Ajioh.
            </p>
            <p className="scale">{introText.firstParagraph}</p>
            <p className="scale">{introText.secondParagraph}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Intro
