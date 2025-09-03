"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, Star, MapPin, Clock, ArrowRight, TrendingUp } from 'lucide-react'
import Image from 'next/image'

interface Service {
  id: string
  name: string
  description: string
  image: string
  price: string
  rating: number
  reviews: number
  category: string
  location: string
  availability: string
}

const services: Service[] = [
  {
    id: '1',
    name: 'Deep House Cleaning',
    description: 'Professional deep cleaning service for your entire home',
    image: '/Gallery/Deep House Cleaning.jpg',
    price: '₹1,200',
    rating: 4.9,
    reviews: 156,
    category: 'Cleaning',
    location: 'Mumbai',
    availability: 'Same Day'
  },
  {
    id: '2',
    name: 'Kitchen Remodeling',
    description: 'Transform your kitchen with expert remodeling services',
    image: '/Gallery/Kitchen Remodeling.jpg',
    price: '₹25,000',
    rating: 4.8,
    reviews: 89,
    category: 'Renovation',
    location: 'Delhi',
    availability: 'Next Week'
  },
  {
    id: '3',
    name: 'AC Service & Repair',
    description: 'Professional AC installation, service and repair',
    image: '/Gallery/AC Service.jpg',
    price: '₹800',
    rating: 4.7,
    reviews: 234,
    category: 'HVAC',
    location: 'Bangalore',
    availability: 'Same Day'
  },
  {
    id: '4',
    name: 'Garden Maintenance',
    description: 'Complete garden care and landscaping services',
    image: '/Gallery/Garden Maintenance.jpg',
    price: '₹1,500',
    rating: 4.6,
    reviews: 67,
    category: 'Landscaping',
    location: 'Pune',
    availability: 'Next Day'
  },
  {
    id: '5',
    name: 'Interior Painting',
    description: 'Professional interior painting and wall finishing',
    image: '/Gallery/Interior Painting.jpg',
    price: '₹3,500',
    rating: 4.8,
    reviews: 123,
    category: 'Painting',
    location: 'Chennai',
    availability: 'This Week'
  },
  {
    id: '6',
    name: 'Carpentry Work',
    description: 'Custom furniture and woodwork services',
    image: '/Gallery/Carpentry Work.jpg',
    price: '₹2,000',
    rating: 4.7,
    reviews: 98,
    category: 'Carpentry',
    location: 'Hyderabad',
    availability: 'Next Week'
  },
  {
    id: '7',
    name: 'Electrical Installation',
    description: 'Safe and professional electrical services',
    image: '/Gallery/Electrical Installation.jpg',
    price: '₹1,800',
    rating: 4.9,
    reviews: 187,
    category: 'Electrical',
    location: 'Kolkata',
    availability: 'Same Day'
  },
  {
    id: '8',
    name: 'Plumbing Repair',
    description: 'Expert plumbing repair and maintenance',
    image: '/Gallery/Plumbing Repair.jpg',
    price: '₹1,200',
    rating: 4.8,
    reviews: 145,
    category: 'Plumbing',
    location: 'Ahmedabad',
    availability: 'Emergency'
  }
]

export default function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const router = useRouter()

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex])

  const handleServiceClick = (service: Service) => {
    router.push(`/services/${service.id}`)
  }

  const handleCategoryClick = (category: string) => {
    router.push(`/categories/${category.toLowerCase()}`)
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Trending Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Most Popular Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the most trusted and highly-rated services in your area
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={service.id} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.slice(index, index + 4).map((s) => (
                      <Card 
                        key={s.id}
                        className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-0 shadow-lg"
                        onClick={() => handleServiceClick(s)}
                      >
                        {/* Service Image */}
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={s.image}
                            alt={s.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          
                          {/* Trending Badge */}
                          <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </div>
                          
                          {/* Category Badge */}
                          <div className="absolute top-3 right-3">
                            <Badge 
                              variant="secondary" 
                              className="bg-white/90 text-gray-700 hover:bg-blue-100 cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleCategoryClick(s.category)
                              }}
                            >
                              {s.category}
                            </Badge>
                          </div>
                        </div>

                        <CardContent className="p-6 space-y-4">
                          {/* Service Info */}
                          <div>
                            <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors line-clamp-1">
                              {s.name}
                            </h3>
                            <p className="text-gray-600 text-sm line-clamp-2 mt-1">
                              {s.description}
                            </p>
                          </div>

                          {/* Service Stats */}
                          <div className="space-y-3">
                            {/* Rating */}
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-semibold text-sm">{s.rating}</span>
                              </div>
                              <span className="text-gray-500 text-sm">({s.reviews} reviews)</span>
                            </div>

                            {/* Location & Availability */}
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-1 text-gray-600">
                                <MapPin className="w-4 h-4" />
                                <span>{s.location}</span>
                              </div>
                              <div className="flex items-center gap-1 text-green-600">
                                <Clock className="w-4 h-4" />
                                <span className="font-medium">{s.availability}</span>
                              </div>
                            </div>

                            {/* Price */}
                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-bold text-blue-600">{s.price}</span>
                              <Button 
                                size="sm" 
                                className="bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-700"
                              >
                                Book Now
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(services.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * 4)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / 4) === index 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm"
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
            </Button>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            onClick={() => router.push('/services')}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
