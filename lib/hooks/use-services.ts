import { useState, useEffect } from 'react'

// Mock data for services
const mockServices = [
  {
    id: 1,
    name: 'Deep House Cleaning',
    description: 'Professional deep cleaning service for your entire home',
    pricing: { basePrice: '2,500' },
    ratingAverage: 4.8,
    categories: ['Cleaning', 'Home Care']
  },
  {
    id: 2,
    name: 'Plumbing Repair',
    description: 'Expert plumbing services for all your pipe and fixture needs',
    pricing: { basePrice: '1,800' },
    ratingAverage: 4.9,
    categories: ['Plumbing', 'Repair']
  },
  {
    id: 3,
    name: 'Electrical Installation',
    description: 'Safe and reliable electrical work by certified professionals',
    pricing: { basePrice: '3,200' },
    ratingAverage: 4.7,
    categories: ['Electrical', 'Installation']
  },
  {
    id: 4,
    name: 'Carpentry Work',
    description: 'Custom woodwork and furniture repair services',
    pricing: { basePrice: '2,800' },
    ratingAverage: 4.6,
    categories: ['Carpentry', 'Custom Work']
  },
  {
    id: 5,
    name: 'Interior Painting',
    description: 'Professional interior painting with premium materials',
    pricing: { basePrice: '4,500' },
    ratingAverage: 4.8,
    categories: ['Painting', 'Interior']
  },
  {
    id: 6,
    name: 'Garden Maintenance',
    description: 'Regular garden care and landscaping services',
    pricing: { basePrice: '1,500' },
    ratingAverage: 4.5,
    categories: ['Gardening', 'Maintenance']
  },
  {
    id: 7,
    name: 'AC Service',
    description: 'Complete AC maintenance and repair services',
    pricing: { basePrice: '1,200' },
    ratingAverage: 4.9,
    categories: ['HVAC', 'Maintenance']
  },
  {
    id: 8,
    name: 'Kitchen Remodeling',
    description: 'Complete kitchen renovation and remodeling services',
    pricing: { basePrice: '25,000' },
    ratingAverage: 4.7,
    categories: ['Renovation', 'Kitchen']
  }
]

export function useServices({ limit = 8 } = {}) {
  const [data, setData] = useState(mockServices.slice(0, limit))
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setData(mockServices.slice(0, limit))
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [limit])

  return { data, isLoading }
}
