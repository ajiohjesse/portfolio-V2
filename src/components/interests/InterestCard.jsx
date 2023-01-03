import { cl } from '@lib/classNames'
import styles from './interestCard.module.css'

const IntroCard = ({ interest }) => {
  const { icon, title, text } = interest
  return (
    <article className={cl(styles.card, 'scale')}>
      <div className={styles.title}>
        {icon}
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </article>
  )
}

export default IntroCard
