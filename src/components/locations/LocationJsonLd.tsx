import React from "react";
import { Location } from "@/lib/types";

interface LocationJsonLdProps {
  location: Location;
}

export function LocationJsonLd({ location }: LocationJsonLdProps) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "name": location.name,
    "image": location.imageUrl,
    "@id": `https://herfitness.in/locations/${location.slug}`,
    "url": `https://herfitness.in/locations/${location.slug}`,
    "telephone": location.phone,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.address,
      "addressLocality": location.area,
      "addressRegion": "Delhi",
      "postalCode": location.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.geo.latitude,
      "longitude": location.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "06:00",
        "closes": "21:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "07:00",
        "closes": "20:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": location.rating,
      "reviewCount": location.reviewsCount
    },
    "amenityFeature": location.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity,
      "value": true
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
