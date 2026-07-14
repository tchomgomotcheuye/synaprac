"use client";

import { motion } from "framer-motion";
import { Shield, Award, Leaf, Handshake } from "lucide-react";
import { Card } from "@/components/ui/card";

const MISSIONS = [
  {
    icon: Shield,
    title: "Représentation",
    desc: "Défendre les intérêts des professionnels auprès des institutions.",
  },
  {
    icon: Award,
    title: "Professionnalisation",
    desc: "Former et structurer les métiers de l'assainissement.",
  },
  {
    icon: Leaf,
    title: "Environnement",
    desc: "Promouvoir des pratiques durables et responsables.",
  },
  {
    icon: Handshake,
    title: "Partenariats",
    desc: "Construire des ponts avec collectivités et entreprises.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Missions() {
  return (
    <section className="py-16 lg:py-20 bg-green-100">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-[640px] mx-auto mb-11">
          <div className="inline-flex items-center gap-2 font-display font-semibold text-[12.5px] tracking-[.14em] uppercase text-amber-600 mb-3.5">
            <span className="w-[18px] h-[2px] bg-amber-500" />
            Nos missions
          </div>
          <h2 className="font-display font-bold text-green-900 text-[28px] lg:text-[32px]">
            Ce que nous portons au quotidien
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {MISSIONS.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={item} transition={{ duration: 0.5 }}>
              <Card className="h-full hover:-translate-y-1 hover:shadow-md transition-transform duration-300">
                <div className="w-[52px] h-[52px] rounded-[16px_16px_16px_4px] bg-green-100 flex items-center justify-center mb-4.5">
                  <Icon className="text-green-700" size={24} strokeWidth={1.7} />
                </div>
                <h3 className="font-display font-semibold text-[18px] text-ink mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-[14.5px]">{desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
