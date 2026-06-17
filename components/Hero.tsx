import Link from 'next/link'
import type { PropertyInfo } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface HeroProps {
  property: PropertyInfo | null
}

export default function Hero({ property }: HeroProps) {
  const name = getMetafieldValue(property?.metadata?.property_name) || 'Riverstone Bend'
  const tagline = getMetafieldValue(property?.metadata?.tagline) || 'Elevated apartment living in Bend, Oregon'
  const heroImage = property?.metadata?.hero_image

  return (
    <section className="relative overflow-hidden">
      {heroImage ? (
        <img
          src={`${heroImage.imgix_url}?w=2400&h=1200&fit=crop&auto=format,compress`}
          alt={name}
          width={1200}
          height={600}
          className="h-[70vh] w-full object-cover"
        />
      ) : (
        <div className="h-[70vh] w-full bg-brand-700" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/30 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="container-padded">
          <div className="max-w-2xl text-white">
            <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {name}
            </h1>
            <p className="mt-4 text-lg text-brand-100 sm:text-xl">{tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/floor-plans"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-50"
              >
                Explore Floor Plans
              </Link>
              <Link
                href="/amenities"
                className="rounded-full border border-white/70 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                View Amenities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}