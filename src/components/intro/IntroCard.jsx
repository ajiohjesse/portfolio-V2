import styles from './introCard.module.css'

const IntroCard = ({ skill }) => {
  const { title, text, icon } = skill
  return (
    <article className={styles.card}>
      <div className={styles.headingWrapper}>
        {icon} <h3 className={styles.heading}>{title}</h3>
      </div>
      <p className={styles.text}>{text}</p>
    </article>
  )
}

export default IntroCard
