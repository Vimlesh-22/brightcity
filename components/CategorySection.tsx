"use client"

import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface CategoryCardProps {
  id: string
  name: string
  image: string
  offer: string
  price?: string
  rating?: number
  reviews?: number
}

export default function CategorySection({ title, categories }: { title: string, categories: CategoryCardProps[] }) {
  const router = useRouter()
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="py-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 animate-fade-in-up">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Card 
              key={category.id}
              className={`group hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200 overflow-hidden transform hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => router.push(`/services?category=${category.id}`)}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-4 text-center space-y-4 relative">
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg transition-opacity duration-500 ${hoveredCard === category.id ? 'opacity-100' : 'opacity-0'}`}></div>
                
                {/* Image Container */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:rotate-3 transition-all duration-500"
                  />
                  
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                  
                  {/* Sparkle Effect */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="w-4 h-4 text-yellow-400 animate-spin" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-3 relative z-10">
                  <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  {category.offer && (
                    <div className="text-orange-600 font-bold text-xs bg-orange-50 px-2 py-1 rounded-full animate-pulse">
                      {category.offer}
                    </div>
                  )}
                  
                  {category.price && (
                    <div className="text-gray-700 font-medium text-sm">
                      From {category.price}
                    </div>
                  )}
                  
                  {category.rating && (
                    <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 animate-pulse" />
                      <span>{category.rating}★</span>
                      {category.reviews && (
                        <span>({category.reviews})</span>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Explore Button */}
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 group-hover:scale-105"
                >
                  <ArrowRight className="w-3 h-3 mr-1 group-hover:translate-x-1 transition-transform duration-300" />
                  Explore
                </Button>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-lg transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
