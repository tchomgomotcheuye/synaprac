"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  { label: "Formation", gradient: "from-amber-500 to-green-600" },
  { label: "Sensibilisation à Douala", gradient: "from-green-600 to-brown-700" },
  { label: "Terrain", gradient: "from-brown-700 to-green-900" },
  { label: "Formation des vidangeurs", gradient: "from-green-500 to-amber-600" },
  { label: "Partenariat communal", gradient: "from-amber-500 to-brown-700" },
];

export function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const total = SLIDES.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);
  const getSlide = (offset: number) => SLIDES[(index + offset + total) % total];

  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-[640px] mx-auto mb-11">
          <div className="inline-flex items-center gap-2 font-display font-semibold text-[12.5px] tracking-[.14em] uppercase text-amber-600 mb-3.5">
            <span className="w-[18px] h-[2px] bg-amber-500" />
            En images
          </div>
          <h2 className="font-display font-bold text-green-900 text-[28px] lg:text-[32px] mb-3">
            Nos actions sur le terrain
          </h2>
          <p className="text-gray-600 text-[15px]">
            Un aperçu de nos activités — galerie complète accessible depuis cet aperçu.
          </p>
        </div>

        <div className="relative flex items-center justify-center gap-5">
          <button
            onClick={prev}
            aria-label="Image précédente"
            className="absolute left-0 sm:static z-10 w-11 h-11 shrink-0 rounded-full bg-white border border-line shadow-md flex items-center justify-center text-green-700 hover:bg-green-100 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="hidden sm:block w-[220px] h-[230px] shrink-0 rounded-organic-lg overflow-hidden opacity-50">
            <div className={`w-full h-full bg-gradient-to-br ${getSlide(-1).gradient}`} />
          </div>

          <div className="w-full sm:w-[560px] h-[280px] sm:h-[340px] shrink-0 rounded-organic-lg overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                className={`w-full h-full bg-gradient-to-br ${getSlide(0).gradient} flex items-end p-5`}
              >
                <span className="font-display font-semibold text-[11.5px] uppercase tracking-wide text-white bg-black/20 px-3 py-1.5 rounded-full">
                  {getSlide(0).label}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden sm:block w-[220px] h-[230px] shrink-0 rounded-organic-lg overflow-hidden opacity-50">
            <div className={`w-full h-full bg-gradient-to-br ${getSlide(1).gradient}`} />
          </div>

          <button
            onClick={next}
            aria-label="Image suivante"
            className="absolute right-0 sm:static z-10 w-11 h-11 shrink-0 rounded-full bg-white border border-line shadow-md flex items-center justify-center text-green-700 hover:bg-green-100 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Aller à l'image ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-5 bg-amber-500" : "w-2 bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}