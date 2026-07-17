import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SubNav } from "@/components/sub-nav";
import { ProjectsGrid } from "@/components/projects-grid";
import { StatsRow } from "@/components/stats-row";
import { NewsGridCompact } from "@/components/news-grid-compact";

const TABS = [
  { id: "activites", label: "Nos activités" },
  { id: "actualites", label: "Actualités" },
];

export default function ActivitesActualitesPage() {
  return (
    <>
      <Navbar active="Activités & Actualités" />
      <PageHero
        crumb="Accueil / Activités & Actualités"
        title="Activités & Actualités"
        subtitle="Nos projets de terrain et les dernières nouvelles du syndicat, réunis en un seul endroit."
      />
      <SubNav tabs={TABS} />

      <main>
        {/* ---- Nos activités ---- */}
        <section id="activites" className="scroll-mt-[150px] py-16 lg:py-20">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
            <div className="max-w-[640px] mb-11">
              <div className="inline-flex items-center gap-2 font-display font-semibold text-[12.5px] tracking-[.14em] uppercase text-amber-600 mb-3.5">
                <span className="w-[18px] h-[2px] bg-amber-500" />
                Nos activités
              </div>
              <h2 className="font-display font-bold text-green-900 text-[28px] mb-3">
                Projets et réalisations
              </h2>
            </div>
            <ProjectsGrid />
            <StatsRow />
          </div>
        </section>

        {/* ---- Actualités ---- */}
        <section id="actualites" className="scroll-mt-[150px] py-16 lg:py-20 bg-green-100">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
            <div className="max-w-[640px] mb-11">
              <div className="inline-flex items-center gap-2 font-display font-semibold text-[12.5px] tracking-[.14em] uppercase text-amber-600 mb-3.5">
                <span className="w-[18px] h-[2px] bg-amber-500" />
                Actualités
              </div>
              <h2 className="font-display font-bold text-green-900 text-[28px] mb-3">
                Communiqués et événements
              </h2>
            </div>
            <NewsGridCompact />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}