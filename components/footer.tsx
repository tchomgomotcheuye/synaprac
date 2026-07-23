"use client";

import Link from "next/link";
import { Facebook, Linkedin, AtSign } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-brown-900 text-[#EFE7DA] pt-16 pb-6">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 mb-11">
          <div>
            <div className="font-display font-extrabold text-white text-[18px] mb-3.5">
              SYNAPRAC
            </div>
            <p className="text-[#D8CDBB] text-sm max-w-[280px] mb-4">
               {t("description")}
            </p>
            <div className="flex gap-2.5">
              {[Facebook, Linkedin, AtSign].map((Icon, i) => (
                <span
                  key={i}
                  className="w-[34px] h-[34px] rounded-full bg-white/[0.08] flex items-center justify-center"
                >
                  <Icon size={15} className="text-[#EFE7DA]" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-4">
              {t("navigation")}
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#D8CDBB]">
              <li><Link href="/le-syndicat">{t("union")}</Link></li>
              <li><Link href="/activites-actualites">{t("activities")}</Link></li>
              <li><Link href="/galerie">{t("gallery")}</Link></li>
              <li><Link href="/contact">{t("contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-4">
              {t("resources")}
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#D8CDBB]">
              <li><Link href="#">{t("join")}</Link></li>
              <li><Link href="#">{t("legal")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-4">
              Contact
            </h4>
           <ul className="flex flex-col gap-2.5 text-sm text-[#D8CDBB]">
              <li>Yaoundé, Cameroun</li>

              <li>
                <a 
                  href="https://wa.me/237697808239"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +237 697 808 239
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/237674439332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +237 674 439 332
                </a>
              </li>

              <li>
                <a 
                  href="tel:+237620402056"
                  className="hover:text-white transition-colors"
                >
                  +237 620 402 056
                </a>
              </li>

              <li>
                <a
                  href="mailto:contact@synaprac.cm"
                  className="hover:text-white transition-colors"
                >
                  contact@synaprac.cm
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-wrap justify-between gap-2 text-xs text-[#B7A98D]">
          <span>© 2026 SYNAPRAC — Tous droits réservés</span>
          <span>Site réalisé par André Michel</span>
        </div>
      </div>
    </footer>
  );
}
