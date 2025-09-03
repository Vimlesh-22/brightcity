"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PromoBanner {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  buttonText: string
  buttonLink: string
  backgroundColor: string
  badge?: string
  badgeColor?: string
}

interface SwipeablePromoBannerProps {
  banners: PromoBanner[]
  autoPlay?: boolean
  interval?: number
}

export default function SwipeablePromoBanner({ 
  banners, 
  autoPlay = true, 
  interval = 5000 
}: SwipeablePromoBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const router = useRouter()

  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
    }, interval)

    return () => clearInterval(timer)
  }, [isPlaying, interval, banners.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
  }

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleBannerClick = (banner: PromoBanner) => {
    router.push(banner.buttonLink)
  }

  if (banners.length === 0) return null

  return (
    <section className="relative bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          {/* Banner Container */}
          <div className="relative h-72 md:h-80">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className={`h-full ${banner.backgroundColor} relative overflow-hidden`}>
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="relative h-full flex items-center">
                    <div className="container mx-auto px-8">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Text Content */}
                        <div className="text-center md:text-left space-y-4">
                          {banner.badge && (
                            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${banner.badgeColor}`}>
                              {banner.badge}
                            </div>
                          )}
                          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {banner.title}
                          </h2>
                          <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                            {banner.subtitle}
                          </h3>
                          <p className="text-gray-600 text-lg">
                            {banner.description}
                          </p>
                          <Button
                            onClick={() => handleBannerClick(banner)}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                          >
                            {banner.buttonText}
                          </Button>
                        </div>
                        
                        {/* Image */}
                        <div className="hidden md:block">
                          <img
                            src={banner.image}
                            alt={banner.title}
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous banner"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next banner"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={toggleAutoPlay}
            className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label={isPlaying ? "Pause auto-play" : "Start auto-play"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
