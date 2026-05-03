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
    <main className="relative bg-obsidian min-h-screen">
      <Navbar />
      <Scene />
      
      <TrustBadgeStrip />

      {/* Product Teaser Section */}
      <section className="relative z-20 py-24 px-8 bg-obsidian border-t border-white-pure/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-gold-bright text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 font-sans">The Collection</h2>
                <h3 className="text-5xl md:text-[clamp(2.5rem,5vw,5rem)] font-semibold tracking-tight mb-8 leading-[1.1] font-serif text-white-pure">
                    Bio-Active <br /> Mastery.
                </h3>
                <p className="text-lg text-white-muted font-light leading-relaxed max-w-md mb-12 font-sans">
                    Discover our signature MGO 850+ Manuka. A limited harvest of pure Australian liquid gold, re-engineered for those who demand the pinnacle of wellness.
                </p>
                <a 
                    href="/products" 
                    className="inline-flex items-center gap-4 text-white-soft text-xs font-bold uppercase tracking-widest group font-sans"
                >
                    Explore the Product
                    <div className="w-12 h-12 rounded-full border border-white-pure/20 flex items-center justify-center group-hover:border-gold-bright group-hover:bg-gold-bright group-hover:text-obsidian transition-all duration-300">
                        <ArrowRight className="w-5 h-5" />
                    </div>
                </a>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="aspect-[4/5] bg-surface rounded-3xl border border-border-subtle flex items-center justify-center relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent z-10" />
                <span className="text-[10px] uppercase tracking-widest text-white-dim z-20 font-sans">[Product Reveal Animation]</span>
                <div className="absolute bottom-12 left-12 z-20">
                    <span className="text-gold-bright text-[10px] font-bold uppercase tracking-widest font-sans">Aura Gold Signature</span>
                    <h4 className="text-2xl font-bold tracking-tight text-white-pure font-serif">MGO 850+ / 500g</h4>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Science Section */}
      <section className="relative z-20 py-32 bg-obsidian border-t border-white-pure/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-gold-bright/5 rounded-full blur-[120px] -z-10" />
                    <MGOCounter value={850} label="Bio-Active Potency (MGO)" />
                </div>
                
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-gold-bright text-[10px] font-bold uppercase tracking-[0.4em] mb-4 font-sans">The Science</h2>
                        <h3 className="text-4xl md:text-5xl font-semibold tracking-tight font-serif text-white-pure mb-6">Understanding MGO.</h3>
                        <p className="text-white-muted font-light leading-relaxed font-sans text-lg">
                            Methylglyoxal (MGO) is the compound responsible for the unique antibacterial properties of Manuka honey. The higher the MGO, the greater the bio-active potency.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-white-soft font-bold mb-2 font-serif text-xl">Why Australian?</h4>
                            <p className="text-sm text-white-dim font-sans leading-relaxed">
                                Our bees forage on Leptospermum polygalifolium, native to Australia, yielding some of the world's highest MGO concentrations.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white-soft font-bold mb-2 font-serif text-xl">Rigorous Testing</h4>
                            <p className="text-sm text-white-dim font-sans leading-relaxed">
                                Every batch is third-party lab tested in Australia to guarantee MGO levels, purity, and authenticity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="relative z-20 py-24 bg-charcoal border-t border-white-pure/5">
        <div className="max-w-7xl mx-auto px-8 text-center mb-12">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gold-bright text-[10px] font-bold uppercase tracking-[0.4em] mb-4 font-sans"
            >
                Personalized Selection
            </motion.h2>
            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-semibold tracking-tight font-serif text-white-pure"
            >
                Find Your Aura.
            </motion.h3>
        </div>
        <HoneyQuiz />
      </section>

      {/* Instagram Section */}
      <section className="relative z-20 py-32 bg-obsidian border-t border-white-pure/5">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
                <h2 className="text-gold-bright text-[10px] font-bold uppercase tracking-[0.4em] mb-4 font-sans">#AuraGold Community</h2>
                <h3 className="text-4xl md:text-5xl font-semibold tracking-tight font-serif text-white-pure">Living the Experience.</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="aspect-square bg-surface border border-border-subtle rounded-3xl flex items-center justify-center relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gold-bright/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-[10px] uppercase tracking-widest text-white-dim z-10 font-sans">[Social Image {i}]</span>
                    </motion.div>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                <a 
                    href="#" 
                    className="inline-flex items-center gap-3 text-gold-bright text-[10px] font-bold uppercase tracking-widest hover:text-white-pure transition-colors font-sans"
                >
                    Follow @auragoldhoney <ArrowRight size={14} />
                </a>
            </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="relative z-20 py-32 bg-obsidian border-t border-white-pure/5 overflow-hidden">
        <div className="max-w-5xl mx-auto px-8">
            <div className="bg-surface border border-border-subtle rounded-[60px] p-12 md:p-24 relative overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(232,184,75,0.05)_0%,transparent_70%)]" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <h2 className="text-gold-bright text-[10px] font-bold uppercase tracking-[0.4em] mb-6 font-sans">Newsletter</h2>
                    <h3 className="text-4xl md:text-6xl font-semibold tracking-tight font-serif text-white-pure mb-8">Join the Hive.</h3>
                    <p className="text-white-muted font-light leading-relaxed font-sans text-lg mb-12 max-w-md mx-auto">
                        Receive exclusive access to our rarest harvests and bio-active wellness research. 10% off your first order.
                    </p>
                    
                    <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address" 
                            required
                            disabled={status === "loading" || status === "success"}
                            className="flex-1 bg-charcoal border border-border-subtle rounded-full px-8 py-5 text-sm focus:outline-none focus:border-gold-bright/50 transition-colors text-white-soft placeholder:text-white-dim/30 font-sans disabled:opacity-50"
                        />
                        <button 
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            className="px-10 py-5 bg-white-pure text-obsidian text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-transform shadow-xl font-sans whitespace-nowrap disabled:opacity-50"
                        >
                            {status === "loading" ? "Joining..." : status === "success" ? "Joined ✓" : "Subscribe"}
                        </button>
                    </form>

                    {status === "success" && (
                        <p className="mt-4 text-success text-sm font-sans">
                            Welcome to the Hive! Check your inbox for 10% off.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="mt-4 text-error text-sm font-sans">
                            Something went wrong. Please try again.
                        </p>
                    )}
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

