import type { Amenity } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface AmenityCardProps {
  amenity: Amenity
}

export default function AmenityCard({ amenity }: AmenityCardProps) {
  const name = getMetafieldValue(amenity.metadata?.name) || amenity.title
  const description = getMetafieldValue(amenity.metadata?.description)
  const icon = getMetafieldValue(amenity.metadata?.icon)
  const image = amenity.metadata?.image

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-100">
      {image && (
        <img
          src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
          alt={name}
          width={400}
          height={250}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center gap-3">
          {icon && <span className="text-2xl">{icon}</span>}
          <h3 className="font-serif text-lg font-bold text-brand-800">{name}</h3>
        </div>
        {description && <p className="mt-3 text-sm leading-relaxed text-brand-600">{description}</p>}
      </div>
    </div>
  )
}