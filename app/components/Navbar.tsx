'use client'

import Link from 'next/link'
import styles from './Navbar.module.sass'
import { AnimatePresence } from 'motion/react'
import { useState } from 'react'
import * as motion from 'motion/react-client'

const leftNav = ["watch", "contact"]
const rightNav = ["zakat", "projects", "testimonials"]

const Logo = () => (
  <div><strong className={styles.logoStrong}>Chinamuslim</strong>.help</div>
)

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <header className={styles.navbar}>
      <nav className={styles.nav} id='left-nav'>
        <ul className={styles.leftList}>
          <li className={styles.item}>
            <Link className={styles.donateButton} href={`/donate`}>donate</Link>
          </li>
          {leftNav.map((item, key) =>
            <li className={styles.item} key={key}>
              <Link className={styles.button} href={`/${item}`}>{item}</Link>
            </li>
          )}
        </ul>
      </nav>
      <Link href="/" className={styles.logo}>
        <Logo />
      </Link>
      <nav className={styles.nav} id='right-nav'>
        <ul className={styles.rightList}>
          {rightNav.map((item, key) =>
            <li className={styles.item} key={key}>
              <Link className={styles.button} href={`/${item}`}>{item}</Link>
            </li>
          )}
        </ul>
      </nav>
      <div className={styles.container}>
        <motion.button
          className={styles.menuButton}
          onClick={() => setIsVisible(!isVisible)}
          whileTap={{ y: 1 }}
        >
          {isVisible ? 'X' : 'O'}
        </motion.button>
        <AnimatePresence initial={false}>
          {isVisible ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: .2 }}
              className={`flex center center ${styles.mask}`}
              key="box"
              onClick={() => setIsVisible(false)}
            >
              <div className={`flex column nowrap alignCenter fullWidth fullHeight ${styles.box}`}>
                <Logo />
                <nav className={styles.nav}>
                  <ul className={styles.leftList}>
                    <li className={styles.item}>
                      <Link className={styles.donateButton} href={`/donate`}>donate</Link>
                    </li>
                    {leftNav.concat(rightNav).map((item, key) =>
                      <li className={styles.item} key={key}>
                        <Link className={styles.button} href={`/${item}`}>{item}</Link>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar