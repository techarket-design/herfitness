"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle, Sparkles, Trophy, Heart } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/ui/MotionWrapper";

interface TransformationSectionProps {
  onOpenTrialModal: (branchSlug?: string) => void;
}

export function TransformationSection({ onOpenTrialModal }: TransformationSectionProps) {
  const testimonials = [
    {
      name: "Sneha Kapoor",
      age: 29,
      branch: "Her Fitness Dwarka",
      weightLoss: "Lost 14 kg in 4 Months",
      quote: "Joining Her Fitness Dwarka was the best decision of my life. As someone struggling with PCOS, their certified female trainer and custom diet chart completely reversed my insulin resistance!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      program: "PCOS Recovery & Reformer Pilates",
    },
    {
      name: "Simran Kaur",
      age: 34,
      branch: "Her Fitness Rajouri Garden",
      weightLoss: "Lost 18 kg Post-Pregnancy",
      quote: "The 100% women-only environment gave me complete peace of mind. I loved the Zumba sessions and steam sauna after heavy workout days!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      program: "Post-Natal Sculpt & Zumba",
    },
    {
      name: "Radhika Mehra",
      age: 26,
      branch: "Her Fitness Punjabi Bagh",
      weightLoss: "Bridal Body Transformation",
      quote: "Got in the best shape of my life for my wedding! The female nutritionist checked in on my meals daily via WhatsApp.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      program: "Bridal Power Bootcamp",
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-her-primary/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn direction="up">
            <span className="text-xs font-bold text-her-secondary bg-her-secondary/10 border border-her-secondary/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Real Women • Real Results
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white">
              Inspiring Member <span className="text-transparent bg-clip-text bg-gradient-to-r from-her-primary via-pink-400 to-rose-300">Transformations</span>
            </h2>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              Over 15,000 women across Delhi NCR have reclaimed their health, stamina, and body confidence at Her Fitness.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <StaggerItem key={idx}>
              <HoverCard className="h-full">
                <div className="h-full bg-slate-900/90 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between hover:border-pink-500/40 transition-all shadow-xl">
                  <div>
                    {/* Header profile */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-her-primary shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base">{item.name}, {item.age}</h3>
                        <span className="text-xs text-slate-400 block">{item.branch}</span>
                        <span className="inline-block mt-1 bg-her-secondary/20 text-her-secondary font-extrabold text-[10px] px-2.5 py-0.5 rounded-full">
                          {item.weightLoss}
                        </span>
                      </div>
                    </div>

                    {/* Rating stars */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>

                    <Quote className="w-6 h-6 text-her-primary/30 mb-2" />
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <span>Program: <strong className="text-pink-300">{item.program}</strong></span>
                    <CheckCircle className="w-4 h-4 text-her-secondary" />
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Banner */}
        <FadeIn direction="up" delay={0.4}>
          <div className="mt-16 bg-gradient-to-r from-her-primary/20 via-pink-600/20 to-lime-500/20 border border-pink-500/30 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-her-secondary text-xs font-bold uppercase tracking-wider">
                <Trophy className="w-4 h-4" /> Start Your Own Story
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">Ready To Transform Your Health & Energy?</h3>
              <p className="text-slate-300 text-sm max-w-xl">
                Book a complimentary 3-day VIP pass to experience our female-only workout floor, steam sauna, and diet consultation.
              </p>
            </div>

            <button
              onClick={() => onOpenTrialModal()}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-her-primary via-pink-600 to-rose-500 hover:from-pink-600 hover:to-her-primaryDark text-white font-extrabold text-sm shadow-xl shadow-pink-500/30 flex items-center gap-2 shrink-0 transition-all"
            >
              <Sparkles className="w-4 h-4 text-her-secondary" />
              <span>Get Free 3-Day VIP Pass</span>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
