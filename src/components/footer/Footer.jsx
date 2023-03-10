import Container from '@components/container/Container'
import { FiHeart } from 'react-icons/fi'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <p>
            &copy;2023 All rights reserved. Designed with <FiHeart /> by Jesse
            Ajioh.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
