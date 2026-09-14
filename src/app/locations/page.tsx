import React from "react";
import { Metadata } from "next";
import { LOCATIONS_DATA } from "@/data/locationsData";
import { LocationsIndexClient } from "@/components/locations/LocationsIndexClient";

export const metadata: Metadata = {
  title: "8 Women-Only Gym Locations in Delhi NCR | Her Fitness",
  description:
    "Find your nearest Her Fitness branch in Delhi NCR: Dwarka, Rajouri Garden, Janakpuri, Vikaspuri, Punjabi Bagh, Paschim Vihar, Rohini, and Kirti Nagar. 100% Female certified trainers.",
};

export default function LocationsIndexPage() {
  return <LocationsIndexClient locations={LOCATIONS_DATA} />;
}
