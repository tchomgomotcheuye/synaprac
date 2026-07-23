import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SubNav } from "@/components/sub-nav";
import { ProjectsGrid } from "@/components/projects-grid";
import { StatsRow } from "@/components/stats-row";
import { NewsGridCompact } from "@/components/news-grid-compact";
import {getTranslations} from "next-intl/server";

export default async  function ActivitesActualitesPage() {
  const t = await getTranslations("ActivitiesNews");

  const TABS = [
    { id: "activites", label: t("tabs.activities") },
    { id: "actualites", label: t("tabs.news") },
  ];
  return (
    <>
      <Navbar active={t("navbar")} />
      <PageHero
        crumb={t("hero.crumb")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />
      <SubNav tabs={TABS} />

      <main>
        {/* ---- Nos activités ---- */}
        <section id="activites" className="scroll-mt-[150px] py-16 lg:py-20">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
            <div className="max-w-[640px] mb-11">
              <div className="inline-flex items-center gap-2 font-display font-semibold text-[12.5px] tracking-[.14em] uppercase text-amber-600 mb-3.5">
                <span className="w-[18px] h-[2px] bg-amber-500" />
                {t("activities.badge")}
              </div>
              <h2 className="font-display font-bold text-green-900 text-[28px] mb-3">
                {t("activities.title")}
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
                {t("news.badge")}
              </div>
              <h2 className="font-display font-bold text-green-900 text-[28px] mb-3">
                {t("news.title")}
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