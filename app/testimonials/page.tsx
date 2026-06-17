import SectionHeading from '@/components/SectionHeading'
import TestimonialCard from '@/components/TestimonialCard'
import { getTestimonials } from '@/lib/cosmic'

export const metadata = {
  title: 'Reviews | Riverstone Bend Apartments',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="container-padded py-16">
      <SectionHeading
        title="Resident Reviews"
        subtitle="Hear what our residents love about living here."
      />
      {testimonials.length === 0 ? (
        <p className="mt-10 text-brand-600">No reviews available at this time.</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      )}
    </div>
  )
}