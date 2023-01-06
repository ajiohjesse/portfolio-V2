import Sparkle from '@components/sparkle/Sparkle'
import styles from './glitter.module.css'

const Glitter = ({ props, children }) => {
  return (
    <span className={styles.glitter} {...props}>
      <span>
        <Sparkle size="md" />
      </span>
      <span>
        <Sparkle />
      </span>
      <span>
        <Sparkle size="lg" />
      </span>
      <span>
        <Sparkle />
      </span>
      <span>{children}</span>
    </span>
  )
}

export default Glitter
