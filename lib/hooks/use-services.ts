import { useState, useEffect } from 'react'
import type { Service } from '@/types'

// Mock data for services
const mockServices: Service[] = [
  {
    id: '1',
    name: 'Deep House Cleaning',
    description: 'Professional deep cleaning service for your entire home',
    pricing: { basePrice: 2500 },
    ratingAverage: 4.8,
    ratingCount: 45,
    categories: ['Cleaning', 'Home Care']
  },
  {
    id: '2',
    name: 'Plumbing Repair',
    description: 'Expert plumbing services for all your pipe and fixture needs',
    pricing: { basePrice: 1800 },
    ratingAverage: 4.9,
    ratingCount: 32,
    categories: ['Plumbing', 'Repair']
  },
  {
    id: '3',
    name: 'Electrical Installation',
    description: 'Safe and reliable electrical work by certified professionals',
    pricing: { basePrice: 3200 },
    ratingAverage: 4.7,
    ratingCount: 28,
    categories: ['Electrical', 'Installation']
  },
  {
    id: '4',
    name: 'Carpentry Work',
    description: 'Custom woodwork and furniture repair services',
    pricing: { basePrice: 2800 },
    ratingAverage: 4.6,
    ratingCount: 19,
    categories: ['Carpentry', 'Custom Work']
  },
  {
    id: '5',
    name: 'Interior Painting',
    description: 'Professional interior painting with premium materials',
    pricing: { basePrice: 4500 },
    ratingAverage: 4.8,
    ratingCount: 56,
    categories: ['Painting', 'Interior']
  },
  {
    id: '6',
    name: 'Garden Maintenance',
    description: 'Regular garden care and landscaping services',
    pricing: { basePrice: 1500 },
    ratingAverage: 4.5,
    ratingCount: 23,
    categories: ['Gardening', 'Maintenance']
  },
  {
    id: '7',
    name: 'AC Service',
    description: 'Complete AC maintenance and repair services',
    pricing: { basePrice: 1200 },
    ratingAverage: 4.9,
    ratingCount: 67,
    categories: ['HVAC', 'Maintenance']
  },
  {
    id: '8',
    name: 'Kitchen Remodeling',
    description: 'Complete kitchen renovation and remodeling services',
    pricing: { basePrice: 25000 },
    ratingAverage: 4.7,
    ratingCount: 12,
    categories: ['Renovation', 'Kitchen']
  }
]

interface UseServicesOptions {
  limit?: number
  category?: string
  id?: string
}

export function useServices({ limit = 8, category, id }: UseServicesOptions = {}) {
  const [data, setData] = useState<Service[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      setIsError(false)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      let filteredServices = [...mockServices]
      
      // Filter by category if provided
      if (category) {
        filteredServices = filteredServices.filter(service => 
          service.categories?.some(cat => 
            cat.toLowerCase().includes(category.toLowerCase())
          )
        )
      }
      
      // Filter by ID if provided
      if (id) {
        const service = filteredServices.find(s => s.id === id)
        setData(service ? [service] : [])
        setIsLoading(false)
        return
      }
      
      // Apply limit
      const limitedServices = filteredServices.slice(0, limit)
      setData(limitedServices)
    } catch (error) {
      setIsError(true)
      setData([])
    } finally {
      setIsLoading(false)
    }
  }

  const refetch = () => {
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [limit, category, id])

  return { data, isLoading, isError, refetch }
}
