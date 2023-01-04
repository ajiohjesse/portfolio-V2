import Container from '@components/container/Container'
import TitleHeading from '@components/titleHeading/TitleHeading'
import styles from './latestPosts.module.css'
import PostCard from './PostCard'

export const posts = [
  {
    title: 'Introduction to web developement',
    text: `Lorem ipsum, dolor sit amet consectetur
     adipisicing elit. Officia, deleniti exercitationem
      consequuntur quaerat cum...`,
  },
  {
    title: 'Getting started with next.js',
    text: `Lorem ipsum, dolor sit amet consectetur
     adipisicing elit. Officia, deleniti exercitationem
      consequuntur quaerat cum, soluta dolore omnis...`,
  },
  {
    title: 'Introduction to web developement',
    text: `Lorem ipsum, dolor sit amet consectetur
     adipisicing elit. Officia, deleniti exercitationem
      consequuntur quaerat cum...`,
  },
  {
    title: 'Getting started with next.js',
    text: `Lorem ipsum, dolor sit amet consectetur
     adipisicing elit. Officia, deleniti exercitationem
      consequuntur quaerat cum, soluta dolore omnis...`,
  },
]

const LatestPosts = () => {
  return (
    <section className={styles.latestPosts}>
      <Container>
        <TitleHeading>Latest Posts</TitleHeading>
        <div className={styles.wrapper}>
          {posts.map((post, i) => (
            <PostCard key={i} post={post} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default LatestPosts
