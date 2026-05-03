"use client";

import React from "react";
import { Info } from "lucide-react";

const strengths = [
  { mgo: "100+", label: "Daily Wellness", desc: "Gentle support for everyday vitality and clean energy." },
  { mgo: "514+", label: "Immune Support", desc: "Potent bio-activity for defense and gut health maintenance." },
  { mgo: "850+", label: "Therapeutic Use", desc: "High-strength antibacterial properties for recovery and repair." },
  { mgo: "1200+", label: "Intensive Healing", desc: "The pinnacle of medical-grade potency for focused therapeutic needs." },
];

export default function StrengthGuide() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {strengths.map((s) => (
        <div key={s.mgo} className="group relative">
          <div className="px-5 py-2.5 rounded-full bg-charcoal border border-border-subtle flex items-center gap-3 cursor-help group-hover:border-gold-mid transition-all duration-300 shadow-lg">
            <span className="text-gold-shimmer font-mono font-bold text-xs tracking-tighter">MGO {s.mgo}</span>
            <div className="w-4 h-4 rounded-full bg-white-pure/5 flex items-center justify-center">
                <Info size={10} className="text-white-dim group-hover:text-gold-bright transition-colors" />
            </div>
          </div>
          
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-56 p-5 bg-surface border border-border-subtle rounded-[24px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] translate-y-2 group-hover:translate-y-0">
            <h4 className="text-white-pure font-bold text-[10px] uppercase tracking-widest mb-2 font-sans">{s.label}</h4>
            <p className="text-xs text-white-muted font-sans leading-relaxed">{s.desc}</p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-surface border-r border-b border-border-subtle rotate-45 -translate-y-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

