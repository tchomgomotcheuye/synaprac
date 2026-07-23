"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const SLIDES = [
  { key: "training", image: "/galery1.jpg", },
  { key: "Awareness campaign in Douala", image: "/galery2.jpg", },
  { key: "Field work", image: "/galery3.jpg", },
  { key: "Vacuum truck operators training", image: "/galery4.jpg", },
  { key: "Municipal partnership", image: "/galery5.jpg", },
];

export function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const total = SLIDES.length;
  const t = useTranslations("Home.Gallery");

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);
  const getSlide = (offset: number) => SLIDES[(index + offset + total) % total];

  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-[640px] mx-auto mb-11">
          <div className="inline-flex items-center gap-2 font-display font-semibold text-[12.5px] tracking-[.14em] uppercase text-amber-600 mb-3.5">
            <span className="w-[18px] h-[2px] bg-amber-500" />
            {t("badge")}
          </div>
          <h2 className="font-display font-bold text-green-900 text-[28px] lg:text-[32px] mb-3">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-[15px]">
            {t("description")}
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

          <div className="hidden sm:block relative w-[220px] h-[230px] shrink-0 rounded-organic-lg overflow-hidden opacity-50">
            <Image
              src={getSlide(-1).image}
              alt={t(`slides.${getSlide(-1).key}`)}
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full sm:w-[560px] h-[280px] sm:h-[340px] shrink-0 rounded-organic-lg overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                className="relative w-full h-full flex items-end p-5"
              >
                <Image
                  src={getSlide(0).image}
                  alt={t(`slides.${getSlide(0).key}`)}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />

                <span className="relative z-10 font-display font-semibold text-[11.5px] uppercase tracking-wide text-white bg-black/20 px-3 py-1.5 rounded-full">
                  {t(`slides.${getSlide(0).key}`)}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden sm:block relative w-[220px] h-[230px] shrink-0 rounded-organic-lg overflow-hidden opacity-50">
            <Image
              src={getSlide(1).image}
              alt={t(`slides.${getSlide(1).key}`)}
              fill
              className="object-cover"
            />
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