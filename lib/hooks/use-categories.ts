import { useState, useEffect } from 'react'

// Mock data for categories
const mockCategories = [
  { id: 1, name: 'Cleaning', slug: 'cleaning', icon: '🧹' },
  { id: 2, name: 'Plumbing', slug: 'plumbing', icon: '🔧' },
  { id: 3, name: 'Electrical', slug: 'electrical', icon: '⚡' },
  { id: 4, name: 'Carpentry', slug: 'carpentry', icon: '🔨' },
  { id: 5, name: 'Painting', slug: 'painting', icon: '🎨' },
  { id: 6, name: 'Gardening', slug: 'gardening', icon: '🌱' },
]

export function useFeaturedCategories() {
  const [data, setData] = useState(mockCategories)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setData(mockCategories)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return { data, isLoading }
}
