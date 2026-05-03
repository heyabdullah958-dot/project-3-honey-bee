"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Leaf, Zap, Microscope } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "MGO Certified" },
  { icon: Award, label: "Premium Grade" },
  { icon: Leaf, label: "100% Organic" },
  { icon: Zap, label: "Cold Pressed" },
  { icon: Microscope, label: "Lab Tested" },
];

export default function TrustBadgeStrip() {
  return (
    <div className="w-full py-12 border-y border-white-pure/5 bg-charcoal/30 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-white-pure/5 border border-white-pure/10 flex items-center justify-center group-hover:border-gold-mid/50 transition-colors">
                <badge.icon className="text-gold-bright w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white-muted group-hover:text-white-soft transition-colors font-sans">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

