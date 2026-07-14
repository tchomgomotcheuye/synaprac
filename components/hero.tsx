"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-700 to-green-600 text-white">
      <div className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full bg-white/[0.06]" />
      <div className="absolute -left-20 -bottom-36 w-[300px] h-[300px] rounded-blob bg-black/[0.08]" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 font-display font-semibold text-[12.5px] tracking-[.14em] uppercase text-amber-500 mb-4">
              <span className="w-[18px] h-[2px] bg-amber-500" />
              Syndicat National Autonome
            </div>
            <h1 className="font-display font-bold text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.08] mb-5">
              Ensemble, pour un Cameroun plus propre et mieux assaini.
            </h1>
            <p className="text-[17.5px] text-green-100/90 max-w-[520px] mb-8">
              Le SYNAPROC fédère et représente les professionnels de l&apos;assainissement
              du Cameroun&nbsp;: vidange, collecte, traitement des déchets et hygiène du
              cadre de vie.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Button variant="amber" size="lg">
                Découvrir nos missions
              </Button>
              <Button variant="outline-light" size="lg">
                Nous contacter
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative h-[280px] sm:h-[340px] rounded-blob bg-gradient-to-br from-amber-500 to-brown-700 flex items-end p-5"
          >
            <span className="font-display font-semibold text-[12px] uppercase tracking-wide text-white/85">
              Nos équipes sur le terrain
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
