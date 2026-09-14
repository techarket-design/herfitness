"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Music, Zap, Dumbbell, Apple, Users, Sparkles, Clock, Check, ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/ui/MotionWrapper";

interface ServicesGridProps {
  onOpenTrialModal: (branchSlug?: string) => void;
}

export function ServicesGrid({ onOpenTrialModal }: ServicesGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Mind & Body", "Cardio", "Strength", "Nutrition", "Wellness"];

  const filteredServices = activeCategory === "All"
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Flame": return <Flame className="w-6 h-6 text-her-primary" />;
      case "Music": return <Music className="w-6 h-6 text-pink-500" />;
      case "Zap": return <Zap className="w-6 h-6 text-amber-500" />;
      case "Dumbbell": return <Dumbbell className="w-6 h-6 text-her-primary" />;
      case "Apple": return <Apple className="w-6 h-6 text-her-secondary" />;
      case "Users": return <Users className="w-6 h-6 text-sky-500" />;
      case "Sparkles": return <Sparkles className="w-6 h-6 text-her-secondary" />;
      default: return <Sparkles className="w-6 h-6 text-her-primary" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-her-primary/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-her-secondary/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn direction="up">
            <span className="text-xs font-bold text-her-secondary bg-her-secondary/10 border border-her-secondary/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Tailored Women-Only Programs
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white">
              Designed For <span className="text-transparent bg-clip-text bg-gradient-to-r from-her-primary to-pink-400">Female Anatomy</span> & Lifestyle
            </h2>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              From low-impact PCOS posture recovery to high-energy Zumba cardio and custom Indian diet charts, our programs deliver holistic health, strength, and confidence.
            </p>
          </FadeIn>

          {/* Filter Pills */}
          <FadeIn direction="up" delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-her-primary to-pink-600 text-white shadow-lg shadow-pink-500/25 scale-105"
                      : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <StaggerItem key={service.id}>
                <HoverCard className="h-full">
                  <div className="group h-full bg-slate-950/80 rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300">
                    <div>
                      {/* Image Header */}
                      <div className="relative h-52 w-full overflow-hidden">
                        <Image
                          src={service.imageUrl}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500 filter saturate-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-bold text-slate-200">
                          {getIcon(service.iconName)}
                          <span>{service.category}</span>
                        </div>

                        {/* Intensity Badge */}
                        <div className="absolute top-4 right-4 bg-her-secondary/90 text-slate-950 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                          {service.intensity}
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
                          <Clock className="w-3.5 h-3.5 text-her-secondary" />
                          <span>{service.duration}</span>
                          <span>•</span>
                          <span className="text-pink-400 font-semibold">{service.popularFor}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                          {service.title}
                        </h3>

                        <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed">
                          {service.shortDesc}
                        </p>

                        {/* Benefits checklist */}
                        <div className="mt-4 pt-4 border-t border-slate-900 space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                              <Check className="w-3.5 h-3.5 text-her-secondary shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div className="p-6 pt-0">
                      <button
                        onClick={() => onOpenTrialModal()}
                        className="w-full py-3 px-4 rounded-xl bg-slate-900 group-hover:bg-gradient-to-r group-hover:from-her-primary group-hover:to-pink-600 text-slate-200 group-hover:text-white font-bold text-xs border border-slate-800 group-hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span>Book Class Free Pass</span>
                        <ArrowUpRight className="w-4 h-4 text-her-secondary group-hover:text-white transition-colors" />
                      </button>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </AnimatePresence>
        </StaggerContainer>
      </div>
    </section>
  );
}
