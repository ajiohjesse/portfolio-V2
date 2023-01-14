import Container from "@components/container/Container";
import TitleHeading from "@components/titleHeading/TitleHeading";
import styles from "./latestPosts.module.css";
import PostCard from "./PostCard";

const LatestPosts = ({ posts }) => {
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
  );
};

export default LatestPosts;
