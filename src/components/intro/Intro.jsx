import Container from '@components/container/Container'
import TitleHeading from '@components/titleHeading/TitleHeading'
import styles from './intro.module.css'

const Intro = () => {
  return (
    <section className={styles.intro}>
      <Container>
        <TitleHeading>Introduction</TitleHeading>
        <div className={styles.introWrapper}>
          <div className={styles.introText}>
            <p className={styles.introHeading}>Hello! I&#39;m Jesse Ajioh.</p>
            <p>
              As a web developer with over a year of experience, I am passionate
              about creating intuitive and engaging user experiences. I am
              proficient in Javascript and have a solid understanding of web
              development principles.
            </p>

            <p>
              In addition to my technical skills, I have copywriting experience
              and can bring a unique perspective to any design process. I am
              always looking for new ways to improve and grow as a developer,
              and i am eager to take on new challenges and projects.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Intro
