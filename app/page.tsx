import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import FloorPlanCard from '@/components/FloorPlanCard'
import AmenityCard from '@/components/AmenityCard'
import TestimonialCard from '@/components/TestimonialCard'
import {
  getPropertyInfo,
  getFloorPlans,
  getAmenities,
  getTestimonials,
  getMetafieldValue,
} from '@/lib/cosmic'

export default async function HomePage() {
  const [property, floorPlans, amenities, testimonials] = await Promise.all([
    getPropertyInfo(),
    getFloorPlans(),
    getAmenities(),
    getTestimonials(),
  ])

  const description = getMetafieldValue(property?.metadata?.description)
  const featuredPlans = floorPlans.slice(0, 3)
  const featuredAmenities = amenities.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <>
      <Hero property={property} />

      {description && (
        <section className="container-padded py-16">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading title="Welcome Home" centered />
            <p className="mt-6 text-lg leading-relaxed text-brand-600">{description}</p>
          </div>
        </section>
      )}

      {featuredPlans.length > 0 && (
        <section className="bg-white py-16">
          <div className="container-padded">
            <div className="flex items-end justify-between">
              <SectionHeading title="Floor Plans" subtitle="Find the layout that fits your lifestyle." />
              <Link href="/floor-plans" className="hidden text-sm font-semibold text-brand-600 hover:text-brand-800 sm:block">
                View all →
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredPlans.map((plan) => (
                <FloorPlanCard key={plan.id} floorPlan={plan} />
              ))}
            </div>
          </div>
        </section>
      )}

      {featuredAmenities.length > 0 && (
        <section className="container-padded py-16">
          <div className="flex items-end justify-between">
            <SectionHeading title="Amenities" subtitle="Everything you need, right at home." />
            <Link href="/amenities" className="hidden text-sm font-semibold text-brand-600 hover:text-brand-800 sm:block">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredAmenities.map((amenity) => (
              <AmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </div>
        </section>
      )}

      {featuredTestimonials.length > 0 && (
        <section className="bg-brand-700 py-16">
          <div className="container-padded">
            <h2 className="text-center font-serif text-3xl font-bold text-white sm:text-4xl">
              What Our Residents Say
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container-padded py-16 text-center">
        <SectionHeading title="Ready to make the move?" centered subtitle="Schedule a tour and find your perfect home in Bend." />
        <Link
          href="/floor-plans"
          className="mt-8 inline-block rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Browse Available Units
        </Link>
      </section>
    </>
  )
}