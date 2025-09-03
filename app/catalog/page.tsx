"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, Star, Clock, MapPin } from 'lucide-react'

export default function ServiceCatalog() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Comprehensive service catalog based on your actual services
  const serviceCatalog = {
    'home-cleaning': {
      name: '🏠 Home Cleaning & Care',
      description: 'Professional home cleaning and maintenance services',
      services: [
        { name: 'Home Deep Cleaning (Full House)', price: '₹1,199', duration: '4-5 hours', rating: 4.9, reviews: 12000 },
        { name: 'Bathroom Cleaning / Deep Cleaning', price: '₹399', duration: '2-3 hours', rating: 4.8, reviews: 8500 },
        { name: 'Kitchen Cleaning / Deep Cleaning', price: '₹499', duration: '2-3 hours', rating: 4.7, reviews: 7200 },
        { name: 'Bedroom & Living Room Cleaning', price: '₹299', duration: '2-3 hours', rating: 4.6, reviews: 5400 },
        { name: 'Sofa & Upholstery Cleaning', price: '₹599', duration: '3-4 hours', rating: 4.8, reviews: 6800 },
        { name: 'Carpet Shampooing & Cleaning', price: '₹799', duration: '3-4 hours', rating: 4.7, reviews: 5900 },
        { name: 'Mattress Cleaning & Sanitization', price: '₹699', duration: '2-3 hours', rating: 4.9, reviews: 4200 },
        { name: 'Curtain & Drapery Cleaning', price: '₹499', duration: '2-3 hours', rating: 4.6, reviews: 3800 },
        { name: 'Window & Glass Cleaning', price: '₹299', duration: '1-2 hours', rating: 4.5, reviews: 3200 },
        { name: 'Floor Scrubbing & Polishing', price: '₹899', duration: '3-4 hours', rating: 4.8, reviews: 7600 },
        { name: 'Wooden Floor Cleaning & Polishing', price: '₹1,099', duration: '4-5 hours', rating: 4.9, reviews: 8900 },
        { name: 'Chimney & Exhaust Fan Cleaning', price: '₹599', duration: '2-3 hours', rating: 4.7, reviews: 4500 },
        { name: 'Post-Construction Cleaning', price: '₹1,499', duration: '5-6 hours', rating: 4.8, reviews: 6800 },
        { name: 'Move-In / Move-Out Cleaning', price: '₹1,299', duration: '4-5 hours', rating: 4.9, reviews: 9200 }
      ]
    },
    'premium-cleaning': {
      name: '🌟 Premium & Niche Cleaning',
      description: 'Specialized and premium cleaning services',
      services: [
        { name: 'Steam Cleaning (Chemical-Free)', price: '₹1,199', duration: '3-4 hours', rating: 4.9, reviews: 7800 },
        { name: 'Eco-Friendly / Organic Cleaning', price: '₹1,399', duration: '3-4 hours', rating: 4.8, reviews: 6500 },
        { name: 'Silver, Brass & Copper Polishing', price: '₹899', duration: '2-3 hours', rating: 4.7, reviews: 4200 },
        { name: 'Luxury Rug & Persian Carpet Care', price: '₹1,599', duration: '4-5 hours', rating: 4.9, reviews: 3800 },
        { name: 'Wooden Furniture Polishing', price: '₹799', duration: '2-3 hours', rating: 4.6, reviews: 5400 },
        { name: 'Chandelier Cleaning', price: '₹1,299', duration: '3-4 hours', rating: 4.8, reviews: 2800 },
        { name: 'Antique & Artifact Cleaning', price: '₹1,799', duration: '4-5 hours', rating: 4.9, reviews: 1900 },
        { name: 'Graffiti Removal', price: '₹999', duration: '2-3 hours', rating: 4.7, reviews: 3200 },
        { name: 'Chewing Gum & Hard Stain Removal', price: '₹599', duration: '1-2 hours', rating: 4.6, reviews: 4800 },
        { name: 'Solar Panel Cleaning', price: '₹1,199', duration: '3-4 hours', rating: 4.8, reviews: 3600 }
      ]
    },
    'pest-control': {
      name: '🦟 Sanitization & Pest Control',
      description: 'Complete pest control and sanitization services',
      services: [
        { name: 'Home Sanitization (UV / Chemical / Organic)', price: '₹1,499', duration: '3-4 hours', rating: 4.7, reviews: 6200 },
        { name: 'Office / Commercial Sanitization', price: '₹2,999', duration: '6-8 hours', rating: 4.8, reviews: 4200 },
        { name: 'Disinfection Services (Post-Illness)', price: '₹1,799', duration: '4-5 hours', rating: 4.9, reviews: 5800 },
        { name: 'Termite Treatment', price: '₹2,499', duration: '5-6 hours', rating: 4.8, reviews: 3800 },
        { name: 'Bedbug Control', price: '₹1,299', duration: '3-4 hours', rating: 4.7, reviews: 5200 },
        { name: 'Cockroach & Ant Control', price: '₹899', duration: '2-3 hours', rating: 4.6, reviews: 7800 },
        { name: 'Mosquito & Fly Control', price: '₹699', duration: '2-3 hours', rating: 4.5, reviews: 6500 },
        { name: 'Rodent Control', price: '₹1,099', duration: '3-4 hours', rating: 4.8, reviews: 4200 },
        { name: 'Bird Netting & Pigeon Control', price: '₹1,599', duration: '4-5 hours', rating: 4.7, reviews: 2800 }
      ]
    },
    'appliance-services': {
      name: '⚡ Appliance Services',
      description: 'Professional appliance repair and maintenance',
      services: [
        { name: 'AC Cleaning & Servicing', price: '₹799', duration: '2-3 hours', rating: 4.8, reviews: 8500 },
        { name: 'AC Repair & Installation', price: '₹1,299', duration: '3-4 hours', rating: 4.7, reviews: 7200 },
        { name: 'Washing Machine Repair & Service', price: '₹599', duration: '2-3 hours', rating: 4.6, reviews: 6800 },
        { name: 'Refrigerator Repair & Service', price: '₹699', duration: '2-3 hours', rating: 4.7, reviews: 5900 },
        { name: 'Microwave Repair', price: '₹399', duration: '1-2 hours', rating: 4.5, reviews: 4200 },
        { name: 'Dishwasher Repair', price: '₹799', duration: '2-3 hours', rating: 4.6, reviews: 3800 },
        { name: 'Geyser Repair & Service', price: '₹599', duration: '2-3 hours', rating: 4.7, reviews: 5400 },
        { name: 'RO & Water Purifier Service', price: '₹499', duration: '1-2 hours', rating: 4.6, reviews: 4800 },
        { name: 'Chimney Repair & Deep Cleaning', price: '₹899', duration: '2-3 hours', rating: 4.8, reviews: 3600 },
        { name: 'TV Repair & Installation', price: '₹699', duration: '2-3 hours', rating: 4.7, reviews: 5200 }
      ]
    },
    'vehicle-care': {
      name: '🚗 Vehicle Care',
      description: 'Professional vehicle cleaning and care services',
      services: [
        { name: 'Car Exterior Wash', price: '₹299', duration: '1-2 hours', rating: 4.6, reviews: 4200 },
        { name: 'Car Interior Deep Cleaning', price: '₹599', duration: '2-3 hours', rating: 4.7, reviews: 3800 },
        { name: 'Car Dry Cleaning & Detailing', price: '₹1,199', duration: '3-4 hours', rating: 4.8, reviews: 3200 },
        { name: 'Car Waxing & Polishing', price: '₹899', duration: '2-3 hours', rating: 4.7, reviews: 2800 },
        { name: 'Car AC Sanitization', price: '₹499', duration: '1-2 hours', rating: 4.6, reviews: 3600 },
        { name: 'Bike Wash & Detailing', price: '₹199', duration: '1 hour', rating: 4.5, reviews: 5400 },
        { name: 'Headlight Restoration', price: '₹399', duration: '1-2 hours', rating: 4.6, reviews: 2200 }
      ]
    },
    'marble-floor': {
      name: '🪨 Marble, Floor & Stone Care',
      description: 'Professional marble and stone care services',
      services: [
        { name: 'Marble Polishing', price: '₹1,299', duration: '2-3 hours', rating: 4.9, reviews: 8900 },
        { name: 'Granite Polishing', price: '₹1,499', duration: '3-4 hours', rating: 4.8, reviews: 7200 },
        { name: 'Tile Cleaning & Sealing', price: '₹999', duration: '2-3 hours', rating: 4.7, reviews: 6800 },
        { name: 'Terrazzo Polishing', price: '₹1,199', duration: '3-4 hours', rating: 4.8, reviews: 4200 },
        { name: 'Wooden Floor Polishing', price: '₹1,099', duration: '4-5 hours', rating: 4.9, reviews: 8900 },
        { name: 'Epoxy Flooring Services', price: '₹2,999', duration: '6-8 hours', rating: 4.7, reviews: 2800 },
        { name: 'Any Natural Stone Polishing', price: '₹1,399', duration: '3-4 hours', rating: 4.8, reviews: 5200 },
        { name: 'Outdoor Stone Cleaning (Statues/Fountains)', price: '₹1,599', duration: '4-5 hours', rating: 4.6, reviews: 1800 }
      ]
    },
    'office-commercial': {
      name: '🏢 Office & Commercial Cleaning',
      description: 'Professional office and commercial cleaning services',
      services: [
        { name: 'Standard Office Cleaning', price: '₹1,999', duration: '4-5 hours', rating: 4.7, reviews: 4200 },
        { name: 'Office Chair Cleaning', price: '₹299', duration: '1-2 hours', rating: 4.6, reviews: 3800 },
        { name: 'Office Carpet Shampooing', price: '₹1,299', duration: '3-4 hours', rating: 4.8, reviews: 2800 },
        { name: 'Pantry Cleaning', price: '₹599', duration: '2-3 hours', rating: 4.7, reviews: 3200 },
        { name: 'Glass Facade Cleaning', price: '₹1,599', duration: '4-5 hours', rating: 4.6, reviews: 2200 },
        { name: 'Parking Lot Cleaning', price: '₹1,999', duration: '5-6 hours', rating: 4.5, reviews: 1800 },
        { name: 'Warehouse Deep Cleaning', price: '₹3,999', duration: '8-10 hours', rating: 4.7, reviews: 1200 },
        { name: 'Industrial Floor Scrubbing', price: '₹2,499', duration: '6-8 hours', rating: 4.6, reviews: 900 },
        { name: 'IT Equipment Cleaning (Anti-Static)', price: '₹899', duration: '2-3 hours', rating: 4.8, reviews: 1600 }
      ]
    },
    'damage-cleaning': {
      name: '🚨 Specialized Damage Cleaning',
      description: 'Specialized cleaning for damage restoration',
      services: [
        { name: 'Fire / Smoke Damage Cleaning', price: '₹3,999', duration: '8-10 hours', rating: 4.8, reviews: 1200 },
        { name: 'Flood / Water Damage Restoration', price: '₹4,999', duration: '10-12 hours', rating: 4.9, reviews: 800 },
        { name: 'Mold & Fungus Removal', price: '₹2,499', duration: '5-6 hours', rating: 4.7, reviews: 1800 },
        { name: 'Damp Wall Treatment', price: '₹1,999', duration: '4-5 hours', rating: 4.6, reviews: 2200 },
        { name: 'Post-Painting Cleaning', price: '₹1,299', duration: '3-4 hours', rating: 4.7, reviews: 3200 }
      ]
    },
    'seasonal-services': {
      name: '🎉 Seasonal & Lifestyle Services',
      description: 'Seasonal and lifestyle-based cleaning services',
      services: [
        { name: 'Pre-Diwali / Festive Cleaning', price: '₹2,499', duration: '6-8 hours', rating: 4.8, reviews: 5200 },
        { name: 'Post-Party Cleaning', price: '₹1,599', duration: '4-5 hours', rating: 4.7, reviews: 3800 },
        { name: 'Monsoon Dampness Control', price: '₹1,299', duration: '3-4 hours', rating: 4.6, reviews: 4200 },
        { name: 'Summer AC Checkup & Sanitization', price: '₹899', duration: '2-3 hours', rating: 4.7, reviews: 6800 },
        { name: 'Winter Geyser & Heater Servicing', price: '₹699', duration: '2-3 hours', rating: 4.6, reviews: 5400 }
      ]
    },
    'handyman-repair': {
      name: '🛠 Handyman, Repair & Décor Services',
      description: 'Comprehensive handyman and repair services',
      services: [
        { name: 'Plumbing Services (leakage, fittings, new installation)', price: '₹899', duration: '2-4 hours', rating: 4.6, reviews: 5400 },
        { name: 'Electrician Services (wiring, switches, lighting, fan/AC installation)', price: '₹699', duration: '1-3 hours', rating: 4.8, reviews: 7200 },
        { name: 'Wall Decoration & Painting (texture, wallpaper, designer paint)', price: '₹1,499', duration: '3-4 hours', rating: 4.7, reviews: 6200 },
        { name: 'Waterproofing Services (roof, bathroom, walls)', price: '₹2,999', duration: '6-8 hours', rating: 4.8, reviews: 3800 },
        { name: 'Tile Installation & Dismantling', price: '₹1,299', duration: '3-4 hours', rating: 4.6, reviews: 4200 },
        { name: 'False Ceiling Installation & Repair', price: '₹1,999', duration: '4-5 hours', rating: 4.7, reviews: 2800 },
        { name: 'Modular Kitchen Setup & Repair', price: '₹3,999', duration: '8-10 hours', rating: 4.8, reviews: 1800 },
        { name: 'Wardrobe & Furniture Assembly', price: '₹799', duration: '2-3 hours', rating: 4.6, reviews: 4800 },
        { name: 'POP Work & Wall Putty', price: '₹1,099', duration: '3-4 hours', rating: 4.7, reviews: 3200 },
        { name: 'Door & Window Repair / Installation', price: '₹1,199', duration: '3-4 hours', rating: 4.6, reviews: 3800 },
        { name: 'Carpentry Services (custom furniture, repairs)', price: '₹1,099', duration: '3-6 hours', rating: 4.7, reviews: 4800 },
        { name: 'Fire Alarm & Smoke Detector Installation', price: '₹1,499', duration: '3-4 hours', rating: 4.8, reviews: 2200 },
        { name: 'CCTV Installation & Maintenance', price: '₹1,999', duration: '4-5 hours', rating: 4.7, reviews: 1800 },
        { name: 'Home Automation (smart switches, IoT setup)', price: '₹2,499', duration: '5-6 hours', rating: 4.8, reviews: 1200 }
      ]
    }
  }

  const categories = [
    { id: 'all', name: 'All Services', count: Object.values(serviceCatalog).reduce((acc, cat) => acc + cat.services.length, 0) },
    { id: 'home-cleaning', name: '🏠 Home Cleaning & Care', count: serviceCatalog['home-cleaning'].services.length },
    { id: 'premium-cleaning', name: '🌟 Premium & Niche Cleaning', count: serviceCatalog['premium-cleaning'].services.length },
    { id: 'pest-control', name: '🦟 Sanitization & Pest Control', count: serviceCatalog['pest-control'].services.length },
    { id: 'appliance-services', name: '⚡ Appliance Services', count: serviceCatalog['appliance-services'].services.length },
    { id: 'vehicle-care', name: '🚗 Vehicle Care', count: serviceCatalog['vehicle-care'].services.length },
    { id: 'marble-floor', name: '🪨 Marble, Floor & Stone Care', count: serviceCatalog['marble-floor'].services.length },
    { id: 'office-commercial', name: '🏢 Office & Commercial Cleaning', count: serviceCatalog['office-commercial'].services.length },
    { id: 'damage-cleaning', name: '🚨 Specialized Damage Cleaning', count: serviceCatalog['damage-cleaning'].services.length },
    { id: 'seasonal-services', name: '🎉 Seasonal & Lifestyle Services', count: serviceCatalog['seasonal-services'].services.length },
    { id: 'handyman-repair', name: '🛠 Handyman, Repair & Décor Services', count: serviceCatalog['handyman-repair'].services.length }
  ]

  const handleServiceClick = (serviceName: string) => {
    router.push(`/services?search=${encodeURIComponent(serviceName)}`)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
                   {/* Page Header */}
             <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Complete Service Catalog</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our comprehensive range of professional home services. From basic cleaning to specialized repairs, 
              we have everything you need to maintain your home.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.8+ Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Available in Mumbai</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Same Day Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

                   {/* Categories Filter */}
             <section className="py-6 bg-white border-b">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      </section>

                   {/* Services Grid */}
             <section className="py-8">
        <div className="container">
          {selectedCategory === 'all' ? (
            // Show all categories
            <div className="space-y-8">
              {Object.entries(serviceCatalog).map(([categoryId, category]) => (
                <div key={categoryId} className="bg-white rounded-lg shadow-lg p-6">
                                         <div className="mb-4">
                         <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.services.map((service, index) => (
                      <div
                        key={index}
                        onClick={() => handleServiceClick(service.name)}
                        className="bg-gray-50 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-sm">{service.name}</h3>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span className="font-semibold text-orange-600">{service.price}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span>{service.rating}</span>
                            <span className="text-gray-400">({service.reviews})</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                          <Clock className="w-3 h-3" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Show specific category
            <div className="bg-white rounded-lg shadow-lg p-6">
                              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {serviceCatalog[selectedCategory as keyof typeof serviceCatalog]?.name}
                </h2>
                <p className="text-gray-600">
                  {serviceCatalog[selectedCategory as keyof typeof serviceCatalog]?.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {serviceCatalog[selectedCategory as keyof typeof serviceCatalog]?.services.map((service, index) => (
                  <div
                    key={index}
                    onClick={() => handleServiceClick(service.name)}
                    className="bg-gray-50 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm">{service.name}</h3>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="font-semibold text-orange-600">{service.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span>{service.rating}</span>
                        <span className="text-gray-400">({service.reviews})</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                      <Clock className="w-3 h-3" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
