"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles, MapPin } from "lucide-react";
import { LOCATIONS_DATA } from "@/data/locationsData";

interface NavbarProps {
  onOpenTrialModal: (branchSlug?: string) => void;
}

export function Navbar({ onOpenTrialModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 flex justify-center pointer-events-none">
      {/* Floating Capsule Bar */}
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-md border border-rose-100/80 rounded-full px-4 sm:px-6 py-2.5 shadow-lg shadow-rose-900/5 pointer-events-auto flex items-center justify-between transition-all duration-300">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Her Fitness Logo"
              width={32}
              height={32}
              className="object-contain"
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.style.display = 'none';
              }}
            />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight font-sans text-slate-900">
            <span className="text-her-primary font-black">HER</span>
            <span className="text-slate-800 ml-1 font-semibold">FITNESS</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-medium text-slate-700">
          <Link href="#services" className="hover:text-her-primary transition-colors py-1">
            Services
          </Link>

          <Link href="#trainers" className="hover:text-her-primary transition-colors py-1">
            Trainers
          </Link>

          <Link href="#about" className="hover:text-her-primary transition-colors py-1">
            About
          </Link>

          <Link href="#results" className="hover:text-her-primary transition-colors py-1">
            Results
          </Link>

          <Link href="/blog" className="hover:text-her-primary transition-colors py-1">
            Journal
          </Link>

          {/* Locations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLocationsDropdownOpen(true)}
            onMouseLeave={() => setLocationsDropdownOpen(false)}
          >
            <Link
              href="/locations"
              className="flex items-center gap-1 hover:text-her-primary transition-colors py-1"
            >
              <span>Locations</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${locationsDropdownOpen ? "rotate-180 text-her-primary" : ""}`} />
            </Link>

            <AnimatePresence>
              {locationsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-white/95 backdrop-blur-xl border border-rose-100 rounded-2xl p-2 shadow-xl overflow-hidden grid grid-cols-1 gap-0.5 text-xs"
                >
                  <div className="px-3 py-1.5 text-[10px] font-bold text-her-primary uppercase tracking-wider border-b border-rose-50 flex items-center justify-between">
                    <span>Delhi NCR Studios</span>
                    <span className="text-her-secondary text-[10px] bg-emerald-50 px-2 py-0.5 rounded-full font-bold">8 Active</span>
                  </div>

                  {LOCATIONS_DATA.map((loc) => (
                    <Link
                      key={loc.id}
                      href={`/locations/${loc.slug}`}
                      className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-rose-50/70 transition-colors text-slate-700 hover:text-slate-900 group"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-her-primary group-hover:scale-110 transition-transform" />
                        <span className="font-semibold">{loc.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {loc.area.split(" ")[0]}
                      </span>
                    </Link>
                  ))}

                  <div className="pt-1 mt-1 border-t border-rose-50 text-center">
                    <Link
                      href="/locations"
                      className="block text-center py-1.5 text-[11px] text-her-primary font-bold hover:underline"
                    >
                      View All 8 Branch Profiles →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenTrialModal()}
            className="rounded-full bg-her-primary hover:bg-her-primaryHover text-white px-5 py-2 text-xs font-bold shadow-md shadow-her-primary/20 transition-all duration-300 flex items-center gap-1.5 hover:scale-105"
          >
            <span>Free Trial</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenTrialModal()}
            className="text-[11px] bg-her-primary text-white px-3.5 py-1.5 rounded-full font-bold shadow-sm"
          >
            Free Trial
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full bg-rose-50 text-slate-800 hover:bg-rose-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed top-20 left-4 right-4 bg-white/98 backdrop-blur-2xl border border-rose-100 rounded-3xl p-6 shadow-2xl text-slate-800 overflow-hidden pointer-events-auto"
          >
            <div className="space-y-3">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-slate-800 hover:text-her-primary py-1.5 border-b border-rose-50"
              >
                Home
              </Link>
              <Link
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-slate-800 hover:text-her-primary py-1.5 border-b border-rose-50"
              >
                Services
              </Link>
              <Link
                href="#trainers"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-slate-800 hover:text-her-primary py-1.5 border-b border-rose-50"
              >
                Trainers & Team
              </Link>
              <Link
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-slate-800 hover:text-her-primary py-1.5 border-b border-rose-50"
              >
                About Us
              </Link>
              <Link
                href="/locations"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-slate-800 hover:text-her-primary py-1.5 border-b border-rose-50"
              >
                All 8 Locations (Dwarka, Rajouri, etc.)
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-slate-800 hover:text-her-primary py-1.5 border-b border-rose-50"
              >
                Wellness Journal
              </Link>

              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTrialModal();
                  }}
                  className="w-full py-3 bg-her-primary text-white font-bold rounded-full shadow-md text-xs flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-white" /> Book Free Trial Pass
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
