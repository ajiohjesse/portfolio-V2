import useScrollAnimate from '@hooks/useScrollAnimate'
import { cl } from 'src/utils/classNames'
import styles from './introCard.module.css'

const IntroCard = ({ skill }) => {
  const { title, text, icon } = skill

  return (
    <article className={cl(styles.card, 'scale')}>
      <div className={styles.headingWrapper}>
        <h3 className={styles.heading}>{title}</h3>
        {icon}
      </div>
      <p className={styles.text}>{text}</p>
    </article>
  )
}

export default IntroCard
