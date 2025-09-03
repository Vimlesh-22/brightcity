'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Target, 
  Award, 
  Shield,
  Heart,
  Globe,
  TrendingUp,
  Star,
  CheckCircle2,
  MapPin,
  Calendar,
  Lightbulb,
  Handshake,
  Zap,
  Rocket,
  Building
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface TeamMember {
  name: string
  role: string
  image: string
  description: string
}

interface Milestone {
  year: string
  title: string
  description: string
}

interface Value {
  icon: React.ReactNode
  title: string
  description: string
}

export default function AboutPage() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: '/placeholder.jpg',
      description: 'Visionary leader with 10+ years in e-commerce and marketplace development.'
    },
    {
      name: 'Priya Sharma',
      role: 'CTO',
      image: '/placeholder.jpg',
      description: 'Technology expert specializing in scalable platforms and user experience.'
    },
    {
      name: 'Amit Singh',
      role: 'Head of Marketing',
      image: '/placeholder.jpg',
      description: 'Digital marketing strategist helping merchants grow their online presence.'
    },
    {
      name: 'Sneha Patel',
      role: 'Customer Success Manager',
      image: '/placeholder.jpg',
      description: 'Dedicated to ensuring the best experience for both merchants and customers.'
    }
  ]

  const milestones: Milestone[] = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started with a vision to empower local merchants in the digital age.'
    },
    {
      year: '2020',
      title: 'Platform Launch',
      description: 'Launched our first marketplace platform connecting merchants with customers.'
    },
    {
      year: '2021',
      title: '1000+ Merchants',
      description: 'Reached our first milestone of 1000 active merchants on the platform.'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Introduced AI-powered recommendations and smart inventory management.'
    },
    {
      year: '2023',
      title: 'Mobile App Launch',
      description: 'Launched mobile apps for both merchants and customers.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanding operations to serve merchants and customers worldwide.'
    }
  ]

  const values: Value[] = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Trust & Security',
      description: 'We prioritize the security of transactions and data privacy for all users.'
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: 'Merchant Success',
      description: 'Our success is measured by the success of merchants on our platform.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Customer First',
      description: 'Every decision is made with our customers\' best interests in mind.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description: 'We continuously innovate to stay ahead in the digital marketplace.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Accessibility',
      description: 'Making e-commerce accessible to everyone, everywhere.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Efficiency',
      description: 'Streamlining processes to make business operations seamless.'
    }
  ]

  const stats = [
    { label: 'Active Merchants', value: '5,000+', icon: <Users className="w-6 h-6" /> },
    { label: 'Products Listed', value: '100K+', icon: <Target className="w-6 h-6" /> },
    { label: 'Happy Customers', value: '50K+', icon: <Star className="w-6 h-6" /> },
    { label: 'Cities Covered', value: '200+', icon: <MapPin className="w-6 h-6" /> },
    { label: 'Years of Experience', value: '5+', icon: <Calendar className="w-6 h-6" /> },
    { label: 'Success Rate', value: '98%', icon: <CheckCircle2 className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
              <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">About BrightCity Company</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Empowering Merchants,<br />Connecting Communities
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We are on a mission to revolutionize how merchants connect with customers, 
              creating a thriving ecosystem where businesses of all sizes can succeed in the digital age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To democratize e-commerce by providing merchants with powerful, easy-to-use tools 
                that help them reach customers, manage their business, and grow their revenue. 
                We believe every business, regardless of size, deserves access to world-class 
                technology and support.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To create the world's most merchant-friendly marketplace where businesses thrive, 
                customers discover amazing products, and communities prosper. We envision a future 
                where technology bridges the gap between traditional commerce and digital innovation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              From a small startup to a growing platform that serves thousands of merchants, 
              our journey has been driven by the desire to make e-commerce accessible to everyone.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/20 h-full"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year} 
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                  }`}>
                    <Card>
                      <CardContent className="p-6">
                        <Badge className="mb-3 bg-primary">{milestone.year}</Badge>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 bg-primary rounded-full border-4 border-white shadow-lg z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-full lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              These core values guide everything we do and shape how we build products, 
              serve customers, and grow as a company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our diverse team brings together expertise in technology, business, and customer service 
              to create the best possible experience for our merchants and customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-24 h-24 relative mx-auto mb-4 bg-gray-100 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Choose BrightCity?</h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  We're not just another marketplace. We're your partner in success, 
                  providing tools, support, and opportunities to help your business thrive.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Quality First</h3>
                  <p className="text-muted-foreground text-sm">
                    We maintain high standards for products and merchants on our platform.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Growth Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Tools and insights to help merchants grow their business effectively.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Reliable Platform</h3>
                  <p className="text-muted-foreground text-sm">
                    Robust infrastructure ensuring your business runs smoothly 24/7.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-primary text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Whether you're a merchant looking to expand your reach or a customer 
                seeking unique products, we're here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/merchant/register">
                  <Button size="lg" variant="secondary" className="min-w-[150px]">
                    Become a Merchant
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="min-w-[150px] text-white border-white hover:bg-white hover:text-primary">
                    Start Shopping
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
