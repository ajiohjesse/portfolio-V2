import Container from '@components/container/Container'
import Image from 'next/image'
import notFound from '@public/svg/404.svg'
import styles from '@styles/404.module.css'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  return (
    <div className={styles.notFound}>
      <Container>
        <div className={styles.wrapper}>
          <h1>Oops! The requested page was not found.</h1>
          <Image src={notFound} alt="Page not Found" className={styles.image} />
          <button onClick={() => router.push('/')} className={styles.button}>
            Homepage
          </button>
        </div>
      </Container>
    </div>
  )
}

export default NotFound
