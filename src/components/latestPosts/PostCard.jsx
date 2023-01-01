import Link from 'next/link'
import styles from './postCard.module.css'

const PostCard = ({ post }) => {
  const { title, text } = post
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.metadata}>
        <p>Published 3days ago</p>
        <p> | </p>
        <p>5min read</p>
      </div>
      <p className={styles.text}>{text}</p>
      <Link href="/" className={styles.link}>
        Read More
      </Link>
    </article>
  )
}

export default PostCard
