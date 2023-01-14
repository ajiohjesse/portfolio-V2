import Container from "@components/container/Container";
import TitleHeading from "@components/titleHeading/TitleHeading";
import { useRouter } from "next/router";
import styles from "./latestPosts.module.css";
import PostCard from "./PostCard";

const LatestPosts = ({ posts }) => {
  const router = useRouter();

  return (
    <section className={styles.latestPosts}>
      <Container>
        <TitleHeading>Latest Posts</TitleHeading>
        <div className={styles.wrapper}>
          {posts.map((post, i) => (
            <PostCard key={i} post={post} />
          ))}
        </div>

        <div className={styles.allPosts}>
          <button title="All Posts" onClick={() => router.push("/blog")}>
            All Posts
          </button>
        </div>
      </Container>
    </section>
  );
};

export default LatestPosts;
