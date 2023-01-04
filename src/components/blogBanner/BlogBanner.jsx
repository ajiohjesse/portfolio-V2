import Container from '@components/container/Container'
import Image from 'next/image'
import styles from './blogBanner.module.css'
import rocket from '@public/images/rocket.png'
import { blogIntro } from '@lib/introduction'
import { cl } from '@utils/classNames'

const BlogBanner = () => {
  return (
    <section className={styles.blogBanner}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h1>Welcome To My Blog.</h1>
            <p className={styles.intro}>
              <span className="scale">{blogIntro.firstParagraph}</span>
              <br />
              <br />
              <span className="scale">{blogIntro.secondParagraph}</span>
            </p>
          </div>

          <div className={styles.imgWrapper}>
            <Image
              src={rocket}
              alt="3d illustration of a rocket"
              className={cl(styles.img, 'scale')}
              fill
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default BlogBanner
