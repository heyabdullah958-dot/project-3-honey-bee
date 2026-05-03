"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";

export default function MGOCounter({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(latest) {
          setCount(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-7xl md:text-9xl font-bold font-mono tracking-tighter text-gold-bright mb-4 drop-shadow-[0_0_30px_rgba(232,184,75,0.2)]">
        {count}
      </div>
      <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-white-dim font-sans">
        {label}
      </div>
    </div>
  );
}

