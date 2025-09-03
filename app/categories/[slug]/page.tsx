"use client"
import { useParams } from 'next/navigation'
import { useServices } from '@/lib/hooks/use-services'

export default function CategoryPage() {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug
  const { data, isLoading, isError, refetch } = useServices({ category: slug })

  return (
    <main className="container py-10 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Category: {slug}</h1>
        <p className="text-muted-foreground">Services under {slug}.</p>
      </header>
      {isLoading && <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{Array.from({length:8}).map((_,i)=>(<div key={i} className="h-28 rounded-lg bg-muted animate-pulse"/>))}</div>}
      {isError && (
        <div className="p-4 border rounded-lg bg-destructive/10 flex items-center justify-between">
          <span className="text-sm">Failed to load services.</span>
          <button onClick={()=>refetch()} className="text-sm underline">Retry</button>
        </div>
      )}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data?.map(s => (
          <a key={s.id} href={`/services/${s.id}`} className="group rounded-xl border p-4 hover:shadow transition flex flex-col gap-2">
            <div className="font-medium group-hover:text-primary line-clamp-1">{s.name}</div>
            <div className="text-xs text-muted-foreground flex gap-2">
              { (s as any).pricing?.basePrice != null && <span>{(s as any).pricing.basePrice}</span>}
            </div>
            <span className="mt-auto text-primary text-sm font-medium">View</span>
          </a>
        ))}
      </section>
      {!isLoading && data?.length === 0 && <p className="text-sm text-muted-foreground">No services found in this category.</p>}
    </main>
  )
}
