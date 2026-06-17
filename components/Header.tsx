import Link from 'next/link'
import type { PropertyInfo } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface HeaderProps {
  property: PropertyInfo | null
}

export default function Header({ property }: HeaderProps) {
  const name = getMetafieldValue(property?.metadata?.property_name) || 'Riverstone Bend'

  const links = [
    { href: '/', label: 'Home' },
    { href: '/floor-plans', label: 'Floor Plans' },
    { href: '/amenities', label: 'Amenities' },
    { href: '/team', label: 'Team' },
    { href: '/testimonials', label: 'Reviews' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-white/90 backdrop-blur">
      <div className="container-padded flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold text-brand-700">
          {name}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-800 transition-colors hover:text-brand-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/floor-plans"
          className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          View Units
        </Link>
      </div>
    </header>
  )
}