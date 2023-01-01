import Image from 'next/image'
import styles from './projectCard.module.css'

const ProjectCard = ({ project }) => {
  const { title, image, text, githubLink, webLink } = project
  return (
    <article className={styles.card}>
      <Image src={image} className={styles.image} alt={title} />
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className={styles.links}>
          <a href="/">github</a>
          <a href="/">web</a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
