'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
// Removed custom Textarea (encoding issue). Using native <textarea> inline.
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Globe,
  Users,
  HeadphonesIcon,
  Building,
  Calendar,
  User,
  HelpCircle,
  Star,
  Zap
} from 'lucide-react'
import Image from 'next/image'

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  category: string
  message: string
}

interface FAQ {
  question: string
  answer: string
  category: 'general' | 'merchant' | 'customer' | 'technical'
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Head Office',
      details: [
        'BrightCity Technology Park',
        'Sector 18, Noida, UP 201301',
        'India'
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: [
        '+91 1234-567-890',
        '+91 9876-543-210',
        'Toll Free: 1800-123-4567'
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: [
        'info@brightcitycompany.com',
        'support@brightcitycompany.com',
        'merchants@brightcitycompany.com'
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed'
      ]
    }
  ]

  const supportChannels = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      action: 'Start Chat',
      color: 'bg-blue-500'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: 'Mon-Fri, 9AM-6PM',
      action: 'Call Now',
      color: 'bg-green-500'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Support',
      description: 'Send us detailed queries',
      availability: 'Response in 24 hours',
      action: 'Send Email',
      color: 'bg-purple-500'
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: 'Help Center',
      description: 'Browse our knowledge base',
      availability: 'Available 24/7',
      action: 'Visit Help Center',
      color: 'bg-orange-500'
    }
  ]

  const faqs: FAQ[] = [
    {
      question: 'How do I start selling on BrightCity?',
      answer: 'Getting started is easy! Simply click on "Become a Merchant" on our homepage, fill out the registration form, upload your business documents, and once approved, you can start listing your products.',
      category: 'merchant'
    },
    {
      question: 'What are the fees for merchants?',
      answer: 'We charge a small commission only when you make a sale. There are no listing fees or monthly charges. Commission rates vary by category, typically ranging from 3-8%.',
      category: 'merchant'
    },
    {
      question: 'How do I track my order?',
      answer: 'After placing an order, you\'ll receive a tracking number via email and SMS. You can also track your order by logging into your account and visiting the "My Orders" section.',
      category: 'customer'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods including credit/debit cards, UPI, net banking, and popular wallets like Paytm, PhonePe, and Google Pay.',
      category: 'customer'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Delivery time varies by location and product. Most orders are delivered within 3-7 business days. Express delivery options are available for select products.',
      category: 'general'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a hassle-free 30-day return policy. Items must be in original condition. Some categories may have different return windows - please check the product page for specific terms.',
      category: 'general'
    }
  ]

  const categories = [
    'General Inquiry',
    'Merchant Support',
    'Customer Support',
    'Technical Issue',
    'Partnership',
    'Media Inquiry',
    'Feedback',
    'Other'
  ]

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.category) newErrors.category = 'Please select a category'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    try {
      setLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col gap-3">
              <Button onClick={() => setSubmitted(false)} className="w-full">
                Send Another Message
              </Button>
                              <Button variant="outline" onClick={() => router.push('/')}>
                Return to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Get in Touch</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              We're Here to Help
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Have questions, need support, or want to partner with us? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Support Channels */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Choose Your Support Channel</h2>
            <p className="text-muted-foreground text-lg">
              Pick the best way to reach us based on your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${channel.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform`}>
                    {channel.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{channel.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{channel.description}</p>
                  <p className="text-xs font-medium text-primary mb-4">{channel.availability}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {channel.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        className={`w-full px-3 py-2 border border-border rounded-md bg-background ${
                          errors.category ? 'border-red-500' : ''
                        }`}
                      >
                        <option value="">Select Category</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                      {errors.category && <p className="text-sm text-red-500">{errors.category}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="Brief description of your inquiry"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className={errors.subject ? 'border-red-500' : ''}
                    />
                    {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`flex min-h-[120px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.message ? 'border-red-500' : 'border-input'}`}
                    />
                    {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                  </div>

                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-primary">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Stats */}
            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Why Contact Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">Quick response time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Expert support team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">98% satisfaction rate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">24/7 availability</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Find quick answers to common questions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Badge variant="outline" className="mt-1">
                      {faq.category}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">
              <HelpCircle className="w-4 h-4 mr-2" />
              View All FAQs
            </Button>
          </div>
        </section>

        {/* Office Locations */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5" />
                Our Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Delhi NCR</h3>
                  <p className="text-sm text-muted-foreground">
                    Sector 18, Noida<br />
                    Uttar Pradesh 201301
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Mumbai</h3>
                  <p className="text-sm text-muted-foreground">
                    Bandra Kurla Complex<br />
                    Maharashtra 400051
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Bangalore</h3>
                  <p className="text-sm text-muted-foreground">
                    Koramangala<br />
                    Karnataka 560034
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

