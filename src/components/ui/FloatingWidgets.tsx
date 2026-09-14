"use client";

import React from "react";
import { MessageSquare, Phone } from "lucide-react";

interface FloatingWidgetsProps {
  onOpenTrialModal: () => void;
}

export function FloatingWidgets({ onOpenTrialModal }: FloatingWidgetsProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Rose Chat Action Button */}
      <button
        onClick={onOpenTrialModal}
        className="w-12 h-12 rounded-full bg-her-primary hover:bg-her-primaryHover text-white shadow-xl shadow-her-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Open Trial Pass Form"
      >
        <MessageSquare className="w-5 h-5 fill-white" />
      </button>

      {/* Bright Green WhatsApp Button */}
      <a
        href="https://wa.me/919811098111?text=Hi%20Her%20Fitness!%20I%20want%20to%20book%20a%20Free%20Trial%20Pass."
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp Helpline"
      >
        <Phone className="w-5 h-5 fill-white" />
      </a>
    </div>
  );
}
