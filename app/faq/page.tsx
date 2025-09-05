'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  HelpCircle,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Phone,
  Mail,
  Users,
  ShoppingCart,
  CreditCard,
  Truck,
  RefreshCw,
  Shield,
  Settings,
  Star,
  Package,
  Building,
  Zap,
  Clock,
  Award,
  CheckCircle2
} from 'lucide-react'
import Link from 'next/link'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  tags: string[]
  helpful: number
}

interface Category {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  count: number
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const categories: Category[] = [
    {
      id: 'general',
      name: 'General',
      icon: <HelpCircle className="w-5 h-5" />,
      description: 'Basic information about our platform',
      count: 8
    },
    {
      id: 'merchant',
      name: 'For Merchants',
      icon: <Building className="w-5 h-5" />,
      description: 'Selling and managing your business',
      count: 12
    },
    {
      id: 'customer',
      name: 'For Customers',
      icon: <Users className="w-5 h-5" />,
      description: 'Shopping and account management',
      count: 10
    },
    {
      id: 'orders',
      name: 'Orders & Shipping',
      icon: <Truck className="w-5 h-5" />,
      description: 'Placing orders and delivery information',
      count: 9
    },
    {
      id: 'payments',
      name: 'Payments & Refunds',
      icon: <CreditCard className="w-5 h-5" />,
      description: 'Payment methods and refund policies',
      count: 7
    },
    {
      id: 'returns',
      name: 'Returns & Exchanges',
      icon: <RefreshCw className="w-5 h-5" />,
      description: 'Return and exchange processes',
      count: 6
    },
    {
      id: 'technical',
      name: 'Technical Support',
      icon: <Settings className="w-5 h-5" />,
      description: 'Technical issues and troubleshooting',
      count: 5
    },
    {
      id: 'security',
      name: 'Security & Privacy',
      icon: <Shield className="w-5 h-5" />,
      description: 'Account security and privacy concerns',
      count: 4
    }
  ]

