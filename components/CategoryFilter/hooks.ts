'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function useCategoryFilter(initial: string = '') {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState(initial)

  useEffect(() => {
    setSelectedCategory(initial)
  }, [initial])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedCategory(value)
    router.push(value ? `/projects/${value}` : '/projects')
  }

  return {
    selectedCategory,
    handleChange,
  }
}