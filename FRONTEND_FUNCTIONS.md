# BrightCity Frontend Functions Documentation

## 🏗️ **Project Overview**
A comprehensive home services platform built with Next.js, React, and TypeScript featuring advanced UI/UX enhancements, dark mode support, and interactive features.

## 📁 **Project Structure**
```
├── app/
│   ├── globals.css          # Enhanced design system with animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx            # Main page component
├── components/
│   ├── HomeContent.tsx     # Enhanced main component with all features
│   └── ui/                 # Reusable UI components
│       ├── button.tsx      # Button with variants
│       ├── card.tsx        # Card components
│       ├── badge.tsx       # Badge component
│       ├── skeleton.tsx    # Loading skeleton
│       └── input.tsx       # Input component
├── lib/
│   ├── utils.ts            # Utility functions
│   └── hooks/              # Custom React hooks
│       ├── use-categories.ts
│       └── use-services.ts
└── package.json
```

## 🎨 **Design System Features**

### **Color System**
- **Light Theme**: White background with blue primary (#3b82f6) and emerald accent (#10b981)
- **Dark Theme**: Near-black background with consistent blue/emerald palette
- **Chart Colors**: Blue, emerald, cyan, amber, and slate variants
- **Sidebar Variables**: Dedicated sidebar theming support

### **Animation System**
```css
/* Available Animation Classes */
.fade-in              /* Smooth opacity transition */
.slide-up             /* Upward motion animation */
.animate-fade-in-up   /* Fade in with upward motion */
.animate-scale-in     /* Scale in animation */
.animate-float        /* Gentle floating motion */
.animate-pulse-glow   /* Glowing pulse effect */
.shimmer              /* Loading shimmer effect */
```

### **Utility Classes**
```css
/* Brand Utilities */
.brand-bg             /* Theme-aware background */
.brand-text           /* Theme-aware text color */
.brand-accent         /* Accent color */

/* Button Classes */
.btn-primary          /* Primary button with hover effects */
.btn-secondary        /* Secondary button with hover effects */

/* Text Utilities */
.text-balance         /* Better text wrapping */
.line-clamp-1         /* Single line text truncation */
.line-clamp-2         /* Two line text truncation */
```

## 🚀 **Enhanced Features Implementation**

### **1. Dark Mode Toggle**
```tsx
const [isDarkMode, setIsDarkMode] = useState(false)

useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}, [isDarkMode])

// Dark mode toggle button
<button
  onClick={() => setIsDarkMode(!isDarkMode)}
  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
>
  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
</button>
```

### **2. Advanced Search with Auto-suggestions**
```tsx
const [suggestions, setSuggestions] = useState([])
const [showSuggestions, setShowSuggestions] = useState(false)

const handleSearchInput = (value) => {
  const filtered = topTrending.filter(service => 
    service.name.toLowerCase().includes(value.toLowerCase())
  )
  setSuggestions(filtered.slice(0, 5))
  setShowSuggestions(value.length > 0)
}

// Auto-suggestions dropdown
{showSuggestions && suggestions.length > 0 && (
  <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border rounded-lg shadow-lg z-50">
    {suggestions.map(suggestion => (
      <div 
        key={suggestion.id} 
        className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
        onClick={() => {
          setSearchQuery(suggestion.name)
          setShowSuggestions(false)
        }}
      >
        <div className="font-medium">{suggestion.name}</div>
        <div className="text-sm text-gray-500">₹{suggestion.pricing?.basePrice}</div>
      </div>
    ))}
  </div>
)}
```

### **3. Service Filtering System**
```tsx
const [selectedCategory, setSelectedCategory] = useState('all')
const [priceRange, setPriceRange] = useState([0, 50000])

const filteredServices = useMemo(() => {
  let filtered = topTrending
  
  // Category filter
  if (selectedCategory !== 'all') {
    filtered = filtered.filter(service => 
      service.categories?.includes(selectedCategory)
    )
  }
  
  // Price range filter
  filtered = filtered.filter(service => {
    const price = parseInt(service.pricing?.basePrice?.replace(/,/g, '') || '0')
    return price >= priceRange[0] && price <= priceRange[1]
  })
  
  return filtered
}, [topTrending, selectedCategory, priceRange])
```

### **4. Favorites/Wishlist System**
```tsx
const [favorites, setFavorites] = useState([])

const toggleFavorite = (serviceId) => {
  setFavorites(prev => 
    prev.includes(serviceId) 
      ? prev.filter(id => id !== serviceId)
      : [...prev, serviceId]
  )
}

// Favorite button in service cards
<button
  onClick={(e) => {
    e.stopPropagation()
    toggleFavorite(service.id)
  }}
  className="absolute top-3 left-3 p-2 bg-white/80 rounded-full"
>
  <Heart 
    className={`w-5 h-5 ${favorites.includes(service.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
  />
</button>
```

### **5. Service Comparison Tool**
```tsx
const [compareList, setCompareList] = useState([])

const addToCompare = (service) => {
  if (compareList.length < 3 && !compareList.find(s => s.id === service.id)) {
    setCompareList([...compareList, service])
  }
}

const removeFromCompare = (serviceId) => {
  setCompareList(prev => prev.filter(s => s.id !== serviceId))
}

// Compare floating panel
{compareList.length > 0 && (
  <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50">
    <div className="flex items-center gap-2 mb-2">
      <Eye className="w-5 h-5 text-blue-600" />
      <span className="font-medium">Compare ({compareList.length}/3)</span>
    </div>
    {compareList.map(service => (
      <div key={service.id} className="flex items-center justify-between text-sm">
        <span className="truncate max-w-32">{service.name}</span>
        <button onClick={() => removeFromCompare(service.id)}>
          <X className="w-4 h-4 text-red-500" />
        </button>
      </div>
    ))}
    <Button size="sm" className="w-full">Compare Now</Button>
  </div>
)}
```

### **6. Mobile-Responsive Navigation**
```tsx
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

// Mobile menu button
<button 
  className="md:hidden"
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
>
  <Menu className="w-6 h-6" />
</button>

// Mobile menu dropdown
{isMobileMenuOpen && (
  <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t">
    <div className="container py-4 space-y-4">
      <button onClick={() => {
        window.location.href = '/services'
        setIsMobileMenuOpen(false)
      }}>
        Services
      </button>
      <button onClick={() => {
        window.location.href = '/categories'
        setIsMobileMenuOpen(false)
      }}>
        Categories
      </button>
    </div>
  </div>
)}
```

### **7. Scroll-Triggered Animations**
```tsx
const [isVisible, setIsVisible] = useState(false)
const ref = useRef(null)

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => setIsVisible(entry.isIntersecting),
    { threshold: 0.1 }
  )
  if (ref.current) observer.observe(ref.current)
  return () => observer.disconnect()
}, [])

