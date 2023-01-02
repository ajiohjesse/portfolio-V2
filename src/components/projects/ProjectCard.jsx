import Image from 'next/image'
import { FiGithub, FiLink } from 'react-icons/fi'
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
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FiLink />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
