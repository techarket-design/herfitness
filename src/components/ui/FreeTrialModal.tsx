"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Sparkles, Phone, ShieldCheck, MapPin } from "lucide-react";
import { LOCATIONS_DATA } from "@/data/locationsData";

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBranchSlug?: string;
}

export function FreeTrialModal({
  isOpen,
  onClose,
  defaultBranchSlug,
}: FreeTrialModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    branch: defaultBranchSlug || "dwarka",
    fitnessGoal: "Weight Loss & Toning",
    preferredSlot: "Morning (7 AM - 12:30 PM)",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl z-10 border border-pink-100"
          >
            {/* Header Gradient */}
            <div className="bg-gradient-to-r from-her-primary via-pink-600 to-rose-500 p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 rounded-full p-2 text-white/80 hover:text-white hover:bg-white/20 transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-her-secondaryLight bg-white/10 w-fit px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-her-secondary" />
                Exclusive Women-Only Pass
              </div>
              <h3 className="text-2xl font-bold text-white">Book Your Free 3-Day Pass</h3>
              <p className="text-pink-100 text-sm mt-1">
                Experience Delhi NCR's #1 Women-Only Premium Gym & Wellness Club.
              </p>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-6"
                >
                  <div className="mx-auto w-16 h-16 bg-her-secondaryLight text-her-secondary rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Pass Activated! 🎉</h4>
                  <p className="text-slate-600 text-sm mt-2 max-w-xs mx-auto">
                    Thank you <span className="font-semibold text-slate-900">{formData.name}</span>! Our female head trainer from{" "}
                    <span className="font-semibold text-her-primary capitalize">
                      {LOCATIONS_DATA.find((l) => l.slug === formData.branch)?.name || formData.branch}
                    </span>{" "}
                    will reach out on <span className="font-semibold text-slate-900">{formData.phone}</span> within 15 minutes to confirm your pass.
                  </p>

                  <div className="mt-6 p-4 bg-pink-50/60 rounded-2xl border border-pink-100 text-left text-xs space-y-2 text-slate-700">
                    <div className="flex items-center justify-between font-medium">
                      <span>Goal:</span> <span className="text-her-primary font-bold">{formData.fitnessGoal}</span>
                    </div>
                    <div className="flex items-center justify-between font-medium">
                      <span>Preferred Slot:</span> <span className="text-slate-900 font-bold">{formData.preferredSlot}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href="tel:+919811098111"
                      className="w-full inline-flex items-center justify-center gap-2 bg-her-secondary hover:bg-her-secondaryHover text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all text-sm"
                    >
                      <Phone className="w-4 h-4" /> Call Direct Hotline Now
                    </a>
                    <button
                      onClick={handleReset}
                      className="text-slate-500 hover:text-slate-800 text-xs font-semibold py-2"
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-her-primary focus:ring-2 focus:ring-her-primary/20 outline-none text-slate-900 placeholder:text-slate-400 text-sm transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-her-primary focus:ring-2 focus:ring-her-primary/20 outline-none text-slate-900 placeholder:text-slate-400 text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-her-primary focus:ring-2 focus:ring-her-primary/20 outline-none text-slate-900 placeholder:text-slate-400 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Select Nearest Delhi NCR Branch *
                    </label>
                    <div className="relative">
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-her-primary focus:ring-2 focus:ring-her-primary/20 outline-none text-slate-900 text-sm appearance-none bg-white font-medium transition-all"
                      >
                        {LOCATIONS_DATA.map((loc) => (
                          <option key={loc.id} value={loc.slug}>
                            {loc.name} ({loc.area})
                          </option>
                        ))}
                      </select>
                      <MapPin className="w-4 h-4 text-her-primary absolute right-4 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Primary Fitness Goal
                      </label>
                      <select
                        value={formData.fitnessGoal}
                        onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-her-primary focus:ring-2 focus:ring-her-primary/20 outline-none text-slate-900 text-sm appearance-none bg-white transition-all"
                      >
                        <option value="Weight Loss & Toning">Weight Loss & Toning</option>
                        <option value="PCOS / Thyroid Health">PCOS / Thyroid Health</option>
                        <option value="Post-Natal Recovery">Post-Natal Recovery</option>
                        <option value="Strength & Muscle Sculpt">Strength & Muscle Sculpt</option>
                        <option value="Bridal Transformation">Bridal Transformation</option>
                        <option value="Yoga & Pilates Flexibility">Yoga & Pilates Flexibility</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Preferred Workout Time
                      </label>
                      <select
                        value={formData.preferredSlot}
                        onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-her-primary focus:ring-2 focus:ring-her-primary/20 outline-none text-slate-900 text-sm appearance-none bg-white transition-all"
                      >
                        <option value="Morning (7 AM - 12:30 PM)">Morning (7 AM - 12:30 PM)</option>
                        <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-her-primary to-pink-600 hover:from-pink-600 hover:to-her-primaryDark text-white font-bold text-base shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all flex items-center justify-center gap-2 group"
                    >
                      <span>Claim Free 3-Day VIP Pass</span>
                      <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform text-her-secondaryLight" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                    <ShieldCheck className="w-4 h-4 text-her-secondary" />
                    <span>100% Safe, Female-Only Environment & Certified Trainers</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
