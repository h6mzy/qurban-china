'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import styles from './SplashScreen.module.sass'

const slides = [
  'A website run by Mariah Mah',
  'In affiliation with Xiji Welfare Charity Centre',
]

export default function SplashScreen() {
  const [visible, setVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const expiry = localStorage.getItem('noSplashUntil')
    const now = Date.now()
    if (!expiry || now > Number(expiry)) {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    if (!visible) return

    if (currentSlide < slides.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentSlide((prev) => prev + 1)
      }, 2000)
      return () => clearTimeout(timeout)
    } else {
      const closeTimeout = setTimeout(() => {
        setVisible(false)
      }, 2000)
      return () => clearTimeout(closeTimeout)
    }
  }, [currentSlide, visible])

  const handleSkip = () => {
    setVisible(false)
  }

  const handleDontShow = () => {
    const days = 7
    const expiryTimestamp = Date.now() + days * 24 * 60 * 60 * 1000 // 7 days
    localStorage.setItem('noSplashUntil', expiryTimestamp.toString())
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {process.env.NODE_ENV === 'development' && (
        <div className={styles.devTools}>
          <button 
            className="fullWidth"
            onClick={() => {
              localStorage.removeItem('noSplashUntil')
              window.location.reload()
            }}
          >
            🔄 Reset Splash
          </button>
        </div>
      )}
      {visible && (
        <motion.div
          className={styles.splash}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={styles.logo}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img src="/logo.png" alt="Logo" />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className={styles.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {slides[currentSlide]}
            </motion.div>
          </AnimatePresence>



          <div className={styles.buttons}>
            <button onClick={handleSkip}>Skip</button>
            <button onClick={handleDontShow}>Don’t show again</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}