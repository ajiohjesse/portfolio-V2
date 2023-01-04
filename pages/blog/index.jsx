import Container from '@components/container/Container'
import SEO from '@components/SEO'
import styles from '@styles/blog.module.css'
import postStyles from '@components/latestPosts/latestPosts.module.css'
import PostCard from '@components/latestPosts/PostCard'
import { posts } from '@components/latestPosts/LatestPosts'
import useScrollAnimate from '@hooks/useScrollAnimate'
import TitleHeading from '@components/titleHeading/TitleHeading'
import BlogBanner from '@components/blogBanner/blogBanner'

const Blog = () => {
  useScrollAnimate('scale', 'scale-in')
  useScrollAnimate('slide-left', 'slide-left-in')
  useScrollAnimate('slide-right', 'slide-right-in')

  return (
    <>
      <SEO
        title="Blog"
        description="Friendly tips and tutorials on all things 
related to creating beautiful and intuitive user experiences on the web."
      />
      <main>
        <BlogBanner />
        {/* To do: search componenet */}

        <Container>
          <div className={styles.allPosts}>
            <TitleHeading>All Posts: {posts.length}</TitleHeading>
            <div className={postStyles.wrapper}>
              {posts.map((post, i) => (
                <PostCard key={i} post={post} />
              ))}
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}

export default Blog
