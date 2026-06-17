import Link from 'next/link'
import type { PropertyInfo } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface FooterProps {
  property: PropertyInfo | null
}

export default function Footer({ property }: FooterProps) {
  const name = getMetafieldValue(property?.metadata?.property_name) || 'Riverstone Bend'
  const address = getMetafieldValue(property?.metadata?.address)
  const phone = getMetafieldValue(property?.metadata?.phone)
  const email = getMetafieldValue(property?.metadata?.email)
  const hours = getMetafieldValue(property?.metadata?.office_hours)

  return (
    <footer className="bg-brand-800 text-brand-100">
      <div className="container-padded grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-serif text-lg font-bold text-white">{name}</h3>
          <p className="mt-2 text-sm text-brand-200">Apartment living in Bend, Oregon.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Visit Us</h4>
          {address && <p className="mt-2 text-sm">{address}</p>}
          {hours && <p className="mt-2 text-sm text-brand-200">{hours}</p>}
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h4>
          {phone && <p className="mt-2 text-sm">{phone}</p>}
          {email && <p className="mt-2 text-sm break-words">{email}</p>}
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Explore</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="/floor-plans" className="hover:text-white">Floor Plans</Link></li>
            <li><Link href="/amenities" className="hover:text-white">Amenities</Link></li>
            <li><Link href="/team" className="hover:text-white">Team</Link></li>
            <li><Link href="/testimonials" className="hover:text-white">Reviews</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-700 py-4">
        <p className="container-padded text-center text-xs text-brand-300">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}