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
        className={`fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between border-b border-white-pure/5 transition-all duration-700 ease-in-out ${
          isScrolled ? "bg-obsidian/80 backdrop-blur-2xl py-4 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2">
          <a href="/" className="text-2xl md:text-3xl font-light tracking-tighter text-white-pure font-serif group transition-all duration-500">
            AURA <span className="text-gold-bright group-hover:text-gold-mid transition-colors duration-500">GOLD</span>
          </a>
        </div>

        {/* Desktop Links - Refined with wider tracking and thinner weights */}
        <div className="hidden md:flex items-center gap-12 text-[10px] font-bold text-white-muted uppercase tracking-[0.3em] font-sans">
          {navLinks.map((item) => (
            <a
              key={item}
              href={item === "Shop" ? "/products" : `#${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-gold-bright transition-all duration-500 relative group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-bright transition-all duration-700 ease-out group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center">
            <ThemeToggle />
          </div>
          <button className="hidden lg:block px-10 py-3 rounded-full bg-white-pure text-obsidian text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gold-bright transition-all duration-500 shadow-xl font-sans border border-transparent hover:border-gold-bright/20">
            The Experience
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white-pure/60 hover:text-white-pure transition-colors duration-500"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[45] bg-obsidian pt-32 px-10 md:hidden flex flex-col transition-colors duration-500"
          >
            <div className="flex flex-col gap-10">
              {navLinks.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  key={item}
                  href={item === "Shop" ? "/products" : `#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-light tracking-tighter text-white-soft hover:text-gold-bright transition-all duration-500 font-serif"
                >
                  {item}
                </motion.a>
              ))}

              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.6 }}
                 className="flex items-center gap-4 mt-8"
              >
                 <span className="text-[10px] uppercase tracking-[0.2em] text-white-dim font-sans">Switch Theme</span>
                 <ThemeToggle />
              </motion.div>
            </div>

            <div className="absolute bottom-16 left-10">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white-dim/40 font-sans">
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
