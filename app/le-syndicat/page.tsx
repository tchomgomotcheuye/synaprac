import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SubNav } from "@/components/sub-nav";
import { Timeline } from "@/components/timeline";
import { TeamGrid } from "@/components/team-grid";
import { MemberCategories } from "@/components/member-categories";
import { CtaBand } from "@/components/cta-band";
import { Target, Shield } from "lucide-react";

const TABS = [
  { id: "histoire", label: "Histoire & vision" },
  { id: "bureau", label: "Bureau exécutif" },
  { id: "membres", label: "Nos membres" },
];

export default function LeSyndicatPage() {
  return (
    <>
      <Navbar active="Le Syndicat" />
      <PageHero
        crumb="Accueil / Le Syndicat"
        title="Le Syndicat"
        subtitle="Notre histoire, notre bureau exécutif et nos membres — l'essentiel du SYNAPROC en un seul endroit."
      />
      <SubNav tabs={TABS} />

      <main>
        {/* ---- Histoire & vision ---- */}
        <section id="histoire" className="scroll-mt-[150px] py-16 lg:py-20">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14">
            <div>
              <div className="inline-flex items-center gap-2 font-display font-semibold text-[12.5px] tracking-[.14em] uppercase text-amber-600 mb-3.5">
                <span className="w-[18px] h-[2px] bg-amber-500" />
                Notre histoire
              </div>
              <h2 className="font-display font-bold text-green-900 text-[26px] mb-7">
                Un engagement construit sur le terrain
              </h2>
              <Timeline />
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white border border-line rounded-organic p-8">
                <div className="w-[52px] h-[52px] rounded-[16px_16px_16px_4px] bg-green-100 flex items-center justify-center mb-4.5">
                  <Target
                    className="text-green-700"
                    size={24}
                    strokeWidth={1.7}
                  />
                </div>
                <h3 className="font-display font-semibold text-[18px] text-ink mb-2">
                  Notre vision
                </h3>
                <p className="text-gray-600">
                  Un secteur de l&apos;assainissement professionnalisé, reconnu
                  et respecté.
                </p>
              </div>
              <div className="bg-white border border-line rounded-organic p-8">
                <div className="w-[52px] h-[52px] rounded-[16px_16px_16px_4px] bg-green-100 flex items-center justify-center mb-4.5">
                  <Shield
                    className="text-green-700"
                    size={24}
                    strokeWidth={1.7}
                  />
                </div>
                <h3 className="font-display font-semibold text-[18px] text-ink mb-2">
                  Notre mission
                </h3>
                <p className="text-gray-600">
                  Représenter, structurer et accompagner les professionnels de
                  l&apos;assainissement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Bureau exécutif ---- */}
        <section
          id="bureau"
          className="scroll-mt-[150px] py-16 lg:py-20 bg-green-100"
        >
          <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
            <div className="max-w-[640px] mb-11">
              <div className="inline-flex items-center gap-2 font-display font-semibold text-[12.5px] tracking-[.14em] uppercase text-amber-600 mb-3.5">
                <span className="w-[18px] h-[2px] bg-amber-500" />
                Gouvernance
              </div>
              <h2 className="font-display font-bold text-green-900 text-[28px] mb-3">
                Le Bureau Exécutif
              </h2>
              <p className="text-gray-600">
                Les responsables élus qui portent la voix et l&apos;action du
                SYNAPROC.
              </p>
            </div>
            <TeamGrid />
          </div>
        </section>

        {/* ---- Nos membres ---- */}
        <section id="membres" className="scroll-mt-[150px] py-16 lg:py-20">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
            <div className="max-w-[640px] mb-11">
              <div className="inline-flex items-center gap-2 font-display font-semibold text-[12.5px] tracking-[.14em] uppercase text-amber-600 mb-3.5">
                <span className="w-[18px] h-[2px] bg-amber-500" />
                Nos membres
              </div>
              <h2 className="font-display font-bold text-green-900 text-[28px] mb-3">
                Un secteur, plusieurs métiers
              </h2>
            </div>
            <MemberCategories />

            <div className="mt-11">
              <CtaBand
                tone="brown"
                title="Vous représentez l'une de ces catégories ?"
                text="Adhérez au SYNAPROC et bénéficiez d'un réseau et d'une représentation professionnelle."
                primaryLabel="Devenir membre"
                showSecondary={false}
                wrapped={false}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
