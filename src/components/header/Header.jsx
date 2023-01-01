import Container from '@components/container/Container'
import Section from '@components/Section'
import Image from 'next/image'
import styles from './header.module.css'
import logo from '@public/svg/JALogo.svg'
import Link from 'next/link'
import { cl } from '@lib/classNames'
import { useEffect, useRef, useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setMenuOpen(false)
    })
  }, [])

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

          <nav className={cl(styles.nav, menuOpen ? styles.active : '')}>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className={styles.link}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className={styles.link}>
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
