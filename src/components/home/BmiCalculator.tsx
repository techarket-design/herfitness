"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Sparkles, Scale, Activity, ArrowRight, HeartPulse, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/MotionWrapper";

interface BmiCalculatorProps {
  onOpenTrialModal: (branchSlug?: string) => void;
}

export function BmiCalculator({ onOpenTrialModal }: BmiCalculatorProps) {
  const [weight, setWeight] = useState<number>(62);
  const [height, setHeight] = useState<number>(165);
  const [age, setAge] = useState<number>(28);
  const [activity, setActivity] = useState<string>("moderate");

  // Calculations
  const heightInMeters = height / 100;
  const bmi = parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(1));

  let category = "Normal Weight";
  let categoryColor = "text-her-secondary";
  let recommendation = "Maintain lean muscle tone with Reformer Pilates & Power Yoga 3x weekly.";

  if (bmi < 18.5) {
    category = "Underweight";
    categoryColor = "text-amber-400";
    recommendation = "Focus on muscle building with Strength & Weight Training + High-Protein Diet Blueprint.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Ideal / Healthy Weight";
    categoryColor = "text-her-secondary";
    recommendation = "Perfect shape! Enhance cardiovascular stamina with Zumba & tone core with Pilates.";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    categoryColor = "text-pink-400";
    recommendation = "Target fat incinerating Kickboxing HIIT + personalized Indian diet chart for 3-5 kg loss/month.";
  } else {
    category = "Obesity / High Fat Risk";
    categoryColor = "text-red-400";
    recommendation = "PCOS/Thyroid specialized metabolism program + low-impact cardio & personalized nutrition coaching.";
  }

  // BMR & TDEE calculation (Mifflin-St Jeor formula for females)
  const bmr = Math.round(10 * weight + 6.25 * height - 5 * age - 161);
  let multiplier = 1.375;
  if (activity === "light") multiplier = 1.2;
  if (activity === "moderate") multiplier = 1.4;
  if (activity === "active") multiplier = 1.6;

  const tdee = Math.round(bmr * multiplier);
  const targetCaloriesForFatLoss = Math.max(1200, Math.round(tdee - 450));

  return (
    <section id="calculator" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-her-primary/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn direction="up">
            <span className="text-xs font-bold text-her-secondary bg-her-secondary/10 border border-her-secondary/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Smart Fitness Tool
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white">
              Ideal Women's <span className="text-transparent bg-clip-text bg-gradient-to-r from-her-primary to-pink-400">BMI & Calorie</span> Calculator
            </h2>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              Calculate your precise Body Mass Index (BMI), Daily Energy Expenditure (TDEE), and get tailored workout recommendations in seconds.
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Input Controls */}
          <div className="md:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Calculator className="w-5 h-5 text-her-primary" />
              <span>Enter Your Measurements</span>
            </h3>

            {/* Height Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-slate-400">Height (cm):</span>
                <span className="text-her-primary font-bold text-sm">{height} cm ({Math.floor(height/30.48)}' {Math.round((height%30.48)/2.54)}")</span>
              </div>
              <input
                type="range"
                min="135"
                max="200"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-her-primary"
              />
            </div>

            {/* Weight Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-slate-400">Weight (kg):</span>
                <span className="text-her-primary font-bold text-sm">{weight} kg</span>
              </div>
              <input
                type="range"
                min="35"
                max="130"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-her-primary"
              />
            </div>

            {/* Age Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-slate-400">Age (years):</span>
                <span className="text-her-primary font-bold text-sm">{age} yrs</span>
              </div>
              <input
                type="range"
                min="16"
                max="75"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-her-primary"
              />
            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2">
                Current Activity Level:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: "light", label: "Sedentary / Light" },
                  { id: "moderate", label: "Moderately Active" },
                  { id: "active", label: "Highly Active" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActivity(item.id)}
                    className={`p-2.5 rounded-xl border text-center font-medium transition-all ${
                      activity === item.id
                        ? "bg-her-primary/20 border-her-primary text-white font-bold"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="md:col-span-6 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-bold text-her-secondary uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <HeartPulse className="w-4 h-4 text-her-secondary" />
                <span>Your Personal Analysis</span>
              </div>

              {/* BMI Gauge Score */}
              <div className="mt-4 p-5 bg-slate-950 rounded-2xl border border-slate-800 text-center">
                <span className="text-slate-400 text-xs uppercase font-semibold">Body Mass Index Score</span>
                <div className="text-4xl sm:text-5xl font-black text-white mt-1">
                  {bmi}
                </div>
                <div className={`mt-2 text-xs font-bold ${categoryColor} uppercase tracking-wider`}>
                  ● {category}
                </div>
              </div>

              {/* Daily Calories breakdown */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Daily Maintenance (TDEE)</span>
                  <span className="text-white font-bold text-base">{tdee} kcal</span>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-her-secondary block text-[11px] font-bold">Fat Loss Target</span>
                  <span className="text-her-secondary font-bold text-base">{targetCaloriesForFatLoss} kcal</span>
                </div>
              </div>

              {/* Recommendation */}
              <div className="mt-4 p-4 bg-pink-950/30 rounded-2xl border border-pink-500/20 text-xs">
                <span className="font-bold text-pink-300 block mb-1">Recommended Workout Protocol:</span>
                <p className="text-slate-300 leading-relaxed">{recommendation}</p>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => onOpenTrialModal()}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-her-primary to-pink-600 hover:from-pink-600 hover:to-her-primaryDark text-white font-bold text-xs shadow-lg shadow-pink-500/25 flex items-center justify-center gap-2 transition-all"
            >
              <Sparkles className="w-4 h-4 text-her-secondary" />
              <span>Claim Free 3-Day Pass With This Plan</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
