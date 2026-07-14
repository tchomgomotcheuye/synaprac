"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NEWS = [
  {
    date: "12 juin 2026",
    title: "Journée de sensibilisation à Douala",
    excerpt: "Retour sur la campagne menée avec les mairies d'arrondissement.",
    gradient: "from-green-600 to-brown-700",
  },
  {
    date: "2 juin 2026",
    title: "Nouveau partenariat institutionnel",
    excerpt: "Le SYNAPROC signe un accord cadre avec un partenaire technique.",
    gradient: "from-amber-500 to-green-700",
  },
  {
    date: "20 mai 2026",
    title: "Formation des vidangeurs à Yaoundé",
    excerpt: "Une session de formation pour renforcer les compétences terrain.",
    gradient: "from-brown-700 to-green-900",
  },
];

export function News() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 font-display font-semibold text-[12.5px] tracking-[.14em] uppercase text-amber-600 mb-3.5">
              <span className="w-[18px] h-[2px] bg-amber-500" />
              Actualités
            </div>
            <h2 className="font-display font-bold text-green-900 text-[28px] lg:text-[32px]">
              Les dernières nouvelles du syndicat
            </h2>
          </div>
          <Button variant="outline">Toutes les actualités</Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {NEWS.map((n, i) => (
            <motion.a
              key={n.title}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="block group"
            >
              <div
                className={`h-[170px] rounded-organic bg-gradient-to-br ${n.gradient} mb-4 transition-transform duration-300 group-hover:scale-[1.02]`}
              />
              <div className="font-display font-semibold text-[11.5px] uppercase tracking-wide text-gray-500 mb-2">
                {n.date}
              </div>
              <h3 className="font-display font-semibold text-[16.5px] text-ink mb-1.5 group-hover:text-green-700 transition-colors">
                {n.title}
              </h3>
              <p className="text-gray-600 text-sm">{n.excerpt}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
