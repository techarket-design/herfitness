"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play, Star, MapPin, Sparkles, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/MotionWrapper";

interface HeroProps {
  onOpenTrialModal: (branchSlug?: string) => void;
}

export function Hero({ onOpenTrialModal }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-slate-950 pt-28 pb-16 overflow-hidden">
      {/* Visual Background Layer with Sunset Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1920&q=80"
          alt="Her Fitness Empowered Woman"
          fill
          className="object-cover opacity-60 filter saturate-125 scale-105"
          priority
        />

        {/* Sunset Gradient Overlay Matching Reference Image 2 */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/90 via-rose-900/65 to-amber-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-rose-950/40 to-slate-950/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white pt-10">
        <div className="max-w-2xl">
          {/* Top Pill Badge */}
          <FadeIn direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-rose-100 uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-rose-300" />
              <span>DELHI NCR'S WOMEN-ONLY FITNESS SANCTUARY</span>
            </div>
          </FadeIn>

          {/* Headline Matching Image 2 */}
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-normal font-serif tracking-tight leading-[1.05] text-white">
              Strong is the new <br />
              <span className="italic font-normal text-rose-200">beautiful.</span>
            </h1>
          </FadeIn>

          {/* Subheadline */}
          <FadeIn direction="up" delay={0.3}>
            <p className="mt-6 text-base sm:text-lg text-rose-100/90 leading-relaxed font-sans font-normal max-w-xl">
              A private space designed exclusively for women — expert coaching, luxury amenities, and a sisterhood that celebrates every rep, every breath, every transformation.
            </p>
          </FadeIn>

          {/* Action CTAs Matching Image 2 */}
          <FadeIn direction="up" delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenTrialModal()}
                className="rounded-full bg-her-primary hover:bg-her-primaryHover text-white font-bold px-8 py-3.5 text-sm shadow-xl shadow-her-primary/30 transition-all duration-300 flex items-center gap-2.5 hover:scale-105"
              >
                <span>Book Your Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenTrialModal()}
                className="rounded-full bg-slate-950/60 hover:bg-slate-950/80 border border-white/20 backdrop-blur-md text-white font-semibold px-6 py-3.5 text-sm transition-all duration-300 flex items-center gap-2.5"
              >
                <div className="w-6 h-6 rounded-full bg-white text-slate-950 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-slate-950 ml-0.5" />
                </div>
                <span>Watch Her Story</span>
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Floating Translucent Stats Bar Matching Image 2 */}
        <FadeIn direction="up" delay={0.5}>
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-serif font-normal text-white">5,000+</div>
              <div className="text-[11px] text-rose-200/80 uppercase tracking-wider font-sans font-medium mt-1">
                Women Transformed
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-serif font-normal text-white">12</div>
              <div className="text-[11px] text-rose-200/80 uppercase tracking-wider font-sans font-medium mt-1">
                Signature Programs
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-serif font-normal text-white flex items-center gap-1">
                <span>4.9</span>
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              </div>
              <div className="text-[11px] text-rose-200/80 uppercase tracking-wider font-sans font-medium mt-1">
                Google Rating
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-serif font-normal text-white">8</div>
              <div className="text-[11px] text-rose-200/80 uppercase tracking-wider font-sans font-medium mt-1">
                Delhi NCR Branches
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
