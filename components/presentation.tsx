"use client";

import { motion } from "framer-motion";

export function Presentation() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="h-[280px] lg:h-[320px] rounded-blob-alt bg-gradient-to-br from-green-600 to-brown-700"
        />
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 font-display font-semibold text-[12.5px] tracking-[.14em] uppercase text-amber-600 mb-3.5">
            <span className="w-[18px] h-[2px] bg-amber-500" />
            Présentation
          </div>
          <h2 className="font-display font-bold text-green-900 text-[26px] lg:text-[30px] mb-4">
            Le porte-voix des professionnels de l&apos;assainissement
          </h2>
          <p className="text-gray-600 mb-4">
            Le SYNAPROC réunit les acteurs de l&apos;assainissement autour d&apos;objectifs
            communs&nbsp;: professionnalisation du secteur, défense des intérêts des
            membres et amélioration du cadre de vie des populations.
          </p>
          <p className="text-gray-600">
            À travers ses actions de terrain, ses formations et ses partenariats
            institutionnels, le syndicat œuvre chaque jour pour un secteur plus
            structuré et reconnu.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
