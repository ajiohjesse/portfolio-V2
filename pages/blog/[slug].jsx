import MDXComponents from '@components/MDX/MDXComponents'
import PostLayout from '@components/postLayout/PostLayout'
import { getFileBySlug, getFiles } from '@helpers/mdx'
import styles from '@styles/post.module.css'
import { MDXRemote } from 'next-mdx-remote'

const BlogPost = ({ mdxSource, frontMatter }) => {
  return (
    <PostLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </PostLayout>
  )
}

export default BlogPost

export const getStaticPaths = async () => {
  const posts = await getFiles('blog')

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await getFileBySlug('blog', params.slug)

  return {
    props: post,
  }
}
