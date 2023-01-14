import Container from "@components/container/Container";
import SEO from "@components/SEO";
import styles from "@styles/blog.module.css";
import postStyles from "@components/latestPosts/latestPosts.module.css";
import PostCard from "@components/latestPosts/PostCard";
import useScrollAnimate from "@hooks/useScrollAnimate";
import TitleHeading from "@components/titleHeading/TitleHeading";
import BlogBanner from "@components/blogBanner/BlogBanner";
import BlogSearch from "@components/blogSearch/BlogSearch";
import { getAllFilesFrontMatter } from "@helpers/mdx";
import { useState } from "react";

const Blog = ({ posts }) => {
  useScrollAnimate("scale", "scale-in");
  useScrollAnimate("slide-left", "slide-left-in");
  useScrollAnimate("slide-right", "slide-right-in");

  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
      <SEO
        title="Blog"
        description="Friendly tips and tutorials on all things 
related to creating beautiful and intuitive user experiences on the web."
      />
      <main>
        <BlogBanner />
        <BlogSearch
          posts={posts}
          searchResults={searchResults}
          setIsSearching={setIsSearching}
          setSearchResults={setSearchResults}
        />

        <section className={styles.allPosts}>
          {!isSearching ? (
            <Container>
              <TitleHeading>All Posts: {posts.length}</TitleHeading>
              <div className={postStyles.wrapper}>
                {posts.map((post, i) => (
                  <PostCard key={i} post={post} />
                ))}
              </div>
            </Container>
          ) : (
            <Container>
              <TitleHeading>
                Search results: {searchResults.length}
              </TitleHeading>
              <div className={postStyles.wrapper}>
                {searchResults.map((post, i) => (
                  <PostCard key={i} post={post} />
                ))}
              </div>
            </Container>
          )}
        </section>
      </main>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const posts = await getAllFilesFrontMatter("blog");

  return {
    props: {
      posts,
    },
  };
};
