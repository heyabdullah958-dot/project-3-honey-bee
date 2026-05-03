"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Scene from "@/components/Scene";
import HoneyQuiz from "@/components/HoneyQuiz";
import MGOCounter from "@/components/MGOCounter";
import TrustBadgeStrip from "@/components/TrustBadgeStrip";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="relative bg-obsidian min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Scene />
      
      <TrustBadgeStrip />

      {/* Product Teaser Section - The Curated Collection */}
      <section className="relative z-20 py-32 px-8 bg-obsidian transition-colors duration-500 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
                <h2 className="text-gold-bright text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-10 font-sans">The 2026 Harvest</h2>
                <h3 className="text-5xl md:text-[clamp(3rem,5vw,5.5rem)] font-light tracking-tight mb-10 leading-[1.05] font-serif text-white-pure" style={{textWrap: 'balance'}}>
                    Bio-Active Resonance.
                </h3>
                <p className="text-lg md:text-xl text-white-muted font-light leading-relaxed max-w-md mb-16 font-sans">
                    A limited release of our signature MGO 850+ Manuka. Each jar is a testament to the precision of nature, harvested in silence and processed with reverence.
                </p>
                <a 
                    href="/products" 
                    className="inline-flex items-center gap-6 text-white-soft text-[10px] font-bold uppercase tracking-[0.3em] group font-sans border-b border-white-pure/10 pb-4 hover:border-gold-bright transition-all duration-500"
                >
                    View the Collection
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500 text-gold-bright" />
                </a>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[4/5] bg-charcoal rounded-[40px] border border-border-subtle flex items-center justify-center relative overflow-hidden group transition-colors duration-500"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent z-10 transition-colors duration-500" />
                {/* Product Showcase */}
                <div className="relative z-0 w-full h-full">
                    <img 
                      src="/hero-bg.jpg"
                      alt="Aura Gold Signature Manuka Honey"
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out opacity-70"
                    />
                </div>
                
                <div className="absolute bottom-16 left-16 z-20">
                    <span className="text-gold-bright text-[10px] font-bold uppercase tracking-[0.3em] font-sans mb-3 block">Aura Gold Signature</span>
                    <h4 className="text-3xl font-light tracking-tight text-white-pure font-serif">MGO 850+ <span className="text-xl text-white-muted ml-2">/ 500g</span></h4>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Science Section - The Wellness Journal Style */}
      <section className="relative z-20 py-40 bg-charcoal transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] aspect-square bg-gold-bright/5 rounded-full blur-[140px] -z-10" />
                    <MGOCounter value={850} label="Bio-Active Resonance" />
                </div>
                
                <div className="space-y-16 order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-gold-bright text-[10px] font-bold uppercase tracking-[0.5em] mb-6 font-sans">Empirical Proof</h2>
                        <h3 className="text-4xl md:text-6xl font-light tracking-tight font-serif text-white-pure mb-8">The Molecular Standard.</h3>
                        <p className="text-white-muted font-light leading-relaxed font-sans text-lg md:text-xl">
                            Methylglyoxal (MGO) is the sovereign compound of Manuka. At Aura Gold, we measure potency not just in numbers, but in the biological resonance of every jar.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-border-subtle pt-12 transition-colors duration-500">
                        <div>
                            <h4 className="text-white-soft font-light mb-4 font-serif text-2xl italic">Provenance</h4>
                            <p className="text-sm text-white-muted font-sans leading-relaxed">
                                Sourced from the ancient Leptospermum groves of the Australian East Coast. Untouched by industry, pure by design.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white-soft font-light mb-4 font-serif text-2xl italic">Integrity</h4>
                            <p className="text-sm text-white-muted font-sans leading-relaxed">
                                Every batch undergoes triple-redundant laboratory testing to ensure MGO levels are absolute and uncontested.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Quiz Section - Find Your Aura */}
      <section className="relative z-20 py-32 bg-obsidian transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-8 text-center mb-20">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gold-bright text-[10px] font-bold uppercase tracking-[0.5em] mb-6 font-sans"
            >
                Selection Protocol
            </motion.h2>
            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-light tracking-tight font-serif text-white-pure"
            >
                Find Your Aura.
            </motion.h3>
        </div>
        <HoneyQuiz />
      </section>

      {/* Email Capture Section - The Inner Circle */}
      <section className="relative z-20 py-40 bg-obsidian transition-colors duration-500 overflow-hidden">
        <div className="max-w-6xl mx-auto px-8">
            <div className="bg-charcoal border border-border-subtle rounded-[80px] p-16 md:p-32 relative overflow-hidden text-center transition-colors duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(232,184,75,0.03)_0%,transparent_70%)]" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <h2 className="text-gold-bright text-[10px] font-bold uppercase tracking-[0.5em] mb-8 font-sans">The Inner Circle</h2>
                    <h3 className="text-5xl md:text-7xl font-light tracking-tight font-serif text-white-pure mb-10">Join the Collective.</h3>
                    <p className="text-white-muted font-light leading-relaxed font-sans text-lg md:text-xl mb-16 max-w-lg mx-auto">
                        Gain entry to our rarest private harvests and pioneering wellness research. Your journey into bio-active mastery begins here.
                    </p>
                    
                    <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address" 
                            required
                            disabled={status === "loading" || status === "success"}
                            className="flex-1 bg-obsidian border border-border-subtle rounded-full px-10 py-6 text-sm focus:outline-none focus:border-gold-bright/30 transition-all text-white-soft placeholder:text-white-dim/40 font-sans disabled:opacity-50"
                        />
                        <button 
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            className="px-12 py-6 bg-white-pure text-obsidian text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-gold-bright transition-all shadow-2xl font-sans whitespace-nowrap disabled:opacity-50"
                        >
                            {status === "loading" ? "Joining..." : status === "success" ? "Accepted ✓" : "Request Access"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
      </section>

      
      {/* Footer / Extra Content */}
      <footer className="relative z-20 py-24 px-8 md:px-12 border-t border-white-pure/5 bg-obsidian">
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-12"
        >
          <div className="flex flex-col gap-8">
            <span className="text-2xl font-semibold tracking-tight font-serif text-white-pure">
              AURA <span className="text-gold-bright">GOLD</span>
            </span>
            <p className="max-w-xs text-white-muted text-sm leading-relaxed font-sans">
              Crafting the future of organic wellness through Australian Manuka mastery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 font-sans">
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white-soft">Explore</h4>
              <ul className="text-base md:text-sm text-white-muted flex flex-col gap-4 md:gap-2">
                <li><a href="/about" className="hover:text-gold-bright transition-colors py-2 block md:inline">Our Story</a></li>
                <li><a href="#" className="hover:text-gold-bright transition-colors py-2 block md:inline">The Lab</a></li>
                <li><a href="#" className="hover:text-gold-bright transition-colors py-2 block md:inline">Sustainability</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white-soft">Support</h4>
              <ul className="text-base md:text-sm text-white-muted flex flex-col gap-4 md:gap-2">
                <li><a href="/contact" className="hover:text-gold-bright transition-colors py-2 block md:inline">Contact</a></li>
                <li><a href="#" className="hover:text-gold-bright transition-colors py-2 block md:inline">Shipping</a></li>
                <li><a href="/faq" className="hover:text-gold-bright transition-colors py-2 block md:inline">FAQ</a></li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white-pure/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 font-sans"
        >
          <span className="text-[10px] uppercase tracking-widest text-white-dim text-center md:text-left">© 2026 Aura Gold Australia. All Rights Reserved.</span>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white-dim">
            <a href="#" className="hover:text-white-soft transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white-soft transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}

