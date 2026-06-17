// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface PropertyInfo extends CosmicObject {
  type: 'property-info';
  metadata: {
    property_name?: string;
    tagline?: string;
    description?: string;
    hero_image?: CosmicImage;
    address?: string;
    phone?: string;
    email?: string;
    office_hours?: string;
  };
}

export interface FloorPlan extends CosmicObject {
  type: 'floor-plans';
  metadata: {
    name?: string;
    description?: string;
    bedrooms?: number;
    bathrooms?: number;
    square_feet?: number;
    starting_price?: number;
    availability?: string;
    featured_image?: CosmicImage;
    gallery?: CosmicImage[];
  };
}

export interface Amenity extends CosmicObject {
  type: 'amenities';
  metadata: {
    name?: string;
    description?: string;
    icon?: string;
    image?: CosmicImage;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    role?: string;
    bio?: string;
    photo?: CosmicImage;
    email?: string;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    resident_name?: string;
    quote?: string;
    rating?: number;
    photo?: CosmicImage;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}