  const faqs: FAQ[] = [
    // General
    {
      id: '1',
      question: 'What is BrightCity Company?',
      answer: 'BrightCity Company is a comprehensive e-commerce marketplace that connects merchants with customers. We provide a platform for businesses to showcase their products and for customers to discover and purchase items from verified sellers.',
      category: 'general',
      tags: ['about', 'platform', 'marketplace'],
      helpful: 245
    },
    {
      id: '2',
      question: 'How do I create an account?',
      answer: 'Creating an account is simple! Click on "Sign Up" in the top right corner, choose whether you want a customer or merchant account, fill in your details, verify your email address, and you\'re ready to go.',
      category: 'general',
      tags: ['account', 'registration', 'sign up'],
      helpful: 189
    },
    {
      id: '3',
      question: 'Is it free to use BrightCity?',
      answer: 'For customers, browsing and purchasing is completely free. For merchants, listing products is free, but we charge a small commission only when you make a sale. There are no monthly fees or hidden charges.',
      category: 'general',
      tags: ['pricing', 'free', 'fees'],
      helpful: 156
    },

    // Merchant FAQs
    {
      id: '4',
      question: 'How do I become a merchant?',
      answer: 'To become a merchant, click "Become a Merchant" on our homepage, fill out the registration form with your business details, upload required documents (business license, tax ID, bank details), and wait for approval. The process typically takes 1-3 business days.',
      category: 'merchant',
      tags: ['merchant', 'registration', 'business'],
      helpful: 234
    },
    {
      id: '5',
      question: 'What documents do I need to become a merchant?',
      answer: 'You\'ll need: Business registration certificate, Tax identification number (GSTIN for India), Bank account details, Identity proof (Aadhaar/PAN), and address proof. Additional documents may be required based on your product category.',
      category: 'merchant',
      tags: ['documents', 'verification', 'registration'],
      helpful: 198
    },
    {
      id: '6',
      question: 'What are the commission rates?',
      answer: 'Commission rates vary by category: Electronics (5-8%), Fashion (8-12%), Home & Garden (6-10%), Books (3-5%), Health & Beauty (10-15%). There are no listing fees or monthly charges.',
      category: 'merchant',
      tags: ['commission', 'fees', 'pricing'],
      helpful: 267
    },
    {
      id: '7',
      question: 'How do I upload products?',
      answer: 'Once approved as a merchant, go to your dashboard, click "Add Product", fill in product details, upload high-quality images, set pricing, and publish. Products are reviewed before going live.',
      category: 'merchant',
      tags: ['products', 'upload', 'listing'],
      helpful: 143
    },
    {
      id: '8',
      question: 'When do I get paid?',
      answer: 'Payments are processed weekly every Friday for orders delivered in the previous week. Funds are transferred to your registered bank account within 2-3 business days after processing.',
      category: 'merchant',
      tags: ['payment', 'payout', 'money'],
      helpful: 289
    },

    // Customer FAQs
    {
      id: '9',
      question: 'How do I place an order?',
      answer: 'Browse products, add items to your cart, proceed to checkout, enter delivery address, choose payment method, and confirm your order. You\'ll receive order confirmation via email and SMS.',
      category: 'customer',
      tags: ['order', 'checkout', 'purchase'],
      helpful: 178
    },
    {
      id: '10',
      question: 'Can I modify or cancel my order?',
      answer: 'You can cancel orders within 1 hour of placement if they haven\'t been processed. For modifications, contact our support team immediately. Once shipped, orders cannot be cancelled but can be returned.',
      category: 'customer',
      tags: ['cancel', 'modify', 'order'],
      helpful: 134
    },
    {
      id: '11',
      question: 'How do I track my order?',
      answer: 'After your order ships, you\'ll receive a tracking number via email/SMS. Use this number on our tracking page or the courier\'s website. You can also track orders from your account dashboard.',
      category: 'customer',
      tags: ['tracking', 'delivery', 'shipping'],
      helpful: 201
    },

    // Orders & Shipping
    {
      id: '12',
      question: 'What are the shipping charges?',
      answer: 'Shipping is free for orders above ₹500. Below ₹500, standard shipping costs ₹50-99 depending on location and weight. Express delivery options are available for ₹149-199.',
      category: 'orders',
      tags: ['shipping', 'delivery', 'charges'],
      helpful: 223
    },
    {
      id: '13',
      question: 'How long does delivery take?',
      answer: 'Standard delivery takes 3-7 business days depending on your location. Express delivery is available for major cities (1-2 days). Remote areas may take 7-10 days.',
      category: 'orders',
      tags: ['delivery', 'time', 'shipping'],
      helpful: 189
    },
    {
      id: '14',
      question: 'Do you deliver internationally?',
      answer: 'Currently, we only deliver within India. International shipping is planned for the future. We cover all major cities and towns across India.',
      category: 'orders',
      tags: ['international', 'shipping', 'delivery'],
      helpful: 98
    },

    // Payments
    {
      id: '15',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods: Credit/Debit cards (Visa, MasterCard, RuPay), UPI, Net Banking, and digital wallets (Paytm, PhonePe, Google Pay, Amazon Pay). Cash on Delivery is available for select locations.',
      category: 'payments',
      tags: ['payment', 'methods', 'cards'],
      helpful: 267
    },
    {
      id: '16',
      question: 'Is it safe to pay online?',
      answer: 'Yes, absolutely! We use industry-standard SSL encryption and are PCI DSS compliant. All payment data is processed securely through certified payment gateways. We never store your card details.',
      category: 'payments',
      tags: ['security', 'safe', 'payment'],
      helpful: 156
    },
    {
      id: '17',
      question: 'How do refunds work?',
      answer: 'Refunds are processed to the original payment method within 5-7 business days after we receive the returned item. For UPI/wallet payments, refunds are usually instant to same-day.',
      category: 'payments',
      tags: ['refund', 'money', 'return'],
      helpful: 198
    },

    // Returns
    {
      id: '18',
      question: 'What is your return policy?',
      answer: 'We offer a hassle-free 30-day return policy. Items must be in original condition. Some categories may have different return windows - please check the product page for specific terms.',
      category: 'returns',
      tags: ['return', 'policy', '30 days'],
      helpful: 234
    },
    {
      id: '19',
      question: 'How do I return an item?',
      answer: 'Go to "My Orders", select the item to return, choose reason, and schedule pickup. Our courier partner will collect the item from your address. Return pickup is free for most orders.',
      category: 'returns',
      tags: ['return', 'process', 'pickup'],
      helpful: 167
    },
    {
      id: '20',
      question: 'Can I exchange an item?',
      answer: 'Yes, exchanges are available for size/color variants of the same product within 30 days. The exchange process is similar to returns - select exchange instead of return when initiating the request.',
      category: 'returns',
      tags: ['exchange', 'size', 'color'],
      helpful: 145
    }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  const popularFAQs = faqs.sort((a, b) => b.helpful - a.helpful).slice(0, 6)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Help Center</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Find quick answers to common questions about our platform, 
              services, and policies.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg bg-white border-0 focus:ring-2 focus:ring-white/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <HelpCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">FAQs Available</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm text-muted-foreground">Questions Resolved</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold">&lt; 2min</div>
              <div className="text-sm text-muted-foreground">Average Read Time</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-sm text-muted-foreground">Helpfulness Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Popular FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Most Popular Questions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {popularFAQs.map((faq) => (
              <Card key={faq.id} className="group hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 capitalize">
                    {faq.category}
                  </Badge>
                  <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {faq.answer}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{faq.helpful} people found this helpful</span>
                    <ChevronRight className="w-4 h-4 group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="xl:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                      selectedCategory === 'all' ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4" />
                      <span>All Categories</span>
                    </div>
                    <Badge variant="secondary">{faqs.length}</Badge>
                  </button>
                  
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                        selectedCategory === category.id ? 'bg-primary/10 text-primary' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {category.icon}
                          <div>
                            <div className="font-medium">{category.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {category.description}
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary">{category.count}</Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Still Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/contact" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ List */}
          <div className="xl:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                {selectedCategory === 'all' ? 'All Questions' : 
                 categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <Badge variant="outline">
                {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''}
              </Badge>
            </div>

            {filteredFAQs.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No questions found</h3>
                  <p className="text-muted-foreground mb-6">
                    {searchQuery ? 
                      "Try adjusting your search terms or browse by category" :
                      "No questions available in this category"
                    }
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    {searchQuery && (
                      <Button variant="outline" onClick={() => setSearchQuery('')}>
                        Clear Search
                      </Button>
                    )}
                    <Link href="/contact">
                      <Button>Ask a Question</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <Card key={faq.id}>
                    <Collapsible 
                      open={openItems.has(faq.id)}
                      onOpenChange={() => toggleItem(faq.id)}
                    >
                      <CollapsibleTrigger className="w-full">
                        <CardContent className="p-6 hover:bg-gray-50/50 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex-1 text-left">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge variant="outline" className="capitalize">
                                  {faq.category}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {faq.helpful} found helpful
                                </span>
                              </div>
                              <h3 className="font-semibold text-lg">{faq.question}</h3>
                            </div>
                            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${
                              openItems.has(faq.id) ? 'rotate-180' : ''
                            }`} />
                          </div>
                        </CardContent>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="px-6 pb-6 pt-0 border-t">
                          <div className="pt-4">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {faq.answer}
                            </p>
                            
                            {faq.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-4">
                                {faq.tags.map(tag => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                            
                            <div className="flex items-center justify-between pt-4 border-t">
                              <span className="text-sm text-muted-foreground">
                                Was this helpful?
                              </span>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  👍 Yes
                                </Button>
                                <Button variant="outline" size="sm">
                                  👎 No
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="mt-16">
          <Card className="bg-primary text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Didn't find what you're looking for?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Our support team is here to help you with any questions or concerns you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact Support
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Submit a Question
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

