import Container from '@components/container/Container'
import TitleHeading from '@components/titleHeading/TitleHeading'
import styles from './interests.module.css'
import InterestCard from './InterestCard'
import { interests } from '@lib/Interests'

const Interests = () => {
  return (
    <section className={styles.intro}>
      <Container>
        <div className={styles.introWrapper}>
          <TitleHeading>Im Interested In</TitleHeading>
        </div>
      </Container>

      <div className={styles.cardWrapper}>
        {interests.map((interest, i) => (
          <InterestCard interest={interest} key={i} />
        ))}
      </div>
    </section>
  )
}

export default Interests
