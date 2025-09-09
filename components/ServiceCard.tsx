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
      className="group hover:shadow-xl transition-all duration-300 cursor-pointer border border-border overflow-hidden transform hover:scale-105 bg-card"
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
              <Badge className="bg-accent text-accent-foreground text-xs">
                Popular
              </Badge>
            )}
            {service.discount && (
              <Badge className="bg-destructive text-destructive-foreground text-xs">
                {service.discount}% OFF
              </Badge>
            )}
          </div>
          
          {/* Rating */}
          <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="w-3 h-3 fill-accent text-accent" />
            <span className="text-xs font-bold text-foreground">{service.rating}</span>
          </div>

          {/* Category Badge */}
          <div className="absolute bottom-3 left-3">
            <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs">
              {service.category}
            </Badge>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-3 space-y-2">
          {/* Title */}
          <div>
            <h3 className="font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300 text-lg">
              {service.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {service.description}
          </p>

          {/* Info Row */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
              <Clock className="w-3 h-3 text-primary" />
              <span className="text-primary font-medium">{service.duration}</span>
            </div>
            <div className="flex items-center gap-1 bg-secondary/20 px-2 py-1 rounded-full">
              <MapPin className="w-3 h-3 text-secondary-foreground" />
              <span className="text-secondary-foreground font-medium">{service.location}</span>
            </div>
          </div>

          {/* Reviews */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-lg">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-accent text-accent" />
              <span className="font-semibold">{service.rating}★</span>
            </div>
            <span>({service.reviews.toLocaleString()} reviews)</span>
          </div>

          {/* Price Section */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground">{service.price}</span>
              {service.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">{service.originalPrice}</span>
              )}
            </div>
            
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
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