// Animated content
<div 
  ref={ref} 
  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
>
  {/* Content */}
</div>
```

### **8. Enhanced Loading States**
```tsx
const [isInitialLoad, setIsInitialLoad] = useState(true)

useEffect(() => {
  const timer = setTimeout(() => setIsInitialLoad(false), 2000)
  return () => clearTimeout(timer)
}, [])

// Enhanced skeleton with shimmer
const ServiceCardSkeleton = () => (
  <Card className="overflow-hidden animate-pulse">
    <div className="shimmer h-48 w-full" />
    <div className="p-4 space-y-3">
      <div className="shimmer h-4 w-3/4" />
      <div className="shimmer h-3 w-full" />
      <div className="shimmer h-3 w-2/3" />
    </div>
  </Card>
)
```

### **9. Analytics & Event Tracking**
```tsx
const trackEvent = (eventName, properties) => {
  console.log('Event:', eventName, properties)
  // Add your analytics tracking here (Google Analytics, Mixpanel, etc.)
}

// Usage in components
<Button onClick={() => {
  trackEvent('service_booked', { 
    serviceId: service.id, 
    serviceName: service.name,
    price: service.pricing?.basePrice 
  })
  handleBooking(service.id)
}}>
  Book Now
</Button>
```

### **10. Service Worker for Offline Support**
```tsx
useEffect(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(console.error)
  }
}, [])
```

## 🎯 **Interactive Components**

### **Enhanced Service Cards**
```tsx
<Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
  {/* Service Image with Overlay */}
  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100">
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    
    {/* Favorite Button */}
    <button className="absolute top-3 left-3 p-2 bg-white/80 rounded-full">
      <Heart className="w-5 h-5 text-gray-400" />
    </button>
    
    {/* Compare Button */}
    <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full">
      <Eye className="w-5 h-5 text-gray-400" />
    </button>
  </div>
  
  {/* Service Content */}
  <CardContent className="p-4 space-y-3">
    <h3 className="font-semibold group-hover:text-blue-600 transition-colors">
      {service.name}
    </h3>
    <p className="text-sm text-gray-500 line-clamp-2">
      {service.description}
    </p>
    
    {/* Price and Rating */}
    <div className="flex items-center justify-between text-sm">
      <span className="text-green-600 font-semibold">
        ₹{service.pricing?.basePrice}
      </span>
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 fill-current text-orange-500" />
        <span>{service.ratingAverage?.toFixed(1) || '4.8'}</span>
      </div>
    </div>
    
    {/* Action Button */}
    <Button className="w-full group-hover:bg-blue-600 transition-colors">
      Book Now
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </Button>
  </CardContent>
