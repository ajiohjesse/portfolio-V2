import Container from '@components/container/Container'
import styles from './postLayout.module.css'
import moment from 'moment'
import useScrollAnimate from '@hooks/useScrollAnimate'
import { FiCalendar, FiClock } from 'react-icons/fi'
import { cl } from '@utils/classNames'
import SEO from '@components/SEO'

const PostLayout = ({ children, frontMatter }) => {
  useScrollAnimate('scale', 'scale-in')

  return (
    <>
      <SEO
        title={frontMatter.title}
        description={frontMatter.summary}
        canonicalPath={`/blog/${frontMatter.slug}`}
      />
      <main>
        <article>
          <Container>
            <div className={styles.head}>
              <div className={styles.tags}>
                {frontMatter.tags.map((tag, i) => (
                  <span key={i} className="scale">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className={cl(styles.heading, 'scale')}>
                {frontMatter.title}
              </h1>

              <div className={styles.metadata}>
                <p className="scale">
                  <FiCalendar aria-hidden />
                  Published {moment(frontMatter.date).format('DD MMMM, YYYY')}
                </p>

                {!frontMatter.metadata.lastUpdated ||
                frontMatter.date === frontMatter.metadata.lastUpdated ? null : (
                  <p className="scale">
                    <FiCalendar aria-hidden />
                    Updated{' '}
                    {moment(frontMatter.metadata.lastUpdated).format(
                      'DD MMMM, YYYY',
                    )}
                  </p>
                )}

                <p className="scale">
                  <FiClock aria-hidden />
                  {frontMatter.readingTime.text}
                </p>
              </div>

              <div className={styles.summary}>
                <p>{frontMatter.summary}</p>
              </div>
            </div>
          </Container>

          <div className={styles.postContent}>
            <Container>
              <div className={styles.contentWrapper}>{children}</div>
            </Container>
          </div>
        </article>
      </main>
    </>
  )
}

export default PostLayout
