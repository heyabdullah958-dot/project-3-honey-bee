"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RefreshCw, CheckCircle2, ShoppingCart } from "lucide-react";

const steps = [
  {
    id: "goal",
    title: "What's your main goal?",
    options: [
      { label: "Gut & Digestion", value: "gut", desc: "Balance your microbiome naturally." },
      { label: "Immune Support", value: "immune", desc: "Boost your body's natural defenses." },
      { label: "Skin & Wound Healing", value: "skin", desc: "Pure topical and internal repair." },
      { label: "Daily Wellness", value: "daily", desc: "A healthy addition to your ritual." },
    ],
  },
  {
    id: "frequency",
    title: "How often will you use it?",
    options: [
      { label: "Daily ritual", value: "daily", desc: "A consistent teaspoon every morning." },
      { label: "When I need it", value: "occasional", desc: "A potent boost during recovery." },
    ],
  },
  {
    id: "budget",
    title: "Your budget?",
    options: [
      { label: "Under $60", value: "low", desc: "Entry-level bio-active honey." },
      { label: "$60 - $120", value: "mid", desc: "The sweet spot of potency." },
      { label: "$120+", value: "high", desc: "The pinnacle of MGO strength." },
    ],
  },
];

export default function HoneyQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (value: string) => {
    const newAnswers = { ...answers, [steps[currentStep].id]: value };
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const getRecommendation = () => {
    const { goal, budget } = answers;
    
    if (budget === "high" || goal === "skin") {
        return {
            mgo: "850+",
            title: "Aura Gold Signature",
            desc: "The ultimate therapeutic grade for intensive healing and peak bio-activity.",
            price: "$185"
        };
    }
    if (budget === "mid" || goal === "immune") {
        return {
            mgo: "514+",
            title: "Aura Gold Reserve",
            desc: "Exceptional potency designed for robust immune support and gut health.",
            price: "$95"
        };
    }
    return {
        mgo: "200+",
        title: "Aura Gold Daily",
        desc: "Perfect for a daily wellness ritual, providing clean energy and gentle support.",
        price: "$55"
    };
  };

  const recommendation = showResult ? getRecommendation() : null;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="bg-surface border border-border-subtle rounded-[48px] p-8 md:p-16 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-charcoal">
            <motion.div 
                className="h-full bg-gold-bright"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep + (showResult ? 1 : 0)) / steps.length) * 100}%` }}
            />
        </div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-gold-bright text-[10px] font-bold uppercase tracking-[0.4em] mb-4 font-sans">
                Question {currentStep + 1} of {steps.length}
              </span>
              <h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-12 font-serif text-white-pure">
                {steps[currentStep].title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {steps[currentStep].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleOptionSelect(option.value)}
                    className="p-6 rounded-3xl bg-charcoal border border-border-subtle hover:border-gold-mid/50 hover:bg-obsidian transition-all duration-300 text-left group"
                  >
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-bold text-white-soft group-hover:text-gold-bright transition-colors font-sans">
                            {option.label}
                        </span>
                        <div className="w-6 h-6 rounded-full border border-white-pure/10 flex items-center justify-center group-hover:border-gold-bright transition-colors">
                            <ArrowRight size={14} className="text-white-dim group-hover:text-gold-bright" />
                        </div>
                    </div>
                    <p className="text-sm text-white-dim font-sans leading-relaxed">
                        {option.desc}
                    </p>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center"
            >
              <CheckCircle2 size={48} className="text-gold-bright mb-8" />
              <span className="text-gold-bright text-[10px] font-bold uppercase tracking-[0.4em] mb-4 font-sans">
                Our Recommendation
              </span>
              <h3 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 font-serif text-white-pure">
                {recommendation?.title}
              </h3>
              
              <div className="mb-12">
                <div className="inline-block px-8 py-3 bg-charcoal border border-gold-mid/30 rounded-full mb-6">
                    <span className="text-gold-shimmer text-2xl font-bold font-mono tracking-tighter">
                        MGO {recommendation?.mgo}
                    </span>
                </div>
                <p className="text-xl text-white-muted font-light leading-relaxed max-w-xl mx-auto font-sans">
                    {recommendation?.desc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center text-sans">
                  <a 
                    href={`https://wa.me/61400000000?text=${encodeURIComponent(`Hi Aura Gold, I just took your quiz and I would like to order the ${recommendation?.title} (MGO ${recommendation?.mgo}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-12 py-5 bg-gold-bright text-obsidian text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-[0_20px_40px_rgba(196,154,44,0.2)] hover:scale-105 transition-all duration-300 animate-gold-pulse font-sans flex items-center justify-center gap-3"
                  >
                    <ShoppingCart size={16} />
                    Order via WhatsApp — {recommendation?.price}
                  </a>
                  <button 
                    onClick={resetQuiz}
                    className="flex items-center gap-2 text-white-dim hover:text-white-soft transition-colors font-sans text-xs uppercase tracking-widest"
                  >
                    <RefreshCw size={14} />
                    Retake Quiz
                  </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

