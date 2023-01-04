import Image from 'next/image'
import { FiGithub, FiLink } from 'react-icons/fi'
import styles from './projectCard.module.css'

const ProjectCard = ({ project }) => {
  const { title, image, text, githubLink, webLink } = project
  return (
    <article className={styles.card}>
      <Image src={image} className={styles.image} alt={title} />
      <div className={styles.text}>
        <h3 className="scale">{title}</h3>
        <p className="scale">{text}</p>
        <div className={styles.links}>
          <a
            className="slide-left"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            className="slide-right"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            <FiLink />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
