import Link from "next/link";
import { Facebook, Linkedin, AtSign } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brown-900 text-[#EFE7DA] pt-16 pb-6">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 mb-11">
          <div>
            <div className="font-display font-extrabold text-white text-[18px] mb-3.5">
              SYNAPROC
            </div>
            <p className="text-[#D8CDBB] text-sm max-w-[280px] mb-4">
              Syndicat National Autonome des Professionnels de l&apos;Assainissement du
              Cameroun. Ensemble pour un Cameroun plus propre.
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
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#D8CDBB]">
              <li><Link href="/le-syndicat">Le Syndicat</Link></li>
              <li><Link href="/activites-actualites">Activités &amp; Actualités</Link></li>
              <li><Link href="/galerie">Galerie</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-4">
              Ressources
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#D8CDBB]">
              <li><Link href="#">Nous rejoindre</Link></li>
              <li><Link href="#">Mentions légales</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#D8CDBB]">
              <li>Yaoundé, Cameroun</li>
              <li>+237 6xx xx xx xx</li>
              <li>contact@synaproc.cm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-wrap justify-between gap-2 text-xs text-[#B7A98D]">
          <span>© 2026 SYNAPROC — Tous droits réservés</span>
          <span>Site réalisé par André Michel</span>
        </div>
      </div>
    </footer>
  );
}
