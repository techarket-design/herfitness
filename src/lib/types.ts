export interface Location {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  address: string;
  area: string;
  city: string;
  pincode: string;
  landmark: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  amenities: string[];
  features: string[];
  imageUrl: string;
  mapEmbedUrl: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  trainersCount: number;
  membersCount: string;
  rating: number;
  reviewsCount: number;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: "Cardio" | "Mind & Body" | "Strength" | "Wellness" | "Nutrition";
  intensity: "All Levels" | "Moderate" | "High" | "Custom";
  duration: string;
  benefits: string[];
  imageUrl: string;
  popularFor: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  mainImage: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  category: {
    title: string;
    color?: string;
  };
  author: {
    name: string;
    role: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
  readTime: string;
  body?: any[];
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  branch: string;
  program: string;
  weightLoss?: string;
  quote: string;
  rating: number;
  avatarUrl: string;
  beforeAfterImage?: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  branch: string;
  fitnessGoal: string;
  preferredSlot: string;
}
