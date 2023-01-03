import Container from '@components/container/Container'
import TitleHeading from '@components/titleHeading/TitleHeading'
import styles from './tools.module.css'

import css from '@public/svg/css.svg'
import js from '@public/svg/js.svg'
import html from '@public/svg/html.svg'
import react from '@public/svg/react.svg'
import next from '@public/svg/next.svg'
import mongo from '@public/svg/mongo.svg'
import node from '@public/svg/node.svg'
import Image from 'next/image'
import { cl } from '@lib/classNames'

const Tools = () => {
  return (
    <section className={styles.tools}>
      <Container>
        <div className={styles.toolsWrapper}>
          <TitleHeading>I Work With</TitleHeading>

          <div className={styles.toolImages}>
            <div className={styles.mainStack}>
              <Image
                src={html}
                className={cl(styles.toolImg, styles.html, 'slide-left')}
                alt="html"
              />
              <Image
                src={js}
                className={cl(styles.toolImg, styles.js, 'scale')}
                alt="javascript"
              />
              <Image
                src={css}
                className={cl(styles.toolImg, styles.css, 'slide-right')}
                alt="css"
              />
            </div>
            <div className={styles.subStack}>
              <div className={styles.frameworks}>
                <Image
                  src={react}
                  className={cl(styles.toolImg, styles.react, 'slide-left')}
                  alt="react JS"
                />
                <Image
                  src={next}
                  className={cl(styles.toolImg, styles.next, 'slide-right')}
                  alt="next JS"
                />
              </div>
              <div className={styles.backend}>
                <Image
                  src={mongo}
                  className={cl(styles.toolImg, styles.mongo, 'slide-left')}
                  alt="mongo DB"
                />
                <Image
                  src={node}
                  className={cl(styles.toolImg, styles.node, 'slide-right')}
                  alt="node JS"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Tools
