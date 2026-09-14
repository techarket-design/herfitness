"use client";

import React from "react";
import Image from "next/image";
import { Location } from "@/lib/types";
import { MapPin, Star, Phone, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/MotionWrapper";

interface LocationHeroProps {
  location: Location;
  onOpenTrialModal: (branchSlug?: string) => void;
}

export function LocationHero({ location, onOpenTrialModal }: LocationHeroProps) {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center bg-slate-950 pt-28 pb-16 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={location.imageUrl}
          alt={location.name}
          fill
          className="object-cover opacity-35 scale-105 filter saturate-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
        <div className="max-w-3xl">
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-pink-200 mb-4">
              <MapPin className="w-3.5 h-3.5 text-her-secondary" />
              <span>Official Branch Sanctuary • {location.area}</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              {location.name}
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="mt-4 text-slate-300 text-lg leading-relaxed font-medium">
              {location.tagline}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5 bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="font-bold text-white">{location.rating} / 5.0</span>
                <span className="text-slate-400">({location.reviewsCount} Google Reviews)</span>
              </div>

              <div className="flex items-center gap-1.5 bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800 text-slate-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-her-secondary" />
                <span>{location.trainersCount} Certified Female Personal Trainers</span>
              </div>

              <div className="flex items-center gap-1.5 bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800 text-pink-300 font-bold">
                <span>{location.membersCount} Active Members</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenTrialModal(location.slug)}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-her-primary via-pink-600 to-rose-500 hover:from-pink-600 hover:to-her-primaryDark text-white font-extrabold text-base shadow-xl shadow-pink-500/30 flex items-center justify-center gap-2 transition-all"
              >
                <Sparkles className="w-5 h-5 text-her-secondary" />
                <span>Book Free 3-Day Pass at {location.area}</span>
              </button>

              <a
                href={`tel:${location.phone.replace(/\s+/g, '')}`}
                className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-base flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-her-secondary" />
                <span>Call Branch: {location.phone}</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
