import Container from '@components/container/Container'
import Image from 'next/image'
import styles from './header.module.css'
import logo from '@public/svg/JALogo.svg'
import Link from 'next/link'
import { cl } from '@utils/classNames'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  //close menu on scroll
  useEffect(() => {
    document.addEventListener('scroll', () => {
      setMenuOpen(false)
    })
  }, [])

  //get classname for active page link
  const getActiveLinkClass = (link) => {
    return router.asPath === link ? cl(styles.link, styles.active) : styles.link
  }

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <Image
            src={logo}
            alt="Logo showing the J and A alphabets."
            height="20"
            width="48"
          />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            role="button"
            title="menu"
            className={cl(styles.menuBtn, menuOpen ? styles.active : '')}
          >
            <div className={styles.menuBar} data-bar-1></div>
            <div className={styles.menuBar} data-bar-2></div>
            <div className={styles.menuBar} data-bar-3></div>
          </button>

          <nav
            className={cl(styles.nav, menuOpen ? styles.active : '')}
            onClick={() => setMenuOpen(false)}
          >
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/" className={getActiveLinkClass('/')}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className={getActiveLinkClass('/blog')}
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={getActiveLinkClass('/contact')}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
