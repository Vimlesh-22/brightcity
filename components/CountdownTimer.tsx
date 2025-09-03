"use client"

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  endTime: Date
}

export default function CountdownTimer({ endTime }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = endTime.getTime() - now

      if (distance > 0) {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ hours, minutes, seconds })
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [endTime])

  return (
    <div className="flex gap-3">
      <div className="text-center">
        <div className="text-2xl font-bold text-white">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-white/70">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-white/70">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-white">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-white/70">Seconds</div>
      </div>
    </div>
  )
}
