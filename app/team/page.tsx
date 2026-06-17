import SectionHeading from '@/components/SectionHeading'
import TeamCard from '@/components/TeamCard'
import { getTeamMembers } from '@/lib/cosmic'

export const metadata = {
  title: 'Our Team | Riverstone Bend Apartments',
}

export default async function TeamPage() {
  const team = await getTeamMembers()

  return (
    <div className="container-padded py-16">
      <SectionHeading
        title="Meet the Team"
        subtitle="The friendly faces dedicated to making you feel at home."
      />
      {team.length === 0 ? (
        <p className="mt-10 text-brand-600">No team members listed at this time.</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </div>
  )
}