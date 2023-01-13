import Glitter from "@components/glitter/Glitter";
import Image from "next/image";
import { FiGithub, FiLink } from "react-icons/fi";
import styles from "./projectCard.module.css";

const ProjectCard = ({ project }) => {
  const { title, image, text, github, website } = project;
  return (
    <article className={styles.card}>
      <Image src={image} className={styles.image} alt={title} />
      <div className={styles.text}>
        <Glitter>
          <h3 className="scale">{title}</h3>
        </Glitter>
        <p className="scale">{text}</p>
        <div className={styles.links}>
          <a
            className="slide-left"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            className="slide-right"
            href={website}
            target="_blank"
            rel="noreferrer"
          >
            <FiLink />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
