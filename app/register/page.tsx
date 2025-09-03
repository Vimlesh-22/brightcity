'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  User, 
  Mail,
  Phone, 
  Lock, 
  Eye, 
  EyeOff,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Building,
  Shield,
  Smartphone,
  Chrome,
  Facebook,
  Apple
} from 'lucide-react'
import Link from 'next/link'

interface RegistrationForm {
  // Step 1: Basic Info
  firstName: string
  lastName: string
  email: string
  phone: string
  
  // Step 2: Account Security
  password: string
  confirmPassword: string
  
  // Step 3: Verification
  emailCode: string
  phoneCode: string
  
  // Agreements
  termsAccepted: boolean
  marketingOptIn: boolean
}

export default function RegisterPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [verificationSent, setVerificationSent] = useState({
    email: false,
    phone: false
  })

  const [formData, setFormData] = useState<RegistrationForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    emailCode: '',
    phoneCode: '',
    termsAccepted: false,
    marketingOptIn: false
  })

  const totalSteps = 3
  const progress = (currentStep / totalSteps) * 100

  const handleInputChange = (field: keyof RegistrationForm, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateStep1 = (): boolean => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = (): boolean => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number'
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = (): boolean => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.emailCode.trim()) newErrors.emailCode = 'Email verification code is required'
    if (!formData.phoneCode.trim()) newErrors.phoneCode = 'Phone verification code is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    let isValid = false
    
    switch (currentStep) {
      case 1:
        isValid = validateStep1()
        break
      case 2:
        isValid = validateStep2()
        break
      case 3:
        isValid = validateStep3()
        break
    }

    if (isValid && currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Final validation
    let isValid = true
    const finalErrors: { [key: string]: string } = {}

    if (!formData.termsAccepted) {
      isValid = false
      finalErrors.terms = 'You must accept the terms and conditions'
    }

    setErrors(finalErrors)

    if (isValid) {
      setLoading(true)
      // Submit logic here
      setTimeout(() => {
        setLoading(false)
        router.push('/welcome')
      }, 2000)
    }
  }

  const sendVerification = (type: 'email' | 'phone') => {
    // Simulate sending verification code
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setVerificationSent(prev => ({ ...prev, [type]: true }))
    }, 1000)
  }

  const handleSocialRegister = (provider: 'google' | 'facebook' | 'apple') => {
    console.log(`Register with ${provider}`)
    // Social registration logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Registration Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              {currentStep === 1 && 'Personal Information'}
              {currentStep === 2 && 'Account Security'}
              {currentStep === 3 && 'Verification'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.submit && (
                <div className="bg-red-50 border border-red-200 rounded-md p-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  <span className="text-sm text-red-600">{errors.submit}</span>
                </div>
              )}

              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={errors.firstName ? 'border-red-500' : ''}
                      />
                      {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={errors.lastName ? 'border-red-500' : ''}
                      />
                      {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                      />
                    </div>
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                      />
                    </div>
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                  </div>
                </div>
              )}

              {/* Step 2: Account Security */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className={`pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className={`pl-10 pr-10 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
                  </div>
                </div>
              )}

              {/* Step 3: Verification */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="emailCode">Email Verification Code</Label>
                    <div className="flex gap-2">
                      <Input
                        id="emailCode"
                        placeholder="Enter 6-digit code"
                        value={formData.emailCode}
                        onChange={(e) => handleInputChange('emailCode', e.target.value)}
                        className={errors.emailCode ? 'border-red-500' : ''}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => sendVerification('email')}
                        disabled={verificationSent.email}
                      >
                        {verificationSent.email ? 'Sent' : 'Send'}
                      </Button>
                    </div>
                    {errors.emailCode && <p className="text-sm text-red-500">{errors.emailCode}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phoneCode">Phone Verification Code</Label>
                    <div className="flex gap-2">
                      <Input
                        id="phoneCode"
                        placeholder="Enter 6-digit code"
                        value={formData.phoneCode}
                        onChange={(e) => handleInputChange('phoneCode', e.target.value)}
                        className={errors.phoneCode ? 'border-red-500' : ''}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => sendVerification('phone')}
                        disabled={verificationSent.phone}
                      >
                        {verificationSent.phone ? 'Sent' : 'Send'}
                      </Button>
                    </div>
                    {errors.phoneCode && <p className="text-sm text-red-500">{errors.phoneCode}</p>}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={formData.termsAccepted}
                        onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{' '}
                        <Link href="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                    {errors.terms && <p className="text-sm text-red-500">{errors.terms}</p>}

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="marketing"
                        checked={formData.marketingOptIn}
                        onChange={(e) => handleInputChange('marketingOptIn', e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor="marketing" className="text-sm">
                        I want to receive updates and promotional offers
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-3">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}
                    className="flex-1"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                )}
                
                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="flex-1"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="flex-1"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Creating Account...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        Create Account
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </Button>
                )}
              </div>
            </form>

            {/* Social Registration */}
            {currentStep === 1 && (
              <div className="mt-6">
                <Separator className="my-4" />
                <p className="text-center text-sm text-gray-600 mb-4">
                  Or register with
                </p>
                
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    variant="outline"
                    onClick={() => handleSocialRegister('google')}
                    className="flex items-center justify-center"
                  >
                    <Chrome className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleSocialRegister('facebook')}
                    className="flex items-center justify-center"
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleSocialRegister('apple')}
                    className="flex items-center justify-center"
                  >
                    <Apple className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>

        {/* Security Notice */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-900">Secure Registration</p>
                <p className="text-xs text-blue-700">
                  Your information is encrypted and protected with industry-standard security.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
