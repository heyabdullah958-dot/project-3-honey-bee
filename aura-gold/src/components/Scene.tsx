"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring, MotionValue } from "framer-motion";

const FRAME_COUNT = 240;

const Scene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

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

  const frameIndex = useTransform(smoothProgress, [0, 1], [1, FRAME_COUNT]);

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = Array.from({ length: FRAME_COUNT }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve) => {
          const img = new Image();
          img.src = `/frames/ezgif-frame-${(i + 1).toString().padStart(3, "0")}.jpg`;
          img.onload = () => resolve(img);
          img.onerror = () => resolve(img);
          if (img.complete) resolve(img); // cached image handle
        });
      });

      const loadedImages = await Promise.all(imagePromises);
      setImages(loadedImages);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  // Drawing logic
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;

    const context = canvasRef.current.getContext("2d");
    if (!context) return;

    const render = (index: number) => {
      const img = images[Math.floor(index) - 1];
      if (img && img.complete && img.naturalWidth > 0) {
        const canvas = canvasRef.current!;
        const context = canvas.getContext("2d");
        if (!context) return;

        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";

        // Calculate dimensions for object-fit: cover behavior
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasAspect > imgAspect) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgAspect;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgAspect;
          drawHeight = canvas.height;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    const unsubscribe = frameIndex.on("change", (latest) => {
      render(latest);
    });

    // Initial render
    render(1);

    return () => unsubscribe();
  }, [imagesLoaded, images, frameIndex]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[800vh] bg-obsidian">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Cinematic animation of Aura Gold Manuka honey showing its liquid texture and premium packaging as you scroll."
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Text Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/20 via-transparent to-obsidian/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--obsidian-rgb), 0.4)_100%)] pointer-events-none" />

        {/* Loading State */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-obsidian z-50">
            <div className="w-48 h-[1px] bg-white-pure/10 relative overflow-hidden">
                <motion.div
                    initial={{ left: "-100%" }}
                    animate={{ left: "100%" }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="absolute inset-0 bg-gold-bright"
                />
            </div>
            <span className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white-dim">Initializing Aura...</span>
          </div>
        )}

        {/* Text Overlays */}
        <div className="relative z-10 w-full h-full pointer-events-none">
          <Section
            progress={smoothProgress}
            range={[0, 0.15]}
            title="Aura Gold"
            subtitle="Liquid Gold, Perfected."
            description="Rare Australian Manuka, re-engineered for a lifestyle of pure wellness."
            align="center"
          />

          {/* Scroll Indicator */}
          <motion.div
            style={{ opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]) }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-white-dim">Scroll to explore</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-gold-bright/60 to-transparent" />
          </motion.div>

          <Section
            progress={smoothProgress}
            range={[0.2, 0.4]}
            title="Nature Engineered"
            subtitle="Purity in every molecule."
            description="Cold-pressed extraction, bioactive nutrients, and zero-heat processing preserve every enzyme."
            align="left"
          />
          <Section
            progress={smoothProgress}
            range={[0.45, 0.65]}
            title="Bio-Active Potency"
            subtitle="Certified Power."
            description="MGO-tested for peak strength. Harvested from pristine Australian bushland, untouched and uncompromising."
            align="right"
          />
          <Section
            progress={smoothProgress}
            range={[0.7, 0.85]}
            title="Sensory Depth"
            subtitle="Rich, lifelike texture."
            description="High-viscosity Manuka unlocks warmth and floral texture. AI-monitored hives ensure total clarity."
            align="left"
          />
          <Section
            progress={smoothProgress}
            range={[0.9, 1]}
            title="The Aura Standard"
            subtitle="Taste the Power."
            description="Aura Gold. Designed for health, crafted for luxury. Experience the pinnacle of Manuka."
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
  const y = useTransform(progress, [range[0] - 0.05, range[0], range[1], range[1] + 0.05], [20, 0, 0, -20]);

  const alignClasses = {
    left: "items-start text-left px-8 md:pl-24",
    right: "items-end text-right px-8 md:pr-24",
    center: "items-center text-center px-8",
  };

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute inset-0 flex flex-col justify-center ${alignClasses[align]} max-w-7xl mx-auto`}
    >
      <div className="max-w-xl">
        <motion.h2 className="text-gold-bright text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 drop-shadow-[0_0_15px_rgba(232,184,75,0.2)] font-sans">
          {title}
        </motion.h2>
        <motion.h1 className="text-4xl md:text-[clamp(2.5rem,5vw,5rem)] font-semibold text-white-pure tracking-tight mb-6 leading-[1.1] font-serif">
          {subtitle}
        </motion.h1>
        <motion.p className="text-base md:text-lg text-white-muted leading-relaxed font-light font-sans">
          {description}
        </motion.p>

        {isLast && (
           <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-10 py-4 bg-white-pure text-obsidian text-[10px] font-bold uppercase tracking-[0.2em] rounded-full pointer-events-auto animate-gold-pulse font-sans"
           >
            Order Aura Gold
           </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default Scene;


