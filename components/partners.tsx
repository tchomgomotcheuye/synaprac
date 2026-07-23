import { Building2, ExternalLink } from "lucide-react";
import {useTranslations} from "next-intl";

type Partner = {
  name: string;
  url?: string;
};

// Remplace ces entrées par les vrais partenaires du SYNAPROC.
// `url` est optionnel : s'il est présent, toute la carte devient cliquable
// et redirige vers le site du partenaire dans un nouvel onglet.
const PARTNERS: Partner[] = [
  { name: "Mairie de ville de Bertoua"},
  { name: "Friedrich Ebert Stiftung", url: "https://www.fes.de" },
];
function PartnerCard({ partner, t }: { partner: Partner; t:any }) {
  const inner = (
    <>
      <div className="w-16 h-16 rounded-[16px_16px_16px_4px] bg-green-100 flex items-center justify-center mb-4">
        {/* Remplace cette icône par le vrai logo (ex: <Image src={partner.logo} .../>) */}
        <Building2 className="text-green-700" size={26} strokeWidth={1.6} />
      </div>
      <h3 className="font-display font-semibold text-[14px] text-ink text-center leading-snug">
        {partner.name}
      </h3>
      {partner.url && (
        <div className="flex items-center justify-center gap-1.5 mt-2.5 text-green-700 text-xs font-display font-medium">
          {t("visit")} <ExternalLink size={13} />
        </div>
      )}
    </>
  );
  

  const baseClass =
    "h-full bg-white border border-line rounded-organic p-6 flex flex-col items-center text-center transition-all duration-300";

  if (partner.url) {
    return (
      
        <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} hover:-translate-y-1 hover:shadow-md hover:border-green-600`}
      >
        {inner}
      </a>
    );
  }

  return <div className={baseClass}>{inner}</div>;
}

export function Partners() {

  const t = useTranslations("Home.Partners");
  // On duplique la liste pour créer une boucle de défilement parfaitement continue.
  const loop = [...PARTNERS, ...PARTNERS];
  

  return (
    <section className="py-16 lg:py-20 bg-green-100 overflow-hidden">
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
      </div>

      {/* Bandeau défilant : le dégradé sur les bords estompe l'entrée/sortie des logos */}
      <div
        className="relative w-full"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0, black 64px, black calc(100% - 64px), transparent 100%)",
          maskImage:
            "linear-gradient(90deg, transparent 0, black 64px, black calc(100% - 64px), transparent 100%)",
        }}
      >
        <div className="group overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]">
            {loop.map((p, i) => (
              <div key={`${p.name}-${i}`} className="w-[190px] h-[168px] shrink-0">
                <PartnerCard partner={p} t={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}