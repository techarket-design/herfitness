"use client";

import React from "react";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/ui/MotionWrapper";

export function ByTheNumbers() {
  const stats = [
    {
      value: "5,000+",
      label: "Women empowered since 2018",
    },
    {
      value: "98%",
      label: "Retention after first month",
    },
    {
      value: "24",
      label: "Expert female coaches",
    },
    {
      value: "8",
      label: "Studios across Delhi NCR",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-her-blushCard relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Matching Image 1 */}
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn direction="up">
            <span className="text-xs font-bold text-her-primary uppercase tracking-widest block mb-2 font-sans">
              BY THE NUMBERS
            </span>
            <h2 className="text-4xl sm:text-6xl font-normal font-serif text-slate-900 tracking-tight">
              A movement, not a membership.
            </h2>
          </FadeIn>
        </div>

        {/* 4 Cards Grid Matching Image 1 */}
        <StaggerContainer className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StaggerItem key={idx}>
              <HoverCard>
                <div className="bg-white p-8 rounded-3xl border border-rose-100/60 shadow-lg shadow-rose-900/5 transition-all duration-300 min-h-[160px] flex flex-col justify-between">
                  <div className="text-4xl sm:text-5xl font-normal font-serif text-rose-400">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 font-sans mt-4 font-normal">
                    {stat.label}
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
