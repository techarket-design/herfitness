"use client";

import React from "react";
import { Location } from "@/lib/types";
import { LocationHero } from "./LocationHero";
import { LocationDetails } from "./LocationDetails";
import { useTrialModal } from "@/components/layout/ClientLayout";

interface LocationPageClientProps {
  location: Location;
}

export function LocationPageClient({ location }: LocationPageClientProps) {
  const { openModal } = useTrialModal();

  return (
    <>
      <LocationHero location={location} onOpenTrialModal={openModal} />
      <LocationDetails location={location} onOpenTrialModal={openModal} />
    </>
  );
}
