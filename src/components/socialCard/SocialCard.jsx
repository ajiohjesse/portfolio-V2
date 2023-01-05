import { cl } from '@utils/classNames'
import styles from './socialCard.module.css'

const SocialCard = ({ details }) => {
  const { icon, title, username, link } = details
  return (
    <a href={link} className={styles.link} target="_blank" rel="noreferrer">
      <article className={cl(styles.card, 'scale')}>
        <div className={styles.icon}>{icon}</div>

        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.username}>{username}</p>
        </div>
      </article>
    </a>
  )
}

export default SocialCard
