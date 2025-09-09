"use client"

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'

export default function ThemePage() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      const initialDark = stored ? stored === 'dark' : true
      const hasClass = document.documentElement.classList.contains('dark')
      setIsDark(hasClass || initialDark)
    } catch {
      setIsDark(true)
    }
  }, [])

  useEffect(() => {
    try {
      if (isDark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    } catch {}
  }, [isDark])

  return (
    <div className="container py-10">
      <Card className="bg-card border border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Theme Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-foreground">Dark Mode</div>
              <div className="text-sm text-muted-foreground">Use the dark blue theme</div>
            </div>
            <Switch checked={isDark} onCheckedChange={(val: boolean) => setIsDark(!!val)} />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <Swatch name="Background" boxClass="bg-background border border-border" textClass="text-foreground" />
            <Swatch name="Card" boxClass="bg-card border border-border" textClass="text-card-foreground" />
            <Swatch name="Primary" boxClass="bg-primary" textClass="text-primary-foreground" />
            <Swatch name="Secondary" boxClass="bg-secondary" textClass="text-secondary-foreground" />
            <Swatch name="Accent" boxClass="bg-accent" textClass="text-accent-foreground" />
            <Swatch name="Black" boxClass="bg-black" textClass="text-white" />
            <Swatch name="White" boxClass="bg-white border border-border" textClass="text-black" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function Swatch({ name, boxClass, textClass }: { name: string; boxClass: string; textClass: string }) {
  return (
    <div className={`rounded-lg p-4 h-24 flex items-end justify-start ${boxClass}`}>
      <span className={`text-xs font-medium ${textClass}`}>{name}</span>
    </div>
  )
}

