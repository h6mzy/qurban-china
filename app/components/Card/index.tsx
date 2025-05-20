'use client'

import styles from './Card.module.sass'
import { motion } from 'motion/react'

export default function Card({ project = {}, index = 1 }:{ project:any, index?:number }) {
 return (
    <motion.div
      layoutId={project.id}
      layout
      transition={{ type: 'tween', duration: .3, ease: 'easeInOut' }}
      className={styles.cardWrapper}
    >
      <div className={styles.card}>
        <motion.div 
          layoutId={`${project.id}-cover`}
          className={styles.cover}
        >
          <img
            src={`https://i.pravatar.cc/768?img=${index+1}`}
            alt={project.title}
          />
        </motion.div>
        <h3>{project.title}</h3>
      </div>
    </motion.div>
  )
}