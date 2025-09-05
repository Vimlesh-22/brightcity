"use client"
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Star, 
  User, 
  Phone, 
  Mail, 
  Settings, 
  LogOut,
  Home,
  BookOpen,
  Heart,
  MessageSquare,
  Bell,
  CreditCard
} from 'lucide-react'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 98765 43210',
    avatar: '/images/avatar.jpg'
  }

  const recentBookings = [
    {
      id: 'BK001',
      service: 'Deep House Cleaning',
      date: '2024-01-15',
      time: '10:00 AM',
      status: 'confirmed',
      price: '₹2,500'
    },
    {
      id: 'BK002',
      service: 'Plumbing Repair',
      date: '2024-01-12',
      time: '02:00 PM',
      status: 'completed',
      price: '₹1,800'
    },
    {
      id: 'BK003',
      service: 'Electrical Work',
      date: '2024-01-10',
      time: '11:00 AM',
      status: 'cancelled',
      price: '₹3,200'
    }
  ]

  const favoriteServices = [
    {
      id: '1',
      name: 'Deep House Cleaning',
      category: 'Cleaning',
      price: '₹2,500',
      rating: 4.8
    },
    {
      id: '2',
      name: 'Plumbing Repair',
      category: 'Plumbing',
      price: '₹1,800',
      rating: 4.9
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700'
      case 'completed': return 'bg-blue-100 text-blue-700'
      case 'cancelled': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-blue-600">BrightCity</div>
              <div className="hidden md:flex items-center gap-6">
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Home className="w-4 h-4" />
                  Dashboard
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <BookOpen className="w-4 h-4" />
                  Bookings
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Heart className="w-4 h-4" />
                  Favorites
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {user.name[0]}
                </div>
                <div className="hidden md:block">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{user.name}</div>
                  <div className="text-xs text-gray-500">{user.email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="xl:col-span-1">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {user.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    {user.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    {user.email}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                  <button className="w-full flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    <Settings className="w-4 h-4" />
                    Settings
                  </button>
                  <button className="w-full flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors">
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="xl:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="bookings">Bookings</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">12</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <BookOpen className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Completed</p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">8</p>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <Star className="w-6 h-6 text-green-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Total Spent</p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">₹15,600</p>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-purple-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Bookings */}
                <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle>Recent Bookings</CardTitle>
                    <CardDescription>Your latest service bookings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentBookings.map((booking) => (
                        <div key={booking.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <div className="flex items-center gap-4 mb-2 sm:mb-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <Calendar className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900 dark:text-gray-100">{booking.service}</h3>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {booking.date}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {booking.time}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge className={getStatusColor(booking.status)}>
                              {booking.status}
                            </Badge>
                            <span className="font-semibold text-gray-900 dark:text-gray-100">{booking.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bookings" className="space-y-6">
                <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle>All Bookings</CardTitle>
                    <CardDescription>Manage your service bookings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentBookings.map((booking) => (
                        <div key={booking.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <div className="flex items-center gap-4 mb-2 sm:mb-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <Calendar className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900 dark:text-gray-100">{booking.service}</h3>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {booking.date}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {booking.time}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge className={getStatusColor(booking.status)}>
                              {booking.status}
                            </Badge>
                            <span className="font-semibold text-gray-900 dark:text-gray-100">{booking.price}</span>
                            <Button size="sm" variant="outline">View Details</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="favorites" className="space-y-6">
                <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle>Favorite Services</CardTitle>
                    <CardDescription>Your saved services for quick booking</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {favoriteServices.map((service) => (
                        <div key={service.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium text-gray-900 dark:text-gray-100">{service.name}</h3>
                            <Badge variant="secondary">{service.category}</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-current text-yellow-500" />
                              <span className="text-sm text-gray-600">{service.rating}</span>
                            </div>
                            <span className="font-semibold text-gray-900 dark:text-gray-100">{service.price}</span>
                          </div>
                          <Button size="sm" className="w-full mt-3">Book Now</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payments" className="space-y-6">
                <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                    <CardDescription>Your transaction history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentBookings.map((booking) => (
                        <div key={booking.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <div className="flex items-center gap-4 mb-2 sm:mb-0">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <CreditCard className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900 dark:text-gray-100">{booking.service}</h3>
                              <p className="text-sm text-gray-500">Payment ID: {booking.id}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="font-semibold text-gray-900 dark:text-gray-100">{booking.price}</span>
                            <p className="text-sm text-gray-500">{booking.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

