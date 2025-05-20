'use client'

import { motion } from 'motion/react'
import styles from '@/app/components/ExpandedCard/ExpandedCard.module.sass'
import button from '@/styles/Button.module.sass'

export default function ExpandedCard({ project, onClose, index = 1 }: { project: any; onClose: () => void, index?:number }) {
  return (
    <motion.div
      layoutId={project.id}
      initial={{ aspectRatio: '5 / 4', opacity: 0 }}
      animate={{ aspectRatio: 'auto', opacity: 1 }}
      exit={{ aspectRatio: '5 / 4', opacity: 0 }}
      transition={{ duration: .3, ease: 'easeInOut' }}
      className={styles.cardWrapper}
      onClick={onClose}
    >
      <motion.div
        className={styles.card}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div 
          layoutId={`${project.id}-cover`}
          className={styles.cover}
        >
          <motion.button
            aria-label="Close modal"
            className={`${button.circle} ${button.close}`}
            onClick={onClose}
            whileTap={{ y: 1 }}
          >
            x
          </motion.button>
          <img
            src={`https://i.pravatar.cc/768?img=${index+1}`}
            alt={project.title}
          />
        </motion.div>
        <div className={styles.body}>
          <h2>{project.title}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </motion.div>
    </motion.div>
  )
}