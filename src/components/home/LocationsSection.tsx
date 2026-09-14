"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, Star, CheckCircle, ArrowRight, ExternalLink, Sparkles, Navigation } from "lucide-react";
import { LOCATIONS_DATA } from "@/data/locationsData";
import { FadeIn } from "@/components/ui/MotionWrapper";

interface LocationsSectionProps {
  onOpenTrialModal: (branchSlug?: string) => void;
}

export function LocationsSection({ onOpenTrialModal }: LocationsSectionProps) {
  const [selectedSlug, setSelectedSlug] = useState<string>("dwarka");

  const activeLocation = LOCATIONS_DATA.find((l) => l.slug === selectedSlug) || LOCATIONS_DATA[0];

  return (
    <section id="locations" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-her-primary/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn direction="up">
            <span className="text-xs font-bold text-her-secondary bg-her-secondary/10 border border-her-secondary/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              8 Delhi NCR Sanctuaries
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white">
              Find Your Nearest <span className="text-transparent bg-clip-text bg-gradient-to-r from-her-primary via-pink-400 to-rose-300">Her Fitness</span> Branch
            </h2>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              Equipped with biometric female security, Technogym equipment, pilates reformer studios, and infrared steam lounges near major metro stations.
            </p>
          </FadeIn>

          {/* Location Selector Tabs (All 8 Branches) */}
          <FadeIn direction="up" delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              {LOCATIONS_DATA.map((loc) => {
                const isActive = loc.slug === selectedSlug;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedSlug(loc.slug)}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                      isActive
                        ? "bg-gradient-to-r from-her-primary to-pink-600 text-white shadow-lg shadow-pink-500/25 scale-105"
                        : "bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
                    }`}
                  >
                    <MapPin className={`w-3.5 h-3.5 ${isActive ? "text-her-secondary" : "text-slate-500"}`} />
                    <span>{loc.area}</span>
                  </button>
                );
              })}
            </div>
          </FadeIn>
        </div>

        {/* Selected Location Card */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLocation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Info Column */}
              <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                    <div>
                      <span className="text-xs font-bold text-her-secondary uppercase tracking-widest block mb-1">
                        {activeLocation.city} • {activeLocation.area}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-white">
                        {activeLocation.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 text-xs">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="font-bold text-white">{activeLocation.rating}</span>
                      <span className="text-slate-500">({activeLocation.reviewsCount} reviews)</span>
                    </div>
                  </div>

                  <p className="mt-4 text-slate-300 text-sm italic font-medium">
                    "{activeLocation.tagline}"
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 space-y-1">
                      <div className="flex items-center gap-1.5 text-slate-400 font-semibold mb-1">
                        <Navigation className="w-3.5 h-3.5 text-her-primary" /> Full Address:
                      </div>
                      <div className="text-slate-200 font-medium leading-normal">{activeLocation.address}</div>
                      <div className="text-pink-300 text-[11px] pt-1">Landmark: {activeLocation.landmark}</div>
                    </div>

                    <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 space-y-2">
                      <div className="flex items-center gap-1.5 text-slate-400 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-her-secondary" /> Operating Hours:
                      </div>
                      <div className="text-slate-200 font-medium">Mon-Sat: {activeLocation.hours.weekdays}</div>
                      <div className="text-slate-200 font-medium">Sunday: {activeLocation.hours.weekends}</div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Branch Amenities & Studio Highlights:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeLocation.amenities.map((amenity, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-950 border border-slate-800 text-slate-200 px-3 py-1 rounded-xl text-xs font-medium flex items-center gap-1.5"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-her-secondary" />
                          <span>{amenity}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => onOpenTrialModal(activeLocation.slug)}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-her-primary to-pink-600 hover:from-pink-600 hover:to-her-primaryDark text-white font-bold text-xs shadow-lg shadow-pink-500/25 flex items-center justify-center gap-2 transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-her-secondary" />
                    <span>Book Trial Pass at {activeLocation.area}</span>
                  </button>

                  <Link
                    href={`/locations/${activeLocation.slug}`}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <span>View Dedicated Branch Page & SEO Details</span>
                    <ExternalLink className="w-4 h-4 text-her-secondary" />
                  </Link>
                </div>
              </div>

              {/* Visual & Map Column */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-800 group">
                  <Image
                    src={activeLocation.imageUrl}
                    alt={activeLocation.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="bg-slate-950/80 px-3 py-1 rounded-full border border-white/10 font-semibold">
                      {activeLocation.trainersCount} Certified Female Coaches
                    </span>
                    <span className="bg-her-primary px-3 py-1 rounded-full font-bold">
                      {activeLocation.membersCount} Members
                    </span>
                  </div>
                </div>

                {/* Map Preview */}
                <div className="relative h-56 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                  <iframe
                    src={activeLocation.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    title={`Google Map for ${activeLocation.name}`}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