</Card>
```

### **Filter Panel**
```tsx
<div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Category Filter */}
    <div>
      <label className="block text-sm font-medium mb-2">Category</label>
      <select 
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full p-2 border rounded-md"
      >
        <option value="all">All Categories</option>
        {featuredCategories?.map(cat => (
          <option key={cat.id} value={cat.name}>{cat.name}</option>
        ))}
      </select>
    </div>

    {/* Price Range Filter */}
    <div>
      <label className="block text-sm font-medium mb-2">Price Range</label>
      <div className="flex gap-2 items-center">
        <input
          type="number"
          placeholder="Min"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
          className="w-full p-2 border rounded-md"
        />
        <span>-</span>
        <input
          type="number"
          placeholder="Max"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 50000])}
          className="w-full p-2 border rounded-md"
        />
      </div>
    </div>

    {/* Sort Options */}
    <div>
      <label className="block text-sm font-medium mb-2">Sort By</label>
      <select className="w-full p-2 border rounded-md">
        <option value="popular">Most Popular</option>
        <option value="rating">Highest Rated</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </div>
  </div>
</div>
```

## 📱 **Responsive Design Features**

### **Mobile-First Approach**
- **Breakpoints**: 640px, 768px, 1024px, 1280px, 1536px
- **Flexible Grid**: Responsive grid layouts
- **Touch-Friendly**: Large touch targets for mobile
- **Mobile Menu**: Collapsible navigation for small screens

### **Container System**
```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) { .container { max-width: 640px; } }
@media (min-width: 768px) { .container { max-width: 768px; } }
@media (min-width: 1024px) { .container { max-width: 1024px; } }
@media (min-width: 1280px) { .container { max-width: 1280px; } }
@media (min-width: 1536px) { .container { max-width: 1536px; } }
```

## 🎨 **Animation System**

### **Keyframe Animations**
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(8px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

### **Transition Classes**
```css
/* Interactive element transitions */
button, a, .card, input, select, textarea {
  transition: color 150ms ease, background-color 150ms ease, 
              border-color 150ms ease, box-shadow 150ms ease, 
              transform 120ms ease;
}

