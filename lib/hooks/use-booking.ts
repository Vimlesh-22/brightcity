import { useState } from 'react'

interface BookingRequest {
  serviceId: string
  addressId: string
  scheduledFor: Date
  notes?: string
  voucherId?: string
}

interface Booking {
  id: string
  serviceId: string
  addressId: string
  scheduledFor: Date
  notes?: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: Date
}

export function useCreateBooking() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')

  const mutateAsync = async (bookingRequest: BookingRequest): Promise<Booking> => {
    setStatus('pending')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const booking: Booking = {
      id: `booking-${Date.now()}`,
      serviceId: bookingRequest.serviceId,
      addressId: bookingRequest.addressId,
      scheduledFor: bookingRequest.scheduledFor,
      notes: bookingRequest.notes,
      status: 'pending',
      createdAt: new Date()
    }
    
    setStatus('success')
    return booking
  }

  return {
    mutateAsync,
    status
  }
}
