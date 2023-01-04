import Contact from '@components/contact/Contact'
import Hero from '@components/hero/Hero'
import Interests from '@components/interests/Interests'
import Intro from '@components/intro/Intro'
import LatestPosts from '@components/latestPosts/LatestPosts'
import Layout from '@components/Layout'
import Projects from '@components/projects/Projects'
import SEO from '@components/SEO'
import Tools from '@components/tools/Tools'
import useScrollAnimate from '@hooks/useScrollAnimate'

export default function Home() {
  useScrollAnimate('scale', 'scale-in')
  useScrollAnimate('slide-left', 'slide-left-in')
  useScrollAnimate('slide-right', 'slide-right-in')

  return (
    <>
      <SEO />
      <main>
        <Hero />
        <Intro />
        <Tools />
        <Interests />
        <Projects />
        <LatestPosts />
        <Contact />
      </main>
    </>
  )
}
