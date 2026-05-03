"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, useSpring, MotionValue } from "framer-motion";

const Scene = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-obsidian transition-colors duration-500">
      {/* Sticky Hero Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        
        {/* Static Hero Image with Subtle Parallax */}
        <motion.div 
          style={{ 
            scale: useTransform(smoothProgress, [0, 1], [1.08, 1]),
            opacity: useTransform(smoothProgress, [0, 0.85, 1], [1, 1, 0])
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="/hero-bg.jpg" 
            alt="Aura Gold Premium Manuka Honey" 
            className="w-full h-full object-cover opacity-85"
          />
        </motion.div>

        {/* Text Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-obsidian/70 pointer-events-none transition-colors duration-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--obsidian-rgb), 0.5)_100%)] pointer-events-none transition-colors duration-500" />

        {/* Text Overlays */}
        <div className="relative z-10 w-full h-full pointer-events-none">
          <Section
            progress={smoothProgress}
            range={[0, 0.15]}
            title="Aura Gold Signature"
            subtitle="The Pinnacle of Bio-Active Mastery."
            description="Rare Australian Manuka, cold-engineered for those who demand the absolute pinnacle of wellness."
            align="center"
          />

          {/* Scroll Indicator */}
          <motion.div
            style={{ opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]) }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-white-dim font-sans font-semibold">Scroll to Discover</span>
            <div className="w-[1px] h-20 bg-gradient-to-b from-gold-bright/80 to-transparent" />
          </motion.div>

          <Section
            progress={smoothProgress}
            range={[0.2, 0.4]}
            title="Molecular Purity"
            subtitle="Purity in Every Molecule."
            description="Our zero-heat extraction process preserves the delicate enzymatic profile of every batch."
            align="left"
          />
          <Section
            progress={smoothProgress}
            range={[0.45, 0.65]}
            title="Scientific Excellence"
            subtitle="Certified Bio-Active Potency."
            description="Third-party lab tested to guarantee world-class MGO levels and absolute authenticity."
            align="right"
          />
          <Section
            progress={smoothProgress}
            range={[0.7, 0.85]}
            title="Australian Origin"
            subtitle="Pristine Provenance."
            description="Harvested from the untouched bushlands of Australia, where the Leptospermum blooms in isolation."
            align="left"
          />
          <Section
            progress={smoothProgress}
            range={[0.9, 1]}
            title="Experience the Rare"
            subtitle="Liquid Gold, Perfected."
            description="Aura Gold. Designed for longevity, crafted for luxury. Your daily ritual of transcendence."
            align="center"
            isLast
          />
        </div>
      </div>
    </div>
  );
};

interface SectionProps {
  progress: MotionValue<number>;
  range: [number, number];
  title: string;
  subtitle: string;
  description: string;
  align?: "left" | "right" | "center";
  isLast?: boolean;
}

const Section = ({ progress, range, title, subtitle, description, align = "left", isLast = false }: SectionProps) => {
  const opacity = useTransform(progress, [range[0] - 0.05, range[0], range[1], range[1] + 0.05], [0, 1, 1, 0]);
  const y = useTransform(progress, [range[0] - 0.05, range[0], range[1], range[1] + 0.05], [30, 0, 0, -30]);

  const alignClasses = {
    left: "items-start text-left px-8 md:pl-32",
    right: "items-end text-right px-8 md:pr-32",
    center: "items-center text-center px-8",
  };

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute inset-0 flex flex-col justify-center ${alignClasses[align]} max-w-7xl mx-auto`}
    >
      <div className="max-w-2xl">
        <motion.h2 className="text-gold-bright text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-8 drop-shadow-[0_0_15px_rgba(232,184,75,0.2)] font-sans">
          {title}
        </motion.h2>
        <motion.h1 className="text-4xl md:text-[clamp(3rem,6vw,6.5rem)] font-light text-white-pure tracking-tight mb-8 leading-[1.05] font-serif">
          {subtitle}
        </motion.h1>
        <motion.p className="text-base md:text-xl text-white-muted leading-relaxed font-light font-sans max-w-lg mx-auto">
          {description}
        </motion.p>

        {isLast && (
           <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-14 px-12 py-5 bg-white-pure text-obsidian text-[10px] font-bold uppercase tracking-[0.3em] rounded-full pointer-events-auto shadow-2xl transition-all duration-500 font-sans border border-transparent hover:border-gold-bright/30"
           >
            Acquire the Collection
           </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default Scene;
