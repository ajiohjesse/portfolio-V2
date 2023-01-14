import styles from "./mdxComponents.module.css";
import { FiInfo } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import Link from "next/link";
import Glitter from "@components/glitter/Glitter";

const MDXComponents = {
  a: props => <a {...props} className={styles.link} />,
  h2: props => <h2 {...props} className={styles.h2} />,
  h3: props => <h3 {...props} className={styles.h3} />,
  h4: props => <h4 {...props} className={styles.h4} />,
  h5: props => <h5 {...props} className={styles.h5} />,
  h6: props => <h6 {...props} className={styles.h6} />,
  p: props => <p {...props} className={styles.p} />,
  ul: props => <ul {...props} className={styles.ul} />,
  ol: props => <ol {...props} className={styles.ol} />,
  blockquote: props => <blockquote {...props} className={styles.quoteText} />,
  Link: ({ props, href, children }) => (
    <Link href={href} {...props} className={styles.link}>
      {children}
    </Link>
  ),

  ExternalLink: ({ props, href, children }) => (
    <a
      className={styles.link}
      href={href}
      {...props}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ),

  Group: props => <div {...props} />,

  InlineCode: props => <code {...props} className={styles.inlineCode} />,

  Highlight: props => <span {...props} className={styles.highlight} />,

  Glitter: props => <Glitter {...props} />,

  SpicyText: props => <span {...props} className={styles.cursive} />,

  InfoText: ({ props, children, lamp = false }) => (
    <aside {...props} className={styles.infoText}>
      <div className={styles.infoIcon}>
        {lamp ? <HiOutlineLightBulb /> : <FiInfo />}
      </div>
      {children}
    </aside>
  ),

  Image: ({ props, src, alt }) => (
    <div className={styles.blogImg} {...props}>
      <img src={src} alt={alt} />
      <p>{alt}</p>
    </div>
  ),
};

export default MDXComponents;
