import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS_DATA } from "@/data/locationsData";
import { LocationJsonLd } from "@/components/locations/LocationJsonLd";
import { LocationPageClient } from "@/components/locations/LocationPageClient";

interface LocationPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return LOCATIONS_DATA.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = LOCATIONS_DATA.find((l) => l.slug === params.slug);

  if (!location) {
    return {
      title: "Location Not Found | Her Fitness",
    };
  }

  return {
    title: `${location.name} | Women-Only Gym in ${location.area}, Delhi`,
    description: `Her Fitness ${location.area} is Delhi's premier 100% women-only gym & wellness sanctuary located at ${location.address}. 100% certified female trainers, reformer pilates, zumba, and steam spa.`,
    keywords: [
      `women gym ${location.area}`,
      `ladies gym ${location.slug}`,
      `her fitness ${location.slug}`,
      `female fitness trainer ${location.area}`,
      `pcos workout center ${location.area}`,
      `pilates studio ${location.area}`,
    ],
    openGraph: {
      title: `${location.name} | Premium Women-Only Gym`,
      description: location.tagline,
      url: `https://herfitness.in/locations/${location.slug}`,
      siteName: "Her Fitness",
      images: [
        {
          url: location.imageUrl,
          width: 1200,
          height: 630,
          alt: location.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${location.name} | Women-Only Gym`,
      description: location.tagline,
    },
  };
}

export default function SingleLocationPage({ params }: LocationPageProps) {
  const location = LOCATIONS_DATA.find((l) => l.slug === params.slug);

  if (!location) {
    notFound();
  }

  return (
    <>
      <LocationJsonLd location={location} />
      <LocationPageClient location={location} />
    </>
  );
}
