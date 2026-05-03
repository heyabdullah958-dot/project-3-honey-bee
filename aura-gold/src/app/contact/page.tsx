"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-obsidian min-h-screen text-white-soft">
      <Navbar />
      
      <div className="max-w-6xl mx-auto pt-48 pb-24 px-8 grid grid-cols-1 md:grid-cols-2 gap-24">
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-gold-bright text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 font-sans">
            Connect
            </h2>
            <h1 className="text-5xl md:text-[clamp(2.5rem,5vw,5rem)] font-semibold tracking-tight mb-8 leading-[1.1] font-serif text-white-pure">
            Begin the <br /> Experience.
            </h1>
            <p className="text-lg text-white-muted font-light leading-relaxed max-w-sm mb-12 font-sans">
                Have a question about our harvest or wholesale opportunities? Reach out to our Australian headquarters.
            </p>

            <div className="space-y-10">
                <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-white-dim mb-3 font-sans">Email</h4>
                    <p className="text-gold-bright text-xl font-serif">concierge@auragold.com.au</p>
                </div>
                <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-white-dim mb-3 font-sans">Location</h4>
                    <p className="text-white-soft text-lg font-serif">Byron Bay, NSW <br /> Australia</p>
                </div>
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-surface p-8 md:p-12 rounded-[40px] border border-border-subtle shadow-2xl"
        >
            <form className="space-y-8 font-sans">
                <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest text-white-dim ml-1 font-bold">Full Name</label>
                    <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-charcoal border border-border-subtle rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-gold-mid/50 transition-colors text-white-soft placeholder:text-white-dim/30"
                    />
                </div>
                <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest text-white-dim ml-1 font-bold">Email Address</label>
                    <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-charcoal border border-border-subtle rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-gold-mid/50 transition-colors text-white-soft placeholder:text-white-dim/30"
                    />
                </div>
                <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest text-white-dim ml-1 font-bold">Message</label>
                    <textarea 
                        rows={4}
                        placeholder="How can we help?" 
                        className="w-full bg-charcoal border border-border-subtle rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-gold-mid/50 transition-colors resize-none text-white-soft placeholder:text-white-dim/30"
                    />
                </div>
                <button className="w-full py-5 bg-gradient-to-r from-gold-mid to-gold-dim text-obsidian font-bold uppercase tracking-[0.2em] text-[10px] rounded-2xl shadow-[0_10px_30px_rgba(196,154,44,0.2)] hover:scale-[1.02] transition-transform animate-gold-pulse">
                    Send Message
                </button>
            </form>
        </motion.div>
      </div>
    </main>
  );
}

