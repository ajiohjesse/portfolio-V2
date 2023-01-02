import '../styles/globals.css'
import { Inter, Monda } from '@next/font/google'
import { cl } from '@lib/classNames'

const inter = Inter({
  subsets: ['latin'],
})

const monda = Monda({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }) {
  return (
    <div className={cl(inter.className, monda.className)}>
      <Component {...pageProps} />
    </div>
  )
}
