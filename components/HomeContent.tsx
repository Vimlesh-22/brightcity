"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import CategorySection from '@/components/CategorySection'
import ServiceCard from '@/components/ServiceCard'
import PromoBanner from '@/components/PromoBanner'
import SwipeablePromoBanner from '@/components/SwipeablePromoBanner'

export default function HomeContent() {
  const router = useRouter()

  // Mock data for categories (Flipkart style) - Updated with actual services
  const beautyCategories = [
    {
      id: 'home-cleaning',
      name: '🏠 Home Cleaning & Care',
      image: '/Gallery/Deep House Cleaning.jpg',
      offer: 'Up to 60% Off',
      price: 'From ₹299'
    },
    {
      id: 'premium-cleaning',
      name: '🌟 Premium & Niche Cleaning',
      image: '/Gallery/Cleaning.jpg',
      offer: 'Up to 50% Off',
      price: 'From ₹499'
    },
    {
      id: 'pest-control',
      name: '🦟 Sanitization & Pest Control',
      image: '/Gallery/AC Service.jpg',
      offer: 'Up to 70% Off',
      price: 'From ₹399'
    },
    {
      id: 'appliance-services',
      name: '⚡ Appliance Services',
      image: '/Gallery/Electrical Installation.jpg',
      offer: 'Up to 55% Off',
      price: 'From ₹199'
    },
    {
      id: 'vehicle-care',
      name: '🚗 Vehicle Care',
      image: '/Gallery/Interior Painting.jpg',
      offer: 'Up to 65% Off',
      price: 'From ₹599'
    },
    {
      id: 'marble-floor',
      name: '🪨 Marble, Floor & Stone Care',
      image: '/Gallery/Garden Maintenance.jpg',
      offer: 'Up to 45% Off',
      price: 'From ₹799'
    }
  ]

  const sportsCategories = [
    {
      id: 'office-commercial',
      name: '🏢 Office & Commercial Cleaning',
      image: '/Gallery/Plumbing Repair.jpg',
      offer: '24/7 Available',
      price: 'From ₹799'
    },
    {
      id: 'damage-cleaning',
      name: '🚨 Specialized Damage Cleaning',
      image: '/Gallery/Plumbing Repair 2.jpg',
      offer: 'Up to 40% Off',
      price: 'From ₹299'
    },
    {
      id: 'seasonal-services',
      name: '🎉 Seasonal & Lifestyle Services',
      image: '/Gallery/Electrical Installation 2.jpg',
      offer: 'Up to 50% Off',
      price: 'From ₹399'
    },
    {
      id: 'handyman-repair',
      name: '🛠 Handyman, Repair & Décor Services',
      image: '/Gallery/Carpentry Work.jpg',
      offer: 'Up to 60% Off',
      price: 'From ₹499'
    },
    {
      id: 'kitchen-remodeling',
      name: '🍳 Kitchen Remodeling',
      image: '/Gallery/Kitchen Remodeling.jpg',
      offer: 'Up to 70% Off',
      price: 'From ₹1,999'
    },
    {
      id: 'painting-services',
      name: '🎨 Painting & Decoration',
      image: '/Gallery/Kitchen Remodeling 2.jpg',
      offer: 'Up to 55% Off',
      price: 'From ₹799'
    }
  ]

  // Mock data for services (Urban Company style) - Updated with actual services
  const popularServices = [
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
    }
  ]

  // Mock data for promotional banners (Amazon style) - Updated with actual images
  const promoBanners = [
    {
      id: '1',
      title: 'Starting ₹99',
      subtitle: 'Budget Services',
      description: 'Get professional home services at unbeatable prices. Quality guaranteed!',
      image: '/Gallery/Deep House Cleaning.jpg',
      buttonText: 'Explore Now',
      buttonLink: '/services?category=budget',
      backgroundColor: 'bg-gradient-to-r from-orange-100 to-yellow-100',
      badge: 'New Launch',
      badgeColor: 'bg-red-500 text-white'
    },
    {
      id: '2',
      title: 'Up to 70% Off',
      subtitle: 'Cleaning Services',
      description: 'Professional cleaning experts at your doorstep. Book now and save big!',
      image: '/Gallery/Cleaning.jpg',
      buttonText: 'Book Now',
      buttonLink: '/services?category=cleaning',
      backgroundColor: 'bg-gradient-to-r from-blue-50 to-indigo-50',
      badge: 'Limited Time',
      badgeColor: 'bg-orange-500 text-white'
    },
    {
      id: '3',
      title: 'Emergency Services',
      subtitle: '24/7 Available',
      description: 'Need immediate help? Our emergency services are available round the clock!',
      image: '/Gallery/Plumbing Repair.jpg',
      buttonText: 'Call Now',
      buttonLink: '/services?category=emergency',
      backgroundColor: 'bg-gradient-to-r from-red-50 to-pink-50',
      badge: '24/7',
      badgeColor: 'bg-red-600 text-white'
    },
    {
      id: '4',
      title: 'Premium Services',
      subtitle: 'Luxury Home Care',
      description: 'Experience premium home care services with our expert professionals.',
      image: '/Gallery/Interior Painting.jpg',
      buttonText: 'Learn More',
      buttonLink: '/services?category=premium',
      backgroundColor: 'bg-gradient-to-r from-purple-50 to-indigo-50',
      badge: 'Premium',
      badgeColor: 'bg-purple-600 text-white'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Amazon-style Header */}
      <Header />

      {/* Swipeable Promotional Banner */}
      <SwipeablePromoBanner banners={promoBanners} autoPlay={true} interval={5000} />

      {/* Amazon-style Promotional Banner */}
      <PromoBanner promo={promoBanners[0]} />

      {/* Flipkart-style Category Sections */}
      <CategorySection title="Our Services" categories={beautyCategories} />
      
      <CategorySection title="Our Services" categories={sportsCategories} />

      {/* Urban Company-style Popular Services */}
      <section className="py-8 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Popular Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Second Promotional Banner */}
      <PromoBanner promo={promoBanners[1]} />

      {/* Additional Service Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">🛠 Handyman & Repair Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: '⚡ Electrician', image: '/Gallery/Electrical Installation.jpg', price: 'From ₹299' },
              { name: '🔧 Plumber', image: '/Gallery/Plumbing Repair.jpg', price: 'From ₹399' },
              { name: '🪚 Carpenter', image: '/Gallery/Carpentry Work 2.jpg', price: 'From ₹499' },
              { name: '🎨 Painter', image: '/Gallery/Interior Painting.jpg', price: 'From ₹799' },
              { name: '🔨 Appliance Repair', image: '/Gallery/AC Service.jpg', price: 'From ₹199' },
              { name: '🚨 Emergency Services', image: '/Gallery/Plumbing Repair 2.jpg', price: 'From ₹999' }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-100 mb-3">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-medium text-gray-800 text-sm mb-1">{service.name}</h3>
                <p className="text-gray-600 text-xs">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
