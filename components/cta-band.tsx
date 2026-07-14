"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type CtaBandProps = {
  tone?: "green" | "brown";
  title?: string;
  text?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  showSecondary?: boolean;
  /** If true (default), wraps itself in a full-width <section> with page padding.
   *  Set to false to embed it inside an existing section (e.g. at the end of "Membres"). */
  wrapped?: boolean;
};

export function CtaBand({
  tone = "green",
  title = "Vous exercez dans l'assainissement ?",
  text = "Rejoignez un réseau national qui défend votre métier et accompagne votre développement professionnel.",
  primaryLabel = "Devenir membre",
  secondaryLabel = "Nous contacter",
  showSecondary = true,
  wrapped = true,
}: CtaBandProps) {
  const gradient =
    tone === "brown"
      ? "bg-gradient-to-br from-brown-900 to-brown-700"
      : "bg-gradient-to-br from-green-900 to-green-700";

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={`${gradient} text-white rounded-organic-lg px-6 sm:px-8 py-10 lg:py-14 text-center`}
    >
      <h2 className="font-display font-bold text-white text-[24px] lg:text-[27px] mb-3">
        {title}
      </h2>
      <p className="text-green-100/90 max-w-[520px] mx-auto mb-7">{text}</p>
      <div className="flex justify-center flex-wrap gap-3.5">
        <Button variant="amber" size="lg">
          {primaryLabel}
        </Button>
        {showSecondary && (
          <Button variant="outline-light" size="lg">
            {secondaryLabel}
          </Button>
        )}
      </div>
    </motion.div>
  );

  if (!wrapped) return content;

  return (
    <section className="pb-16 lg:pb-20">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">{content}</div>
    </section>
  );
}