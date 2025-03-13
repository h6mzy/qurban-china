'use client'

import Link from 'next/link'
import Heading from './components/heading'
import Title from './components/title'
import styles from './mariah-mah/mariah.module.sass'
import Video from './components/video'

export default function Home() {

  const video = (
    `<iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFwTPsi-Dw&#x2F;watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>`
  )

  return (
    <main>
      <section className='container'>
        <div className='pad'>
          Home
        </div>
      </section>
    </main>
  )
}