"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <main className="bg-obsidian min-h-screen text-white-soft">
      <Navbar />
      
      <div className="max-w-4xl mx-auto pt-48 pb-24 px-8">
        <motion.h2 
            {...fadeIn}
            className="text-gold-bright text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 font-sans"
        >
          Our Story
        </motion.h2>
        <motion.h1 
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="text-5xl md:text-[clamp(2.5rem,5vw,5rem)] font-semibold tracking-tight mb-12 leading-[1.1] font-serif text-white-pure"
        >
          The Genesis of <br /> Aura Gold.
        </motion.h1>
        
        <div className="space-y-12 text-lg text-white-muted font-light leading-relaxed font-sans">
          <motion.p {...fadeIn}>
            Born in the pristine landscapes of Australia, Aura Gold represents the intersection of ancient wisdom and modern bio-engineering. Our journey began with a simple observation: the most potent elements of nature are often the most fragile.
          </motion.p>
          <motion.p {...fadeIn}>
            We dedicated ourselves to perfecting the extraction and preservation of Australian Manuka honey. Unlike industrial processes that use heat and pressure, our cold-press mastery ensures that every enzyme, every bio-active molecule, remains exactly as nature intended.
          </motion.p>
          <motion.div 
            {...fadeIn}
            className="w-full rounded-3xl border border-border-subtle overflow-hidden relative"
          >
            <Image
                src="/origin-bg.png"
                alt="Australian Manuka honey bushland — the origin of Aura Gold"
                width={900}
                height={506}
                className="w-full h-auto object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
          </motion.div>
          <motion.p {...fadeIn}>
            Today, Aura Gold is more than just honey; it is a bio-active powerhouse. Tested for peak MGO strength and harvested from untouched bushland, it is the pinnacle of organic wellness.
          </motion.p>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white-pure/5 pt-12">
            <motion.div {...fadeIn}>
                <h4 className="text-gold-bright text-[10px] font-bold uppercase mb-4 tracking-widest font-sans">Purity</h4>
                <p className="text-sm text-white-dim font-sans leading-relaxed">Zero-heat processing preserves the delicate enzymatic profile of every batch.</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
                <h4 className="text-gold-bright text-[10px] font-bold uppercase mb-4 tracking-widest font-sans">Potency</h4>
                <p className="text-sm text-white-dim font-sans leading-relaxed">Certified MGO levels that set the standard for Australian Manuka excellence.</p>
            </motion.div>
        </div>
      </div>
    </main>
  );
}

