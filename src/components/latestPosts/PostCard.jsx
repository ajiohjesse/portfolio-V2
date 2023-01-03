import Link from 'next/link'
import styles from './postCard.module.css'
import { FiCalendar, FiClock } from 'react-icons/fi'
import { cl } from '@lib/classNames'

const PostCard = ({ post }) => {
  const { title, text } = post
  return (
    <article className={cl(styles.card, 'scale')}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.metadata}>
        <div>
          <FiCalendar />
          <p>Published 3 days ago</p>
        </div>
        <div>
          <FiClock />
          <p>5min read</p>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
      <Link href="/" className={styles.link}>
        Read More
      </Link>
    </article>
  )
}

export default PostCard
