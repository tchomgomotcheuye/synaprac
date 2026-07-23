"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Presentation() {
  const t = useTranslations("Presentation");
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative h-[280px] lg:h-[320px] rounded-blob-alt overflow-hidden bg-gradient-to-br from-green-600 to-brown-700"
        >
          
          <img
            src="/presentation.jpeg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

            {/* Overlay pour garder le texte lisible */}
            <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          
          <div className="inline-flex items-center gap-2 font-display font-semibold text-[12.5px] tracking-[.14em] uppercase text-amber-600 mb-3.5">
            <span className="w-[18px] h-[2px] bg-amber-500" />
            {t("badge")}
          </div>
          <h2 className="font-display font-bold text-green-900 text-[26px] lg:text-[30px] mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 mb-4">
            {t("paragraph1")}
          </p>
          <p className="text-gray-600">
            {t("paragraph2")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
