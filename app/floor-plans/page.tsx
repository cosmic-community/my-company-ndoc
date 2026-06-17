import SectionHeading from '@/components/SectionHeading'
import FloorPlanCard from '@/components/FloorPlanCard'
import { getFloorPlans } from '@/lib/cosmic'

export const metadata = {
  title: 'Floor Plans | Riverstone Bend Apartments',
}

export default async function FloorPlansPage() {
  const floorPlans = await getFloorPlans()

  return (
    <div className="container-padded py-16">
      <SectionHeading
        title="Floor Plans"
        subtitle="Browse our available units and find the perfect fit."
      />
      {floorPlans.length === 0 ? (
        <p className="mt-10 text-brand-600">No floor plans available at this time.</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {floorPlans.map((plan) => (
            <FloorPlanCard key={plan.id} floorPlan={plan} />
          ))}
        </div>
      )}
    </div>
  )
}