"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Calendar, Clock, MapPin, Phone, Mail, Download, Share2, Home, User } from 'lucide-react'

export default function BookingConfirmationPage() {
  // Mock booking data - in real app this would come from URL params or state
  const bookingData = {
    id: 'BK' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    service: {
      name: 'Deep House Cleaning',
      price: '₹2,500',
      category: 'Cleaning'
    },
    date: '2024-01-15',
    time: '10:00 AM',
    customer: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+91 98765 43210',
      address: '123 Main Street, City, State 12345'
    },
    status: 'confirmed'
  }

  const handleDownload = () => {
    // Mock download functionality
    console.log('Downloading booking confirmation...')
  }

  const handleShare = () => {
    // Mock share functionality
    if (navigator.share) {
      navigator.share({
        title: 'Booking Confirmation',
        text: `I've booked ${bookingData.service.name} on ${bookingData.date} at ${bookingData.time}`,
        url: window.location.href
      })
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Booking link copied to clipboard!')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Booking Confirmed!</h1>
          <p className="text-muted-foreground">
            Your service has been successfully booked. We'll send you a confirmation email shortly.
          </p>
        </div>

        {/* Booking Details Card */}
        <Card className="bg-card border border-border mb-6">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center justify-between">
              Booking Details
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400">
                {bookingData.status}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Booking ID */}
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">Booking ID</div>
              <div className="font-mono font-semibold text-foreground">{bookingData.id}</div>
            </div>

            {/* Service Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Service</div>
                <div className="font-semibold text-foreground">{bookingData.service.name}</div>
                <Badge variant="secondary" className="mt-1 bg-accent text-accent-foreground">
                  {bookingData.service.category}
                </Badge>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Price</div>
                <div className="font-semibold text-emerald-600">{bookingData.service.price}</div>
              </div>
            </div>

            {/* Schedule */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">Date</div>
                  <div className="font-medium text-foreground">{bookingData.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">Time</div>
                  <div className="font-medium text-foreground">{bookingData.time}</div>
                </div>
              </div>
            </div>

            {/* Customer Details */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Customer Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Name</div>
                    <div className="font-medium text-foreground">{bookingData.customer.name}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium text-foreground">{bookingData.customer.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium text-foreground">{bookingData.customer.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Address</div>
                    <div className="font-medium text-foreground">{bookingData.customer.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button 
            onClick={handleDownload}
            variant="outline" 
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Receipt
          </Button>
          <Button 
            onClick={handleShare}
            variant="outline" 
            className="flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            Share Booking
          </Button>
          <Button 
                            onClick={() => router.push('/')}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
        </div>

        {/* Next Steps */}
        <Card className="bg-card border border-border">
          <CardHeader>
            <CardTitle className="text-foreground">What's Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-foreground">Confirmation Email</div>
                  <div className="text-sm text-muted-foreground">
                    You'll receive a confirmation email with all booking details within 5 minutes.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-foreground">Service Provider Contact</div>
                  <div className="text-sm text-muted-foreground">
                    Your service provider will contact you 2 hours before the scheduled time.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-foreground">Real-time Updates</div>
                  <div className="text-sm text-muted-foreground">
                    Track your booking status and receive real-time updates via SMS and email.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-foreground">Support</div>
                  <div className="text-sm text-muted-foreground">
                    Need help? Contact our 24/7 support team at support@brightcity.com
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
