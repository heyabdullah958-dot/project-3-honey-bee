"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function FAQPage() {
  const faqs = [
    {
      q: "What makes Australian Manuka different?",
      a: "Australian Manuka is harvested from the Leptospermum polygalifolium plant, native to pristine Australian bushland. It contains high levels of Methylglyoxal (MGO), the compound responsible for its unique bio-active properties."
    },
    {
      q: "How should I use Aura Gold?",
      a: "For maximum wellness benefits, we recommend one teaspoon daily on an empty stomach. It can also be added to lukewarm beverages or used topically for skin health."
    },
    {
      q: "What does 'Cold-Pressed' mean for honey?",
      a: "Traditional honey processing often uses high heat to speed up bottling, which can destroy delicate enzymes. Aura Gold uses zero-heat extraction, preserving the honey's natural bio-active potency."
    },
    {
      q: "How do I store my Aura Gold?",
      a: "Keep it in a cool, dry place away from direct sunlight. There is no need to refrigerate, as honey is a natural preservative."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="bg-obsidian min-h-screen text-white-soft">
      <Navbar />
      
      <div className="max-w-4xl mx-auto pt-48 pb-24 px-8">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-bright text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 font-sans"
        >
          Support
        </motion.h2>
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-[clamp(2.5rem,5vw,5rem)] font-semibold tracking-tight mb-16 leading-[1.1] font-serif text-white-pure"
        >
          Common <br /> Inquiries.
        </motion.h1>
        
        <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-12"
        >
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={item} className="group border-b border-white-pure/5 pb-12 last:border-0">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-gold-bright transition-colors font-serif">
                {faq.q}
              </h3>
              <p className="text-white-muted leading-relaxed font-light max-w-2xl font-sans">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-24 p-8 md:p-12 rounded-[32px] bg-surface border border-border-subtle text-center"
        >
            <h4 className="text-xl font-semibold mb-2 font-serif text-white-pure">Still have questions?</h4>
            <p className="text-sm text-white-dim mb-8 font-sans">Our specialists are here to guide you through the Aura experience.</p>
            <a href="/contact" className="inline-block px-10 py-4 bg-gold-bright text-obsidian text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform animate-gold-pulse font-sans">
                Contact Specialist
            </a>
        </motion.div>
      </div>
    </main>
  );
}

