import Container from '@components/container/Container'
import Header from '@components/header/Header'
import Hero from '@components/hero/Hero'
import Interests from '@components/interests/Interests'
import Intro from '@components/intro/Intro'
import LatestPosts from '@components/latestPosts/LatestPosts'
import Layout from '@components/Layout'
import Projects from '@components/projects/Projects'
import SEO from '@components/SEO'
import Tools from '@components/tools/Tools'

export default function Home() {
  return (
    <>
      <SEO />
      <Layout>
        <main>
          <Hero />
          <Intro />
          <Tools />
          <Interests />
          <Projects />
          <LatestPosts />
        </main>
      </Layout>
    </>
  )
}
