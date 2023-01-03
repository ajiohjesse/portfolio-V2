import useScrollAnimate from '@hooks/useScrollAnimate'
import '@styles/globals.css'
import '@styles/scrollAnimations.css'

export default function App({ Component, pageProps }) {
  useScrollAnimate('swing', 'swing-in')
  useScrollAnimate('scale', 'scale-in')
  useScrollAnimate('slide-left', 'slide-left-in')
  useScrollAnimate('slide-right', 'slide-right-in')

  return <Component {...pageProps} />
}