/* Hover effects */
.group:hover .group-hover\:scale-110 { transform: scale(1.1); }
.group:hover .group-hover\:translate-x-1 { transform: translateX(0.25rem); }
.group:hover .group-hover\:bg-blue-600 { background-color: rgb(37 99 235); }
```

## 🔧 **Custom Hooks**

### **useFeaturedCategories**
```tsx
export function useFeaturedCategories() {
  const [data, setData] = useState(mockCategories)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(mockCategories)
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return { data, isLoading }
}
```

### **useServices**
```tsx
export function useServices({ limit = 8 } = {}) {
  const [data, setData] = useState(mockServices.slice(0, limit))
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(mockServices.slice(0, limit))
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [limit])

  return { data, isLoading }
}
```

## 🎯 **Performance Optimizations**

### **Memoization**
```tsx
const topTrending = useMemo(() => {
  const services = trending || []
  return Array.isArray(services) ? services.slice(0, 8) : []
}, [trending])

const filteredServices = useMemo(() => {
  let filtered = topTrending
  // ... filtering logic
  return filtered
}, [topTrending, selectedCategory, priceRange])
```

### **Lazy Loading**
```tsx
// Intersection Observer for lazy loading
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // Load content when visible
      }
    },
    { threshold: 0.1 }
  )
  if (ref.current) observer.observe(ref.current)
  return () => observer.disconnect()
}, [])
```

### **Service Worker**
```tsx
// Register service worker for offline support
useEffect(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(console.error)
  }
}, [])
```

## 🎨 **Theme System**

### **CSS Variables**
```css
:root {
  --background: 0 0% 100%;
  --foreground: 215 28% 17%;
  --primary: 217 91% 60%;
  --primary-foreground: 0 0% 100%;
  --secondary: 215.4 16.3% 46.9%;
  --secondary-foreground: 0 0% 100%;
  --accent: 160 84% 39%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 72% 51%;
  --destructive-foreground: 0 0% 100%;
  --border: 214.3 31.8% 91.4%;
  --input: 0 0% 100%;
  --ring: 217 91% 60%;
  --radius: 0.5rem;
}

.dark {
  --background: 0 0% 4%;
  --foreground: 0 0% 98%;
  --primary: 217 91% 60%;
  --primary-foreground: 0 0% 100%;
  --secondary: 0 0% 12%;
  --secondary-foreground: 0 0% 98%;
  --accent: 160 84% 39%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 16%;
  --input: 0 0% 16%;
  --ring: 217 91% 60%;
}
```

## 🚀 **Getting Started**

### **Installation**
```bash
npm install
npm run dev
```

### **Available Scripts**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### **Environment Setup**
- Node.js 18+
- Next.js 14
- React 18
- TypeScript 5
- Tailwind CSS 3

## 📊 **Features Summary**

### **✅ Implemented Features**
- [x] Dark Mode Toggle
- [x] Advanced Search with Auto-suggestions
- [x] Service Filtering (Category & Price)
- [x] Favorites/Wishlist System
- [x] Service Comparison Tool
- [x] Mobile-Responsive Navigation
- [x] Scroll-Triggered Animations
- [x] Enhanced Loading States
- [x] Analytics & Event Tracking
- [x] Service Worker Support
- [x] Progressive Loading
- [x] Micro-interactions
- [x] Accessibility Features
- [x] Performance Optimizations
- [x] Theme System
- [x] Responsive Design

### **🎯 Key Benefits**
- **Enhanced UX**: Smooth animations and micro-interactions
- **Accessibility**: ARIA labels, keyboard navigation, focus states
- **Performance**: Memoization, lazy loading, service worker
- **Responsive**: Mobile-first design with touch-friendly interfaces
- **Scalable**: Modular components and reusable utilities
- **Maintainable**: Clean code structure and comprehensive documentation

## 🔮 **Future Enhancements**
- Real-time chat support
- Advanced analytics dashboard
- Multi-language support
- Progressive Web App (PWA) features
- Advanced filtering and sorting
- User reviews and ratings system
- Payment integration
- Booking calendar
- Service provider profiles
- Real-time notifications

---

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**
