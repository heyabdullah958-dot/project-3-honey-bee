"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Provenance", "The Harvest", "Wellness", "Shop"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between border-b border-white-pure/5 transition-all duration-500 ${
          isScrolled ? "bg-surface/85 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2">
          <a href="/" className="text-2xl font-semibold tracking-tight text-white-pure font-serif">
            AURA <span className="text-gold-bright">GOLD</span>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white-muted tracking-wide font-sans">
          {navLinks.map((item) => (
            <a
              key={item}
              href={item === "Shop" ? "/products" : `#${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-gold-bright transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-bright transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="hidden sm:block px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-mid to-gold-dim text-black text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(196,154,44,0.3)] hover:shadow-[0_0_30px_rgba(196,154,44,0.5)] animate-gold-pulse font-sans">
            Experience Aura
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white-pure/80 hover:text-white-pure transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[45] bg-obsidian pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-8">
              <a
                href="/"
                className="text-2xl font-semibold tracking-tight text-white-pure font-serif mb-4"
                onClick={() => setIsOpen(false)}
              >
                AURA <span className="text-gold-bright">GOLD</span>
              </a>
              {navLinks.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item}
                  href={item === "Shop" ? "/products" : `#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-semibold tracking-tight text-white-soft hover:text-gold-bright transition-colors font-serif"
                >
                  {item}
                </motion.a>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-4 w-full py-4 rounded-xl bg-surface border border-border-subtle text-white-soft font-bold uppercase tracking-[0.2em] text-xs hover:bg-charcoal transition-colors font-sans"
              >
                Experience Aura
              </motion.button>
            </div>

            <div className="absolute bottom-12 left-8 right-8">
              <span className="text-[10px] uppercase tracking-widest text-white-dim">
                © 2026 Aura Gold Australia
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
