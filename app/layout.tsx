import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'
import { getPropertyInfo } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Riverstone Bend Apartments',
  description: 'Modern apartment living in beautiful Bend, Oregon.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string
  const property = await getPropertyInfo()

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏢</text></svg>" />
        <script src="/dashboard-console-capture.js" />
              <script defer src="https://insights.cosmicinsights.dev/script.js" data-project="6a3327f89f5d95ad19961dc8"></script>
      </head>
      <body className="flex min-h-screen flex-col">
        <Header property={property} />
        <main className="flex-1">{children}</main>
        <Footer property={property} />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}