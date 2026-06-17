import type { TeamMember } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface TeamCardProps {
  member: TeamMember
}

export default function TeamCard({ member }: TeamCardProps) {
  const name = getMetafieldValue(member.metadata?.name) || member.title
  const role = getMetafieldValue(member.metadata?.role)
  const bio = getMetafieldValue(member.metadata?.bio)
  const email = getMetafieldValue(member.metadata?.email)
  const photo = member.metadata?.photo

  return (
    <div className="overflow-hidden rounded-2xl bg-white text-center shadow-sm ring-1 ring-brand-100">
      <div className="aspect-square overflow-hidden bg-brand-100">
        {photo && (
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg font-bold text-brand-800">{name}</h3>
        {role && <p className="mt-1 text-sm font-medium text-brand-500">{role}</p>}
        {bio && <p className="mt-3 text-sm leading-relaxed text-brand-600">{bio}</p>}
        {email && (
          <a
            href={`mailto:${email}`}
            className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-800"
          >
            {email}
          </a>
        )}
      </div>
    </div>
  )
}