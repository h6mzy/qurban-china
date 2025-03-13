'use client'

import { testimonials } from '../_lib/testimonials'
import Title from '../components/title'
import styles from './testimonials.module.sass'
import { useState } from 'react'

export default function Testimonials() {

  const years = (
    [...new Set(testimonials.map(t => String(t.year)))]
    .sort((a, b) => Number(b) - Number(a))
  )
  const [tab, setTab] = useState(years[0])
  const [visible, setVisible] = useState(false)

  const onBtnClick = (year:string) => {
    setTab(year)
    setVisible(false)
  }
  
  return (
    <main>
      <section className='container'>
        <div className='pad'>
          <Title title='Testimonials' style={{ margin: '0 0 var(--adm-gap)' }} />
          <div className={styles.header}>
          </div>
        </div>
      </section>
    </main>
  )
}