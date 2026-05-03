"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Zap, ArrowRight } from "lucide-react";
import StrengthGuide from "@/components/StrengthGuide";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import SubscribeToggle from "@/components/SubscribeToggle";
import ProductSkeleton from "@/components/ProductSkeleton";

export default function ProductPage() {
  const [isLoading, setIsLoading] = useState(false); // In a real app, this would be based on image loading or fetch

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  if (isLoading) {
    return (
        <main className="bg-obsidian min-h-screen text-white-soft">
            <Navbar />
            <div className="pt-48 pb-24 px-8 max-w-7xl mx-auto">
                <ProductSkeleton />
            </div>
        </main>
    );
  }

  return (
    <main className="bg-obsidian min-h-screen text-white-soft">
      <Navbar />
      
      {/* Product Hero Section */}
      <section className="pt-48 pb-24 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#E8B84B"
            glarePosition="all"
            glareBorderRadius="40px"
            className="aspect-square bg-surface rounded-[40px] border border-border-subtle relative overflow-hidden group shadow-2xl"
          >
            <Image
              src="/product-hero.png"
              alt="Aura Gold MGO 850+ Premium Manuka Honey 500g jar"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            {/* Fallback overlay if image doesn't exist */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-bright/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="absolute top-8 left-8">
                <span className="px-5 py-2.5 bg-gold-bright text-obsidian text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-[0_0_25px_rgba(232,184,75,0.4)] font-sans">
                    Limited Harvest
                </span>
            </div>
          </Tilt>
        </motion.div>

        <div>
            <motion.h2 {...fadeIn} className="text-gold-bright text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 font-sans">
                The Signature Collection
            </motion.h2>
            <motion.h1 {...fadeIn} transition={{ delay: 0.2 }} className="text-5xl md:text-[clamp(2.5rem,5vw,5rem)] font-semibold tracking-tight mb-8 leading-[1.1] font-serif text-white-pure">
                Aura Gold <br /> MGO 850+
            </motion.h1>
            <motion.p {...fadeIn} transition={{ delay: 0.3 }} className="text-xl text-white-muted font-light leading-relaxed mb-12 max-w-md font-sans">
                Ultra-high potency Australian Manuka. Harvested from the rarest Leptospermum polygalifolium groves.
            </motion.p>

            <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="space-y-6 mb-12">
                <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-charcoal border border-border-subtle flex items-center justify-center group-hover:border-gold-mid/50 transition-colors shadow-lg">
                        <ShieldCheck className="text-gold-bright w-7 h-7" />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white-soft font-sans">Certified MGO 850+</h4>
                        <p className="text-xs text-white-dim font-sans">Lab-tested for peak bio-active strength.</p>
                    </div>
                </div>
                <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-charcoal border border-border-subtle flex items-center justify-center group-hover:border-gold-mid/50 transition-colors shadow-lg">
                        <Droplets className="text-gold-bright w-7 h-7" />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-white-soft font-sans">Cold-Pressed Mastery</h4>
                        <p className="text-xs text-white-dim font-sans">Preserving every vital enzyme and nutrient.</p>
                    </div>
                </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.5 }} className="mb-12">
              <SubscribeToggle
                oneTimePrice="$185.00"
                subscribePrice="$157.25"
                discount="15%"
              />
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.6 }}>
                <a 
                    href={`https://wa.me/61400000000?text=${encodeURIComponent("Hi Aura Gold, I would like to order the Aura Gold MGO 850+ Manuka Honey.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-12 py-5 bg-gold-bright text-obsidian text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-[0_20px_40px_rgba(196,154,44,0.2)] hover:scale-105 transition-all duration-300 animate-gold-pulse font-sans text-center inline-block"
                >
                    Order via WhatsApp
                </a>
            </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-8 border-t border-white-pure/5 bg-charcoal">
        <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-20">
                <h2 className="text-gold-bright text-[10px] font-bold uppercase tracking-[0.4em] mb-4 font-sans">Precision Wellness</h2>
                <h3 className="text-4xl md:text-5xl font-semibold tracking-tight font-serif text-white-pure">Engineered by Nature.</h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Immune Support", desc: "High MGO concentration provides potent antibacterial support.", icon: Zap },
                    { title: "Digestive Health", desc: "Natural enzymes assist in maintaining a balanced microbiome.", icon: Droplets },
                    { title: "Skin Vitality", desc: "Bio-active nutrients promote repair and deep hydration.", icon: ShieldCheck }
                ].map((benefit, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="p-10 rounded-[40px] bg-obsidian border border-white-pure/5 hover:border-gold-mid/30 transition-all duration-500 group"
                    >
                        <benefit.icon className="text-gold-bright w-8 h-8 mb-8 group-hover:scale-110 transition-transform duration-500" />
                        <h4 className="text-2xl font-semibold mb-4 font-serif text-white-soft">{benefit.title}</h4>
                        <p className="text-white-dim text-sm leading-relaxed font-sans">{benefit.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Strength Guide Section */}
      <section className="py-24 px-8 border-t border-white-pure/5 bg-obsidian">
        <div className="max-w-7xl mx-auto text-center">
            <motion.h2 {...fadeIn} className="text-gold-bright text-[10px] font-bold uppercase tracking-[0.4em] mb-12 font-sans">MGO Strength Guide</motion.h2>
            <StrengthGuide />
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-24 px-8 max-w-4xl mx-auto text-center">
         <motion.div {...fadeIn}>
            <h2 className="text-gold-bright text-[10px] font-bold uppercase tracking-[0.4em] mb-8 font-sans">Provenance</h2>
            <p className="text-2xl md:text-4xl font-light text-white-muted leading-relaxed italic font-serif">
                "Aura Gold is not just honey; it is a bio-chemical masterpiece. The purity levels we see in the 850+ MGO range are among the highest ever recorded in Australian Manuka."
            </p>
            <div className="mt-12 flex items-center justify-center gap-6">
                <div className="w-16 h-[1px] bg-white-pure/10" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white-dim font-sans font-bold">Chief Lab Specialist, Aura Lab</span>
                <div className="w-16 h-[1px] bg-white-pure/10" />
            </div>
         </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-gold-mid/10 to-transparent border border-white-pure/10 rounded-[60px] p-12 md:p-24 text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-obsidian/40 backdrop-blur-3xl -z-10" />
            <motion.div {...fadeIn}>
                <h2 className="text-5xl md:text-[clamp(2.5rem,5vw,5rem)] font-semibold tracking-tight mb-8 font-serif text-white-pure">Secure Your <br /> Aura Gold.</h2>
                <p className="text-white-muted mb-12 max-w-md mx-auto font-sans text-lg">Our harvests are small, ensuring peak quality. Join the elite circle of Aura Gold owners.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 font-sans">
                    <button className="w-full sm:w-auto px-12 py-5 bg-white-pure text-obsidian text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-transform shadow-xl">
                        Inquire for Wholesale
                    </button>
                    <button className="w-full sm:w-auto px-12 py-5 border border-white-pure/20 text-white-soft text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white-pure/5 transition-colors group">
                        View Lab Certs <ArrowRight className="inline-block ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </motion.div>
        </div>
      </section>
    </main>
  );
}

