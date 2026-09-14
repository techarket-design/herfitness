"use client";

import React from "react";
import { Hero } from "./Hero";
import { ByTheNumbers } from "./ByTheNumbers";
import { ServicesGsapScroll } from "./ServicesGsapScroll";
import { LocationsSection } from "./LocationsSection";
import { BmiCalculator } from "./BmiCalculator";
import { TransformationSection } from "./TransformationSection";
import { BlogPreviewSection } from "./BlogPreviewSection";
import { FloatingWidgets } from "@/components/ui/FloatingWidgets";
import { useTrialModal } from "@/components/layout/ClientLayout";
import { BlogPost } from "@/lib/types";

interface HomePageClientProps {
  posts: BlogPost[];
}

export function HomePageClient({ posts }: HomePageClientProps) {
  const { openModal } = useTrialModal();

  return (
    <>
      <Hero onOpenTrialModal={openModal} />
      <ByTheNumbers />
      <ServicesGsapScroll onOpenTrialModal={openModal} />
      <LocationsSection onOpenTrialModal={openModal} />
      <BmiCalculator onOpenTrialModal={openModal} />
      <TransformationSection onOpenTrialModal={openModal} />
      <BlogPreviewSection posts={posts} />
      <FloatingWidgets onOpenTrialModal={openModal} />
    </>
  );
}
