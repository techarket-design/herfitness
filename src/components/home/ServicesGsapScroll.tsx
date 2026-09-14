"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/MotionWrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ServicesGsapScrollProps {
  onOpenTrialModal: (branchSlug?: string) => void;
}

export function ServicesGsapScroll({ onOpenTrialModal }: ServicesGsapScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      badge: "01 • SIGNATURE FLOOR",
      title: "Gym",
      description: "A fully-equipped women-only floor with cardio, resistance machines and free-weight zones — coached, never intimidating.",
      tag: "45-75 MIN • VARIABLE",
      imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    },
    {
      badge: "02 • MIND & BODY",
      title: "Power Yoga & Pilates",
      description: "Strength-focused vinyasa and mat pilates for lean muscle, deep core control and better posture.",
      tag: "55 MIN • MEDIUM",
      imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    },
    {
      badge: "03 • HIGH ENERGY",
      title: "Zumba",
      description: "Bollywood-meets-Latin choreography that torches calories while you smile. No experience needed.",
      tag: "45 MIN • HIGH",
      imageUrl: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=800&q=80",
    },
    {
      badge: "04 • COMBAT",
      title: "Kickboxing",
      description: "Boxing fundamentals, pad-work and kick combinations for explosive power, agility and confidence.",
      tag: "50 MIN • HIGH",
      imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    },
    {
      badge: "05 • WELLNESS",
      title: "Diet & Nutrition Counselling",
      description: "One-on-one guidance targeting cycle-aware, PCOS, thyroid and sustainable Indian food blueprints.",
      tag: "45 MIN • CONSULT",
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    },
    {
      badge: "06 • RECOVERY",
      title: "Infrared Spa & Sauna",
      description: "Therapeutic thermal detox to soothe DOMS muscle fatigue, lower stress and restore glowing skin.",
      tag: "30 MIN • ALL LEVELS",
      imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    // Check media query for desktop vs mobile
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const scrollAmount = container.scrollWidth - window.innerWidth + 120;

      const animation = gsap.to(container, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollAmount}`,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        animation.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 sm:py-28 bg-her-blush overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <FadeIn direction="up">
          <span className="text-xs font-bold text-her-primary uppercase tracking-widest block mb-2 font-sans">
            SERVICES
          </span>
          <h2 className="text-4xl sm:text-6xl font-normal font-serif text-slate-900 tracking-tight">
            Every workout, <span className="italic text-rose-400">designed for her.</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm font-sans max-w-xl">
            Coach-led, women-only and built around the female body. Swipe or scroll to explore.
          </p>
        </FadeIn>
      </div>

      {/* Horizontal Cards Container (GSAP pinned on PC / Touch scrollable on mobile) */}
      <div className="w-full overflow-x-auto md:overflow-visible no-scrollbar pb-6 px-4 sm:px-6 lg:px-8">
        <div
          ref={containerRef}
          className="flex items-stretch gap-6 w-max"
        >
          {services.map((item, idx) => (
            <div
              key={idx}
              className="w-[300px] sm:w-[360px] h-[520px] rounded-3xl overflow-hidden relative shadow-xl border border-rose-100 flex-shrink-0 group cursor-pointer"
              onClick={() => onOpenTrialModal()}
            >
              {/* Background Image */}
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-110"
              />

              {/* Gradient Dark Overlay at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />

              {/* Top Badge */}
              <div className="absolute top-5 left-5">
                <span className="bg-slate-950/70 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider">
                  {item.badge}
                </span>
              </div>

              {/* Bottom Card Content Matching Image 3 */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white group-hover:text-rose-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-rose-100/80 leading-relaxed font-sans line-clamp-3">
                  {item.description}
                </p>

                <div className="pt-3 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-rose-200 tracking-wider uppercase font-sans">
                    {item.tag}
                  </span>

                  <div className="w-10 h-10 rounded-full bg-her-primary hover:bg-her-primaryHover text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
