import Container from '@components/container/Container'
import TitleHeading from '@components/titleHeading/TitleHeading'
import styles from './projects.module.css'
import { projects } from '@lib/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className={styles.projects}>
      <Container>
        <TitleHeading>My Projects</TitleHeading>
        <div className={styles.projectsWrapper}>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects
