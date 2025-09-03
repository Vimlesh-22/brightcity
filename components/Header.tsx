"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, MapPin, ShoppingCart, Bell, User, Menu, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('Mumbai')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const router = useRouter()

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/services?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white sticky top-0 z-50 shadow-lg">
      {/* Top Header Bar */}
      <div className="bg-blue-950 py-1 animate-fade-in">
        <div className="container flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span className="animate-pulse">Deliver to</span>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-200 transition-all duration-300 hover:scale-105">
              <MapPin className="w-3 h-3 animate-bounce" />
              <span>{location}</span>
              <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:text-blue-200 transition-colors duration-300 hover:scale-105">Track Order</span>
            <span className="cursor-pointer hover:text-blue-200 transition-colors duration-300 hover:scale-105">Customer Support</span>
            <span className="cursor-pointer hover:text-blue-200 transition-colors duration-300 hover:scale-105">Professional Login</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-3">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/Gallery/logo.svg" 
                alt="BrightCity Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold group-hover:text-blue-200 transition-colors duration-300">BrightCity</h1>
              <p className="text-xs text-blue-200">Professional Home Services</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className={`relative flex transition-all duration-300 ${isSearchFocused ? 'scale-105' : 'scale-100'}`}>
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search for home services..."
                  className="pl-12 pr-4 py-3 text-lg border-0 rounded-l-md focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>
              <Button 
                onClick={handleSearch}
                className="rounded-l-none px-6 py-3 bg-orange-500 hover:bg-orange-600 border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => router.push('/book')}
            >
              <ShoppingCart className="w-5 h-5 mr-1 animate-bounce" />
              Book Now
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => router.push('/dashboard')}
            >
              <Bell className="w-5 h-5 mr-1 animate-pulse" />
              Notifications
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => router.push('/login')}
            >
              <User className="w-5 h-5 mr-1" />
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-blue-800 border-t border-blue-700">
        <div className="container">
          <div className="flex items-center gap-4 py-2 text-sm overflow-x-auto scrollbar-hide">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-blue-700 flex items-center gap-1 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              <Menu className="w-4 h-4" />
              All Categories
            </Button>
            {[
              { name: '📋 Service Catalog', path: '/catalog' },
              { name: '🏠 Home Cleaning', path: '/services?category=home-cleaning' },
              { name: '⚡ Appliance Services', path: '/services?category=appliance-services' },
              { name: '🦟 Pest Control', path: '/services?category=pest-control' },
              { name: '🛠 Handyman Services', path: '/services?category=handyman-services' },
              { name: '🪨 Marble & Stone Care', path: '/services?category=marble-stone-care' },
              { name: '🏢 Office & Commercial', path: '/services?category=office-commercial' },
              { name: '🚨 Emergency Services', path: '/services?category=emergency-services' }
            ].map((category, index) => (
              <Button 
                key={category.name}
                variant="ghost" 
                className="text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 whitespace-nowrap animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => router.push(category.path)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
