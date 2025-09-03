"use client"
import { useState, useMemo } from 'react'
import { useServices } from '@/lib/hooks/use-services'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, MapPin, User, Phone, Mail, ArrowLeft } from 'lucide-react'

interface BookingPageProps {
  searchParams: {
    serviceId?: string
    category?: string
  }
}

export default function BookingPage({ searchParams }: BookingPageProps) {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string>(searchParams.serviceId || '')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  const { data: services, isLoading } = useServices({ limit: 20 })

  const service = useMemo(() => {
    if (!services || !selectedService) return null
    return services.find(s => String(s.id) === selectedService) || null
  }, [services, selectedService])

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM'
  ]

  const handleNext = () => {
    if (step === 1 && selectedService) setStep(2)
    else if (step === 2 && selectedDate && selectedTime) setStep(3)
    else if (step === 3 && customerInfo.name && customerInfo.email && customerInfo.phone) setStep(4)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    // Here you would typically submit the booking to your backend
    console.log('Booking submitted:', {
      service: service,
      date: selectedDate,
      time: selectedTime,
      customer: customerInfo
    })
    // Redirect to confirmation page
    window.location.href = '/booking/confirmation'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="absolute left-4 top-8 flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          
          <h1 className="text-3xl font-bold text-foreground">Book Your Service</h1>
          <p className="text-muted-foreground mt-2">
            Complete your booking in a few simple steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNumber 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step > stepNumber ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {step === 1 && (
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Step 1: Select Service</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Array.from({length: 6}).map((_, i) => (
                        <div key={i} className="h-24 bg-muted animate-pulse rounded-lg" />
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services?.map(s => (
                        <div
                          key={s.id}
                          onClick={() => setSelectedService(s.id)}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            selectedService === s.id 
                              ? 'border-primary bg-primary/5' 
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                              {(s as any).name?.[0] || '🔧'}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground">{(s as any).name}</h3>
                              <p className="text-sm text-muted-foreground">₹{(s as any).pricing?.basePrice}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Step 2: Select Date & Time</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Select Date</label>
                    <Input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Select Time</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {availableTimes.map(time => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          onClick={() => setSelectedTime(time)}
                          className="text-sm"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 3 && (
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Step 3: Customer Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Full Name</label>
                      <Input
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                      <Input
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Phone Number</label>
                      <Input
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Service Address</label>
                      <Input
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                        placeholder="Enter service address"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 4 && (
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Step 4: Review & Confirm</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <h3 className="font-semibold text-foreground">Booking Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Service:</span>
                        <p className="font-medium text-foreground">{(service as any)?.name}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Date:</span>
                        <p className="font-medium text-foreground">{selectedDate}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Time:</span>
                        <p className="font-medium text-foreground">{selectedTime}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Price:</span>
                        <p className="font-medium text-foreground">₹{(service as any)?.pricing?.basePrice}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <h3 className="font-semibold text-foreground">Customer Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Name:</span>
                        <p className="font-medium text-foreground">{customerInfo.name}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Email:</span>
                        <p className="font-medium text-foreground">{customerInfo.email}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Phone:</span>
                        <p className="font-medium text-foreground">{customerInfo.phone}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Address:</span>
                        <p className="font-medium text-foreground">{customerInfo.address}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
              >
                Previous
              </Button>
              
              {step < 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !selectedService) ||
                    (step === 2 && (!selectedDate || !selectedTime)) ||
                    (step === 3 && (!customerInfo.name || !customerInfo.email || !customerInfo.phone))
                  }
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white"
                >
                  Confirm Booking
                </Button>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {service && (
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Selected Service</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {(service as any).name?.[0] || '🔧'}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{(service as any).name}</h3>
                      <p className="text-sm text-muted-foreground">{(service as any).description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-semibold text-emerald-600">₹{(service as any).pricing?.basePrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rating:</span>
                      <span className="font-semibold text-orange-500">{(service as any).ratingAverage?.toFixed?.(1) || '—'} ★</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {(service as any).categories?.map((c: string) => (
                      <Badge key={c} variant="secondary" className="text-xs bg-accent text-accent-foreground">
                        {c}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Booking Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { step: 1, title: 'Select Service', icon: '🔧' },
                  { step: 2, title: 'Choose Date & Time', icon: '📅' },
                  { step: 3, title: 'Enter Details', icon: '👤' },
                  { step: 4, title: 'Confirm Booking', icon: '✅' }
                ].map((item) => (
                  <div key={item.step} className={`flex items-center gap-3 p-2 rounded ${
                    step >= item.step ? 'bg-primary/10' : 'bg-muted/50'
                  }`}>
                    <span className="text-lg">{item.icon}</span>
                    <span className={`text-sm ${step >= item.step ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
