import Link from 'next/link'
import type { FloorPlan } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface FloorPlanCardProps {
  floorPlan: FloorPlan
}

export default function FloorPlanCard({ floorPlan }: FloorPlanCardProps) {
  const name = getMetafieldValue(floorPlan.metadata?.name) || floorPlan.title
  const beds = floorPlan.metadata?.bedrooms
  const baths = floorPlan.metadata?.bathrooms
  const sqft = floorPlan.metadata?.square_feet
  const price = floorPlan.metadata?.starting_price
  const availability = getMetafieldValue(floorPlan.metadata?.availability)
  const image = floorPlan.metadata?.featured_image

  return (
    <Link
      href={`/floor-plans/${floorPlan.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-100 transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-100">
        {image && (
          <img
            src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {availability && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
            {availability}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl font-bold text-brand-800">{name}</h3>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-brand-600">
          {beds !== undefined && <span>{beds} Bed</span>}
          {baths !== undefined && <span>{baths} Bath</span>}
          {sqft !== undefined && <span>{sqft} sq ft</span>}
        </div>
        {price !== undefined && (
          <p className="mt-4 text-lg font-semibold text-brand-700">
            From ${price.toLocaleString()}/mo
          </p>
        )}
      </div>
    </Link>
  )
}