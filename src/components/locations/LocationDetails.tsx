"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Location } from "@/lib/types";
import { MapPin, Phone, Mail, Clock, CheckCircle, Navigation, Sparkles, HelpCircle, ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/MotionWrapper";

interface LocationDetailsProps {
  location: Location;
  onOpenTrialModal: (branchSlug?: string) => void;
}

export function LocationDetails({ location, onOpenTrialModal }: LocationDetailsProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: `Is ${location.name} strictly 100% women-only?`,
      a: `Yes! ${location.name} is a 100% female-exclusive sanctuary. All staff members, personal trainers, floor managers, and members are women. We utilize biometric female security access control at the main entrance.`,
    },
    {
      q: `What classes are offered at the ${location.area} branch?`,
      a: `Our ${location.area} branch offers Power Yoga & Reformer Pilates, Zumba Dance Cardio, Kickboxing HIIT, Women's Strength Weight Training, and 1-on-1 Diet & PCOS Counseling.`,
    },
    {
      q: `What are the operating hours for ${location.name}?`,
      a: `We are open Monday to Saturday from ${location.hours.weekdays}. We are ${location.hours.weekends} on Sundays.`,
    },
    {
      q: `Can I claim a free trial pass specifically for ${location.name}?`,
      a: `Absolutely! Simply click "Book Free Pass" on this page, and our female head trainer from ${location.area} will confirm your 3-day VIP access pass via phone call or WhatsApp.`,
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-10">
            {/* Overview */}
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-6 shadow-xl">
              <h2 className="text-2xl font-black text-white border-b border-slate-800 pb-4">
                Branch Overview & Amenities
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-her-primary font-bold">
                    <Navigation className="w-4 h-4" /> Address & Landmark
                  </div>
                  <p className="text-slate-200 leading-relaxed font-medium">{location.address}</p>
                  <p className="text-pink-300 text-[11px]">Landmark: {location.landmark}</p>
                </div>

                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-her-secondary font-bold">
                    <Clock className="w-4 h-4" /> Timings & Contact
                  </div>
                  <p className="text-slate-200">Mon-Sat: {location.hours.weekdays}</p>
                  <p className="text-slate-200">Sunday: {location.hours.weekends}</p>
                  <p className="text-her-primary font-bold text-xs pt-1">Phone: {location.phone}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Studio Facilities:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {location.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-200 flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-her-secondary shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Signature Programs at {location.area}:
                </h3>
                <div className="space-y-2">
                  {location.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-pink-950/20 rounded-xl border border-pink-500/20 text-xs text-pink-200 flex items-center gap-2 font-medium"
                    >
                      <Sparkles className="w-4 h-4 text-her-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Local FAQs */}
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-6 shadow-xl">
              <h2 className="text-2xl font-black text-white flex items-center gap-2 border-b border-slate-800 pb-4">
                <HelpCircle className="w-6 h-6 text-her-secondary" />
                <span>Frequently Asked Questions ({location.area})</span>
              </h2>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/60"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-4 text-left font-bold text-sm text-slate-200 hover:text-white flex items-center justify-between gap-4"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180 text-her-primary" : "text-slate-500"}`} />
                      </button>
                      {isOpen && (
                        <div className="p-4 pt-0 text-xs text-slate-400 leading-relaxed border-t border-slate-800/40">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar Map & Trial Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Embedded Google Map */}
            <div className="bg-slate-950 p-4 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-her-primary" />
                <span>Google Maps Location ({location.area})</span>
              </h3>
              <div className="h-72 rounded-2xl overflow-hidden border border-slate-800">
                <iframe
                  src={location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  title={`Google Map for ${location.name}`}
                />
              </div>
            </div>

            {/* Direct Booking Card */}
            <div className="bg-gradient-to-br from-pink-950/60 via-slate-950 to-slate-950 p-8 rounded-3xl border border-pink-500/30 shadow-2xl text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-her-primary/20 text-her-primary rounded-full flex items-center justify-center border border-pink-500/30">
                <Sparkles className="w-6 h-6 text-her-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white">Visit {location.name} Today</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Book your free 3-day trial pass specifically for our {location.area} branch and get a complimentary 1-on-1 diet consultation!
              </p>
              <button
                onClick={() => onOpenTrialModal(location.slug)}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-her-primary to-pink-600 hover:from-pink-600 hover:to-her-primaryDark text-white font-bold text-sm shadow-xl shadow-pink-500/30 flex items-center justify-center gap-2 transition-all"
              >
                <span>Activate Free Trial Pass</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
