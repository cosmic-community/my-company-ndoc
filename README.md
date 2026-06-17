# Riverstone Bend Apartments

![App Preview](https://imgix.cosmicjs.com/236e34e0-6aa1-11f1-8dfe-457508ece1b8-autopilot-photo-1507003211169-0a1dd7228f2d-1781737574180.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, fully responsive property website for an apartment building in Bend, Oregon. Built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com), this site showcases floor plans, amenities, the management team, and resident testimonials — all managed through your existing Cosmic content models.

## Features

- 🏢 **Property Overview** — Hero section, tagline, description, and contact details pulled from your Property Info object
- 🏠 **Floor Plans Gallery** — Browse available units with bedrooms, bathrooms, square footage, pricing, and image galleries
- 🌟 **Amenities Showcase** — Highlight every community feature with icons and imagery
- 👥 **Meet the Team** — Display team members with photos, roles, bios, and contact emails
- 💬 **Resident Testimonials** — Star-rated reviews from happy residents
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ⚡ **Server-Rendered** — Fast, SEO-friendly pages using Next.js App Router and Server Components
- 🎨 **Modern Design** — Clean, elegant UI with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a3327f99f5d95ad19961dca&clone_repository=6a3329149f5d95ad19961e3f)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
>
> User instructions: A property website for an apartment building in bend oregon"

### Code Generation Prompt

> Build a Next.js application for a company website called "My Company". Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: A property website for an apartment building in bend oregon

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with the property bucket configured

### Installation

```bash
bun install
```

Create the required environment variables (these are provided automatically in the Cosmic dashboard):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all floor plans with nested data
const { objects: floorPlans } = await cosmic.objects
  .find({ type: 'floor-plans' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single property info object
const { object: property } = await cosmic.objects
  .findOne({ type: 'property-info' })
  .depth(1)
```

## Cosmic CMS Integration

This application reads from five Cosmic object types:

- **property-info** — Property name, tagline, description, hero image, address, phone, email, office hours
- **floor-plans** — Name, description, bedrooms, bathrooms, square feet, starting price, availability, featured image, gallery
- **amenities** — Name, description, icon, image
- **team-members** — Name, role, bio, photo, email
- **testimonials** — Resident name, quote, rating, photo

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel

1. Push this repository to GitHub
2. Import the project into [Vercel](https://vercel.com)
3. Add your `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` environment variables
4. Deploy

### Netlify

1. Push to GitHub and import into [Netlify](https://netlify.com)
2. Set build command to `bun run build` and add environment variables
3. Deploy

<!-- README_END -->