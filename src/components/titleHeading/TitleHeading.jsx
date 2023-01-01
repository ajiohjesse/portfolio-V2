import styles from './titleHeading.module.css'

const TitleHeading = ({ children }) => {
  return <h2 className={styles.heading}>{children}</h2>
}

export default TitleHeading
