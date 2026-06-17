import { createBucketClient } from '@cosmicjs/sdk'
import type {
  PropertyInfo,
  FloorPlan,
  Amenity,
  TeamMember,
  Testimonial,
} from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Safely render metafield values that may be objects
export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

export async function getPropertyInfo(): Promise<PropertyInfo | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'property-info' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.object as PropertyInfo
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch property info')
  }
}

export async function getFloorPlans(): Promise<FloorPlan[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'floor-plans' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as FloorPlan[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch floor plans')
  }
}

export async function getFloorPlan(slug: string): Promise<FloorPlan | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'floor-plans', slug })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.object as FloorPlan
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch floor plan')
  }
}

export async function getAmenities(): Promise<Amenity[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'amenities' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as Amenity[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch amenities')
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as TeamMember[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch team members')
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as Testimonial[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch testimonials')
  }
}