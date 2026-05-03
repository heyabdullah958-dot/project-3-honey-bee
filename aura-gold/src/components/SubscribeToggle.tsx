"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface SubscribeToggleProps {
  oneTimePrice: string;
  subscribePrice: string;
  discount?: string;
}

export default function SubscribeToggle({
  oneTimePrice,
  subscribePrice,
  discount = "15%",
}: SubscribeToggleProps) {
  const [isSubscribe, setIsSubscribe] = useState(false);

  return (
    <div className="space-y-6">
      {/* Toggle Tabs */}
      <div className="flex rounded-2xl bg-charcoal border border-border-subtle p-1.5 gap-1.5">
        <button
          onClick={() => setIsSubscribe(false)}
          className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 font-sans ${
            !isSubscribe
              ? "bg-white-pure text-obsidian shadow-lg"
              : "text-white-dim hover:text-white-soft"
          }`}
        >
          One-Time
        </button>
        <button
          onClick={() => setIsSubscribe(true)}
          className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 font-sans relative ${
            isSubscribe
              ? "bg-gold-bright text-obsidian shadow-[0_0_20px_rgba(232,184,75,0.3)]"
              : "text-white-dim hover:text-white-soft"
          }`}
        >
          Subscribe & Save
          <span className="absolute -top-2 -right-2 bg-success text-obsidian text-[8px] font-black px-2 py-0.5 rounded-full">
            {discount} OFF
          </span>
        </button>
      </div>

      {/* Price Display */}
      <motion.div
        key={isSubscribe ? "subscribe" : "onetime"}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-end gap-3"
      >
        <span className="text-4xl font-semibold tracking-tight font-serif text-white-pure">
          {isSubscribe ? subscribePrice : oneTimePrice}
        </span>
        <span className="text-sm text-white-dim font-sans uppercase tracking-widest mb-1">
          AUD {isSubscribe ? "/ month" : ""}
        </span>
        {isSubscribe && (
          <span className="text-sm text-white-dim line-through font-sans mb-1">
            {oneTimePrice}
          </span>
        )}
      </motion.div>

      {isSubscribe && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-white-dim font-sans leading-relaxed"
        >
          ✓ Cancel anytime &nbsp;·&nbsp; ✓ Free shipping &nbsp;·&nbsp; ✓ Priority access to new harvests
        </motion.p>
      )}
    </div>
  );
}

