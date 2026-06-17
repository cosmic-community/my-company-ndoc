import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const residentName = getMetafieldValue(testimonial.metadata?.resident_name) || testimonial.title
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const rating = testimonial.metadata?.rating
  const photo = testimonial.metadata?.photo

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-100">
      {typeof rating === 'number' && <StarRating rating={rating} />}
      {quote && (
        <blockquote className="mt-4 flex-1 text-brand-700">
          <p className="italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
        </blockquote>
      )}
      <div className="mt-6 flex items-center gap-3">
        {photo && (
          <img
            src={`${photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={residentName}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
        )}
        <span className="font-semibold text-brand-800">{residentName}</span>
      </div>
    </div>
  )
}