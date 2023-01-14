import Contact from "@components/contact/Contact";
import Hero from "@components/hero/Hero";
import Interests from "@components/interests/Interests";
import Intro from "@components/intro/Intro";
import LatestPosts from "@components/latestPosts/LatestPosts";
import Projects from "@components/projects/Projects";
import SEO from "@components/SEO";
import Tools from "@components/tools/Tools";
import { getAllFilesFrontMatter } from "@helpers/mdx";
import useScrollAnimate from "@hooks/useScrollAnimate";

export default function Home({ posts }) {
  useScrollAnimate("scale", "scale-in");
  useScrollAnimate("slide-left", "slide-left-in");
  useScrollAnimate("slide-right", "slide-right-in");

  return (
    <>
      <SEO />
      <main>
        <Hero />
        <Intro />
        <Tools />
        <Interests />
        <Projects />
        <LatestPosts posts={posts} />
        <Contact />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllFilesFrontMatter("blog");

  const firstFourPosts = posts.slice(0, 4);

  return {
    props: {
      posts: firstFourPosts,
    },
  };
};
