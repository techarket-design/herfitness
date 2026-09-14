"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Location } from "@/lib/types";
import { MapPin, Phone, Star, CheckCircle, ExternalLink, Sparkles } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/ui/MotionWrapper";
import { useTrialModal } from "@/components/layout/ClientLayout";

interface LocationsIndexClientProps {
  locations: Location[];
}

export function LocationsIndexClient({ locations }: LocationsIndexClientProps) {
  const { openModal } = useTrialModal();

  return (
    <div className="pt-28 pb-24 bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn direction="up">
            <span className="text-xs font-bold text-her-secondary bg-her-secondary/10 border border-her-secondary/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              8 Premier Sanctuaries
            </span>
            <h1 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight text-white">
              Her Fitness <span className="text-transparent bg-clip-text bg-gradient-to-r from-her-primary to-pink-400">Delhi NCR Locations</span>
            </h1>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              Explore our 8 state-of-the-art women-only gyms across Delhi NCR. Each branch features biometric female security, Technogym equipment, pilates reformer studios, and infrared steam spas.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <StaggerItem key={loc.id}>
              <HoverCard className="h-full">
                <div className="h-full bg-slate-900/90 rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-pink-500/50 transition-all shadow-xl group">
                  <div>
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={loc.imageUrl}
                        alt={loc.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-bold text-her-secondary flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{loc.area}</span>
                      </div>
                      <div className="absolute top-4 right-4 bg-amber-500/90 text-slate-950 px-2.5 py-0.5 rounded-full text-[10px] font-black flex items-center gap-1">
                        <Star className="w-3 h-3 fill-slate-950" /> {loc.rating}
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                        {loc.name}
                      </h2>
                      <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                        {loc.address}
                      </p>

                      <div className="mt-4 pt-4 border-t border-slate-800 space-y-1.5">
                        {loc.amenities.slice(0, 3).map((amenity, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-her-secondary shrink-0" />
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 space-y-3">
                    <Link
                      href={`/locations/${loc.slug}`}
                      className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-slate-700"
                    >
                      <span>Branch Profile & SEO Page</span>
                      <ExternalLink className="w-3.5 h-3.5 text-her-secondary" />
                    </Link>

                    <button
                      onClick={() => openModal(loc.slug)}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-her-primary to-pink-600 hover:from-pink-600 hover:to-her-primaryDark text-white font-bold text-xs shadow-md shadow-pink-500/20 flex items-center justify-center gap-2 transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-her-secondary" />
                      <span>Book Free Trial Pass at {loc.area.split(' ')[0]}</span>
                    </button>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
