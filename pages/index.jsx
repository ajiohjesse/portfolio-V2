import Container from '@components/container/Container'
import Header from '@components/header/Header'
import Hero from '@components/hero/Hero'
import Interests from '@components/interests/Interests'
import Intro from '@components/intro/Intro'
import Layout from '@components/Layout'
import SEO from '@components/SEO'

export default function Home() {
  return (
    <>
      <SEO />
      <Layout>
        <main>
          <Hero />
          <Intro />
          <Interests />
        </main>
      </Layout>
    </>
  )
}
