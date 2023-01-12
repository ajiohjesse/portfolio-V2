import Container from '@components/container/Container'
import TitleHeading from '@components/titleHeading/TitleHeading'
import styles from './interests.module.css'
import InterestCard from './InterestCard'
import { interests } from '@lib/Interests'

const Interests = () => {
  return (
    <section className={styles.interests}>
      <Container>
        <TitleHeading>I&#39;m Interested In</TitleHeading>
      </Container>

      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          {interests.map((interest, i) => (
            <InterestCard interest={interest} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interests
