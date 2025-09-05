"use client"

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import ServiceCard from '@/components/ServiceCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Filter, Star, MapPin, Clock } from 'lucide-react'

export default function ServicesPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [sortBy, setSortBy] = useState('popular')

  // Mock services data - Updated with actual services
  const services = [
    {
      id: '1',
      title: '🏠 Home Deep Cleaning (Full House)',
      description: 'Complete deep cleaning service for your entire home with verified experts',
      image: '/Gallery/Deep House Cleaning.jpg',
      price: '₹1,199',
      originalPrice: '₹2,999',
      rating: 4.9,
      reviews: 12000,
      duration: '4-5 hours',
      location: 'Mumbai',
      category: 'Home Cleaning',
      isPopular: true,
      discount: 60
    },
    {
      id: '2',
      title: '⚡ AC Cleaning & Servicing',
      description: 'Professional AC maintenance and deep cleaning by certified technicians',
      image: '/Gallery/AC Service 2.jpg',
      price: '₹799',
      originalPrice: '₹1,599',
      rating: 4.8,
      reviews: 8500,
      duration: '2-3 hours',
      location: 'Mumbai',
      category: 'Appliance Services',
      isPopular: true,
      discount: 50
    },
    {
      id: '3',
      title: '🦟 Home Sanitization (UV/Chemical/Organic)',
      description: 'Complete home sanitization with multiple treatment options',
      image: '/Gallery/Interior Painting 2.jpg',
      price: '₹1,499',
      originalPrice: '₹2,999',
      rating: 4.7,
      reviews: 6200,
      duration: '3-4 hours',
      location: 'Mumbai',
      category: 'Pest Control',
      discount: 50
    },
    {
      id: '4',
      title: '🪨 Marble Polishing & Restoration',
      description: 'Professional marble polishing and stone care services',
      image: '/Gallery/Garden Maintenance 2.jpg',
      price: '₹1,299',
      originalPrice: '₹2,599',
      rating: 4.9,
      reviews: 8900,
      duration: '2-3 hours',
      location: 'Mumbai',
      category: 'Marble & Stone Care',
      discount: 50
    },
    {
      id: '5',
      title: '🔧 Plumbing Services',
      description: 'Expert plumbing services for all your home needs',
      image: '/Gallery/Plumbing Repair.jpg',
      price: '₹899',
      originalPrice: '₹1,799',
      rating: 4.6,
      reviews: 5400,
      duration: '2-4 hours',
      location: 'Mumbai',
      category: 'Handyman Services',
      discount: 50
    },
    {
      id: '6',
      title: '⚡ Electrical Installation & Repair',
      description: 'Safe and reliable electrical services',
      image: '/Gallery/Electrical Installation.jpg',
      price: '₹699',
      originalPrice: '₹1,399',
      rating: 4.8,
      reviews: 7200,
      duration: '1-3 hours',
      location: 'Mumbai',
      category: 'Handyman Services',
      discount: 50
    },
    {
      id: '7',
      title: '🪚 Carpentry & Woodwork',
      description: 'Custom carpentry and woodwork services',
      image: '/Gallery/Carpentry Work.jpg',
      price: '₹1,099',
      originalPrice: '₹2,199',
      rating: 4.7,
      reviews: 4800,
      duration: '3-6 hours',
      location: 'Mumbai',
      category: 'Handyman Services',
      discount: 50
    },
    {
      id: '8',
      title: '🍳 Kitchen Remodeling',
      description: 'Complete kitchen renovation and remodeling',
      image: '/Gallery/Kitchen Remodeling.jpg',
      price: '₹15,999',
      originalPrice: '₹25,999',
      rating: 4.9,
      reviews: 3200,
      duration: '2-5 days',
      location: 'Mumbai',
      category: 'Kitchen Services',
      discount: 38
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'home-cleaning', name: '🏠 Home Cleaning', count: 1 },
    { id: 'appliance-services', name: '⚡ Appliance Services', count: 1 },
    { id: 'pest-control', name: '🦟 Pest Control', count: 1 },
    { id: 'marble-stone-care', name: '🪨 Marble & Stone Care', count: 1 },
    { id: 'handyman-services', name: '🛠 Handyman Services', count: 3 },
    { id: 'kitchen-services', name: '🍳 Kitchen Services', count: 1 }
  ]

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase() === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (searchQuery) params.set('search', searchQuery)
    if (selectedCategory !== 'all') params.set('category', selectedCategory)
    router.push(`/services?${params.toString()}`)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Professional home services delivered by verified experts. Find the perfect service for your needs.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search for services..."
                    className="pl-12 pr-4 py-4 text-lg border-0 rounded-l-md focus:ring-2 focus:ring-blue-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button 
                  onClick={handleSearch}
                  className="rounded-l-none px-8 py-4 text-lg bg-orange-500 hover:bg-orange-600 border-0"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-8">
        <div className="container">
          <div className="grid lg:grid-cols-1 xl:grid-cols-4 gap-6">
            {/* Sidebar Filters */}
            <div className="xl:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                
                {/* Categories */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-blue-100 text-blue-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{category.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Sort By</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>

                {/* Quick Stats */}
                <div className="border-t pt-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>4.8+ Average Rating</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>Available in Mumbai</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span>Same Day Service</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="xl:col-span-3">
                              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredServices.length} Services Found
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Filter className="w-4 h-4" />
                  <span>Showing {filteredServices.length} results</span>
                </div>
              </div>

              {filteredServices.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredServices.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
                  <p className="text-gray-600">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
