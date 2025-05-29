'use client'

import { useRouter } from 'next/navigation'
import { categories } from '@/lib/categories'
import styles from './Select.module.sass'

interface CategoryFilterProps {
  value: string
}

export default function CategoryFilter({ value }: CategoryFilterProps) {
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value
    router.push(selected ? `/projects/${selected}` : '/projects')
  }

  return (
    <div className={styles.selector}>
      <select
        value={value}
        onChange={handleChange}
        className="fullWidth textCenter"
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>
            {c.label}
          </option>
        ))}
      </select>
    </div>
  )
}