import styles from './mdxComponents.module.css'
import { FiInfo } from 'react-icons/fi'
import { HiOutlineLightBulb } from 'react-icons/hi'
// import Glitter from '../ui/glitter/Glitter'

const MDXComponents = {
  a: (props) => <a {...props} className={styles.link} />,
  h2: (props) => <h2 {...props} className={styles.h2} />,
  h3: (props) => <h3 {...props} className={styles.h3} />,
  h4: (props) => <h4 {...props} className={styles.h4} />,
  h5: (props) => <h5 {...props} className={styles.h5} />,
  h6: (props) => <h6 {...props} className={styles.h6} />,
  p: (props) => <p {...props} className={styles.p} />,
  ul: (props) => <ul {...props} className={styles.ul} />,
  ol: (props) => <ul {...props} className={styles.ol} />,

  InlineCode: (props) => <code {...props} className={styles.inlineCode} />,
  Highlight: (props) => <span {...props} className={styles.highlight} />,

  // Glitter: ({ props, children }) => <Glitter {...props}>{children}</Glitter>,

  Cursive: (props) => <span {...props} className={styles.cursive} />,

  Article: (props) => <article {...props} />,

  InfoText: ({ props, children }) => (
    <aside {...props} className={styles.infoText}>
      <div className={styles.infoIcon}>
        <HiOutlineLightBulb />
      </div>
      {children}
    </aside>
  ),

  WarningText: ({ props, children }) => (
    <aside {...props} className={styles.warningText}>
      <div className={styles.infoIcon} data-warning>
        <FiInfo />
      </div>

      {children}
    </aside>
  ),

  blockquote: (props) => <blockquote {...props} className={styles.quoteText} />,
}

export default MDXComponents
