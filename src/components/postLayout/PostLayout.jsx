import Container from '@components/container/Container'

const PostLayout = ({ children, frontmatter }) => {
  return (
    <div>
      <Container>{children}</Container>
    </div>
  )
}

export default PostLayout
