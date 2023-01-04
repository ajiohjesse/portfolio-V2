import Layout from '@components/Layout'
import { usePreserveScroll } from '@hooks/usePreserveScroll'
import '@styles/globals.css'
import '@styles/scrollAnimations.css'
import NextProgress from 'next-progress'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  usePreserveScroll()

  return (
    <Layout>
      <Toaster
        toastOptions={{
          duration: 2000,
          style: {
            borderRadius: '10px',
            padding: '16px',
            color: '#fff',
            background: '#16181d',
          },
        }}
      />
      <NextProgress
        color="#3cb160"
        delay={300}
        options={{ showSpinner: false }}
        height="3px"
      />
      <Component {...pageProps} />
    </Layout>
  )
}
