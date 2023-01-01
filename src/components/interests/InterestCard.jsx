import styles from './interestCard.module.css'

const IntroCard = ({ interest }) => {
  const { icon, title, text } = interest
  return (
    <article className={styles.card}>
      <div className={styles.title}>
        {icon}
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </article>
  )
}

export default IntroCard
