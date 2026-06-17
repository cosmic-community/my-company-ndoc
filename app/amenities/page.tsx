import SectionHeading from '@/components/SectionHeading'
import AmenityCard from '@/components/AmenityCard'
import { getAmenities } from '@/lib/cosmic'

export const metadata = {
  title: 'Amenities | Riverstone Bend Apartments',
}

export default async function AmenitiesPage() {
  const amenities = await getAmenities()

  return (
    <div className="container-padded py-16">
      <SectionHeading
        title="Amenities"
        subtitle="Designed to make everyday living effortless and enjoyable."
      />
      {amenities.length === 0 ? (
        <p className="mt-10 text-brand-600">No amenities listed at this time.</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity) => (
            <AmenityCard key={amenity.id} amenity={amenity} />
          ))}
        </div>
      )}
    </div>
  )
}