// app/floor-plans/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getFloorPlan, getMetafieldValue } from '@/lib/cosmic'

export default async function FloorPlanDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const plan = await getFloorPlan(slug)

  if (!plan) {
    notFound()
  }

  const name = getMetafieldValue(plan.metadata?.name) || plan.title
  const description = getMetafieldValue(plan.metadata?.description)
  const beds = plan.metadata?.bedrooms
  const baths = plan.metadata?.bathrooms
  const sqft = plan.metadata?.square_feet
  const price = plan.metadata?.starting_price
  const availability = getMetafieldValue(plan.metadata?.availability)
  const featuredImage = plan.metadata?.featured_image
  const gallery = plan.metadata?.gallery || []

  return (
    <div className="container-padded py-12">
      <Link href="/floor-plans" className="text-sm font-medium text-brand-600 hover:text-brand-800">
        ← Back to Floor Plans
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-brand-100">
          {featuredImage && (
            <img
              src={`${featuredImage.imgix_url}?w=1600&h=1200&fit=crop&auto=format,compress`}
              alt={name}
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        <div>
          {availability && (
            <span className="inline-block rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
              {availability}
            </span>
          )}
          <h1 className="mt-3 font-serif text-4xl font-bold text-brand-800">{name}</h1>

          <div className="mt-6 grid grid-cols-3 gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-100">
            {beds !== undefined && (
              <div className="text-center">
                <p className="text-2xl font-bold text-brand-700">{beds}</p>
                <p className="text-xs uppercase tracking-wide text-brand-500">Bedrooms</p>
              </div>
            )}
            {baths !== undefined && (
              <div className="text-center">
                <p className="text-2xl font-bold text-brand-700">{baths}</p>
                <p className="text-xs uppercase tracking-wide text-brand-500">Bathrooms</p>
              </div>
            )}
            {sqft !== undefined && (
              <div className="text-center">
                <p className="text-2xl font-bold text-brand-700">{sqft}</p>
                <p className="text-xs uppercase tracking-wide text-brand-500">Sq Ft</p>
              </div>
            )}
          </div>

          {price !== undefined && (
            <p className="mt-6 text-2xl font-semibold text-brand-700">
              Starting at ${price.toLocaleString()}/mo
            </p>
          )}

          {description && (
            <p className="mt-6 leading-relaxed text-brand-600">{description}</p>
          )}
        </div>
      </div>

      {gallery.length > 0 && (
        <div className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-brand-800">Gallery</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image, index) => (
              <img
                key={index}
                src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                alt={`${name} gallery ${index + 1}`}
                width={400}
                height={300}
                className="h-56 w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}