export interface Service {
  id: string
  name: string
  description?: string
  pricing: {
    basePrice: number
    currency?: string
  }
  ratingAverage?: number
  ratingCount?: number
  availability?: any[]
  categories?: string[]
}

export interface Address {
  id: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface BookingRequest {
  serviceId: string
  addressId: string
  scheduledFor: Date
  notes?: string
  voucherId?: string
}

export interface VoucherValidationResult {
  voucher: {
    id: string
    code: string
    discount: number
  }
  isValid: boolean
  message?: string
}
