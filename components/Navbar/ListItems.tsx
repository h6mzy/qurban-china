'use client'

import Link from 'next/link'
import styles from './Navbar.module.sass'

interface ListItemProps {
  label: string
  key: string
}

interface ListItemsProps {
  items: ListItemProps[]
}

export default function ListItems({ items }: ListItemsProps) {
  return (
    <>
      {items.map((item, index) => (
        <li className={styles.item} key={index}>
          <Link className={styles.button} href={`/${item.key}`}>
            {item.label}
          </Link>
        </li>
      ))}
    </>
  )
}