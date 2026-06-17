import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-padded flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="font-serif text-6xl font-bold text-brand-700">404</h1>
      <p className="mt-4 text-lg text-brand-600">We couldn&apos;t find that page.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Return Home
      </Link>
    </div>
  )
}