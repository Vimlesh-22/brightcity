"use client"
import { useParams, useRouter } from 'next/navigation'
import { useServices } from '@/lib/hooks/use-services'
import { useState } from 'react'
import { useCreateBooking } from '@/lib/hooks/use-booking'
import type { Service } from '@/types'

export default function ServiceDetailPage() {
  const params = useParams<{ id: string }>()
  const id = params?.id
  const { data: services, isLoading, isError, refetch } = useServices({ id })
  const { data: related } = useServices({ limit: 5 })
  const router = useRouter()
  const createBooking = useCreateBooking()
  const [creating, setCreating] = useState(false)

  // Get the first (and only) service from the array
  const service = services?.[0]

  // Mock reviews data
  const reviews = [
    { id: '1', rating: 5, comment: 'Excellent service! Very professional and thorough.' },
    { id: '2', rating: 4, comment: 'Good quality work, would recommend.' },
    { id: '3', rating: 5, comment: 'Amazing results, exceeded my expectations.' },
    { id: '4', rating: 4, comment: 'Reliable and punctual service.' },
    { id: '5', rating: 5, comment: 'Great value for money, highly satisfied.' },
    { id: '6', rating: 4, comment: 'Professional team, clean work.' }
  ]

  const handleQuickBook = async () => {
    if (!service) return
    try {
      setCreating(true)
      const b = await createBooking.mutateAsync({ 
        serviceId: service.id,
        addressId: 'mock-address-id',
        scheduledFor: new Date()
      })
      router.push(`/booking/confirmation/${b.id}`)
    } catch (e) {
      console.error(e)
    } finally {
      setCreating(false)
    }
  }

  return (
    <main className="container py-10 space-y-10">
      {isLoading && <div className="h-40 animate-pulse rounded-lg bg-muted" />}
      {isError && (
        <div className="p-4 border rounded flex items-center justify-between">
          <span className="text-sm">Failed to load service.</span>
          <button onClick={() => refetch()} className="text-sm underline">Retry</button>
        </div>
      )}
      {service && (
        <>
          <header className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">{service.name}</h1>
            <p className="text-muted-foreground text-sm">Rating: {service.ratingAverage?.toFixed?.(1) || '—'} ({service.ratingCount} reviews)</p>
          </header>
          <section className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="prose max-w-none">
                <p className="text-sm leading-6 whitespace-pre-line">{service.description || 'No description provided.'}</p>
              </div>
              <div>
                <h2 className="font-medium mb-2">Availability</h2>
                <div className="space-y-1 text-sm">
                  {service.availability?.length ? (service.availability as any).map((s: any) => (
                        <div key={s.dayOfWeek+':'+s.start}>{['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][s.dayOfWeek]} {s.start}–{s.end}</div>
                      )) : <div className="text-muted-foreground">No availability schedule.</div>}
                </div>
              </div>
              <div>
                <h2 className="font-medium mb-2">Reviews</h2>
                <div className="space-y-3">
                  {reviews?.length ? reviews.slice(0,6).map(r => (
                    <div key={r.id} className="border rounded p-3 text-sm space-y-1">
                      <div className="font-medium">★ {r.rating}</div>
                      {r.comment && <p className="text-muted-foreground leading-5">{r.comment}</p>}
                    </div>
                  )) : <p className="text-muted-foreground text-sm">No reviews yet.</p>}
                </div>
              </div>
            </div>
            <aside className="space-y-6">
              <div className="p-4 rounded-lg border space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">Starting at</div>
                  <div className="text-2xl font-semibold">{service.pricing.basePrice.toLocaleString(undefined,{ style:'currency', currency: service.pricing.currency || 'INR' })}</div>
                </div>
                <button disabled={creating || createBooking.status === 'pending'} onClick={() => router.push(`/book?serviceId=${service.id}`)} className="w-full inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium disabled:opacity-50">Book Now</button>
                <p className="text-xs text-muted-foreground">You can select schedule & address in the booking flow.</p>
              </div>
              <div>
                <h2 className="font-medium mb-2">Related</h2>
                <div className="space-y-2">
                  {related?.length ? related.slice(0,5).map(r => (
                    <a key={r.id} href={`/services/${r.id}`} className="block text-sm text-primary hover:underline line-clamp-1">{r.name}</a>
                  )) : <p className="text-muted-foreground text-sm">No related services.</p>}
                </div>
              </div>
            </aside>
          </section>
        </>
      )}
    </main>
  )
}
