"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import { LOCATIONS_DATA } from "@/data/locationsData";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background Accent Blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-her-primary/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-her-secondary/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Summary */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-gradient-to-tr from-her-primary to-pink-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Her Fitness Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white">
                  <span className="text-her-primary">HER</span> FITNESS
                </span>
                <span className="block text-[10px] text-slate-400 tracking-widest uppercase font-semibold">
                  Delhi NCR's #1 Women-Only Gym Chain
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Empowering women through safe, judgment-free, high-performance fitness sanctuaries across 8 Delhi NCR branches. Featuring 100% female certified trainers, custom nutrition blueprints, and luxury steam spa facilities.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-her-secondary" />
                <span>100% Certified Female Staff</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl text-xs text-slate-300">
                <Heart className="w-4 h-4 text-her-primary" />
                <span>15,000+ Happy Women</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide border-l-2 border-her-primary pl-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-her-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-her-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Power Yoga & Pilates
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-her-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Zumba & Dance Cardio
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-her-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Kickboxing & HIIT
                </Link>
              </li>
              <li>
                <Link href="/#calculator" className="hover:text-her-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Ideal BMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-her-primary transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Women's Fitness Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* 8 Delhi NCR Branches */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide border-l-2 border-her-secondary pl-3">
              Our 8 Locations
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {LOCATIONS_DATA.map((loc) => (
                <li key={loc.id}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="hover:text-her-secondary transition-colors flex items-center gap-1.5 group"
                  >
                    <MapPin className="w-3 h-3 text-her-secondary group-hover:scale-110 transition-transform" />
                    <span>{loc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide border-l-2 border-pink-500 pl-3">
              Contact & Hours
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <a
                href="tel:+919811098111"
                className="flex items-center gap-2 hover:text-white transition-colors bg-slate-900 border border-slate-800 p-2.5 rounded-xl"
              >
                <Phone className="w-4 h-4 text-her-secondary" />
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase">Headlines Hotline</span>
                  <span className="text-white font-bold text-xs">+91 98110 98111</span>
                </div>
              </a>

              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-2.5 rounded-xl">
                <Mail className="w-4 h-4 text-her-primary" />
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase">General Inquiries</span>
                  <span className="text-white font-bold text-xs">info@herfitness.in</span>
                </div>
              </div>

              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-[11px] space-y-1">
                <div className="text-slate-300 font-semibold">Operating Hours:</div>
                <div className="text-slate-400">Mon - Sat: 7:00 AM - 12:30 PM, 5:00 PM - 9:00 PM</div>
                <div className="text-slate-400">Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Her Fitness Women-Only Chain. All Rights Reserved. Production-Ready for Vercel.</p>
          <div className="flex items-center gap-6">
            <Link href="/locations" className="hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
            <Link href="/#services" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/#services" className="hover:text-slate-300 transition-colors">
              Terms of Membership
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
