"use client"

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Sparkles, Star } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface PromoBannerProps {
  id: string
  title: string
  subtitle?: string
  description?: string
  image: string
  buttonText: string
  buttonLink: string
  backgroundColor?: string
  textColor?: string
  badge?: string
  badgeColor?: string
}

export default function PromoBanner({ promo }: { promo: PromoBannerProps }) {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section 
      className={`relative overflow-hidden ${promo.backgroundColor || 'bg-gradient-to-r from-orange-100 to-yellow-100'} py-16`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-300/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400/10 rounded-full animate-bounce"></div>
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${promo.textColor || 'text-gray-900'} animate-fade-in-left`}>
            {promo.badge && (
              <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-bold ${promo.badgeColor || 'bg-orange-500 text-white'} shadow-lg animate-bounce`}>
                <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                {promo.badge}
              </div>
            )}
            
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
                {promo.title}
              </h2>
              
              {promo.subtitle && (
                <h3 className="text-3xl lg:text-4xl font-semibold text-orange-600 animate-fade-in-up delay-200">
                  {promo.subtitle}
                </h3>
              )}
              
              {promo.description && (
                <p className="text-xl text-gray-700 leading-relaxed animate-fade-in-up delay-300">
                  {promo.description}
                </p>
              )}
            </div>

            {/* Features */}
            <div className="flex items-center gap-6 animate-fade-in-up delay-400">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">4.9★ Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Verified</span>
              </div>
            </div>

            <Button 
              onClick={() => router.push(promo.buttonLink)}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up delay-500"
            >
              {promo.buttonText}
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
              <Image
                src={promo.image}
                alt={promo.title}
                fill
                className="object-cover"
              />
              
              {/* Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">50%</div>
                  <div className="text-xs text-gray-600">OFF</div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">₹2,000</div>
                  <div className="text-xs text-gray-600">SAVE</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-300/30 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300/30 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
        <Button 
          variant="ghost" 
          size="lg"
          className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full w-12 h-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
      </div>
      
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
        <Button 
          variant="ghost" 
          size="lg"
          className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full w-12 h-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <ArrowRight className="w-6 h-6" />
        </Button>
      </div>
    </section>
  )
}
