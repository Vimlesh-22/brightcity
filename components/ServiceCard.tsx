"use client"

import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, Clock, MapPin, ArrowRight, Heart, Eye } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface ServiceCardProps {
  id: string
  title: string
  description: string
  image: string
  price: string
  originalPrice?: string
  rating: number
  reviews: number
  duration: string
  location: string
  category: string
  isPopular?: boolean
  discount?: number
}

export default function ServiceCard({ service }: { service: ServiceCardProps }) {
  const router = useRouter()
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 overflow-hidden transform hover:scale-105 hover:w-[calc(100%+20px)]"
      onClick={() => router.push(`/services/${service.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative">
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {service.isPopular && (
              <Badge className="bg-orange-500 text-white text-xs">
                Popular
              </Badge>
            )}
            {service.discount && (
              <Badge className="bg-red-500 text-white text-xs">
                {service.discount}% OFF
              </Badge>
            )}
          </div>
          
          {/* Rating */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-bold">{service.rating}</span>
          </div>

          {/* Category Badge */}
          <div className="absolute bottom-3 left-3">
            <Badge className="bg-blue-600/90 backdrop-blur-sm text-white text-xs">
              {service.category}
            </Badge>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-3 space-y-2">
          {/* Title */}
          <div>
            <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 text-lg">
              {service.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {service.description}
          </p>

          {/* Info Row */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-full">
              <Clock className="w-3 h-3 text-blue-600" />
              <span className="text-blue-700 font-medium">{service.duration}</span>
            </div>
            <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
              <MapPin className="w-3 h-3 text-green-600" />
              <span className="text-green-700 font-medium">{service.location}</span>
            </div>
          </div>

          {/* Reviews */}
          <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-lg">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{service.rating}★</span>
            </div>
            <span>({service.reviews.toLocaleString()} reviews)</span>
          </div>

          {/* Price Section */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">{service.price}</span>
              {service.originalPrice && (
                <span className="text-sm text-gray-500 line-through">{service.originalPrice}</span>
              )}
            </div>
            
            <Button 
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
            >
              Book Now
              <ArrowRight className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
