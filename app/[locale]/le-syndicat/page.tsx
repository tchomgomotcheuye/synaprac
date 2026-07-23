import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SubNav } from "@/components/sub-nav";
import { Timeline } from "@/components/timeline";
import { TeamGrid } from "@/components/team-grid";
import { MemberCategories } from "@/components/member-categories";
import { CtaBand } from "@/components/cta-band";
import { Target, Shield, CheckCircle, HeartHandshake  } from "lucide-react";
import {getTranslations} from "next-intl/server";

export default async function LeSyndicatPage() {
  const t = await getTranslations("LeSyndicat");
  const TABS = [
 {
 id:"histoire",
 label:t("tabs.history")
 },
 {
 id:"bureau",
 label:t("tabs.bureau")
 },
 {
 id:"membres",
 label:t("tabs.members")
 }
];
  return (
    <>
      <Navbar active="Le Syndicat" />
      <PageHero
        crumb={t("hero.crumb")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />
      <SubNav tabs={TABS} />

      <main>
        {/* ---- Histoire & vision ---- */}
        <section id="histoire" className="scroll-mt-[150px] py-16 lg:py-24">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-12">

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* GAUCHE : HISTOIRE */}
              <div className="bg-[#FAF8F2] rounded-[32px] p-8 lg:p-10 h-full">

                <div className="inline-flex items-center gap-2 font-display font-semibold text-[12.5px] tracking-[.14em] uppercase text-amber-600 mb-4">
                  <span className="w-[18px] h-[2px] bg-amber-500" />
                  {t("history.badge")}
                </div>


                <h2 className="font-display font-bold text-green-900 text-[26px] leading-tight mb-10">
                  {t("history.title")}
                </h2>


                <Timeline />

              </div>



              {/* DROITE : CARDS */}
              <div className="grid sm:grid-cols-2 gap-6">

                {/* Vision */}
                <div className="bg-white border border-line rounded-[28px] p-7 hover:shadow-lg transition">
                  
                  <div className="w-[52px] h-[52px] rounded-[16px_16px_16px_4px] bg-green-100 flex items-center justify-center mb-5">
                    <Target
                      className="text-green-700"
                      size={24}
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="font-display font-semibold text-[18px] text-ink mb-3">
                    {t("cards.visionTitle")}
                  </h3>

                  <p className="text-gray-600 text-[14.5px] leading-relaxed">
                    {t("cards.visionText")}
                  </p>

                </div>



                {/* Engagement */}
                <div className="bg-green-900 rounded-[28px] p-7 text-white">

                  <div className="w-[52px] h-[52px] rounded-[16px_16px_16px_4px] bg-white/10 flex items-center justify-center mb-5">
                    <Shield
                      className="text-amber-400"
                      size={24}
                      strokeWidth={1.7}
                    />
                  </div>


                  <h3 className="font-display font-semibold text-[18px] mb-3">
                    {t("cards.engagementTitle")}
                  </h3>

                  <p className="text-white/80 text-[14.5px] leading-relaxed">
                    {t("cards.engagementText")}
                  </p>

                </div>

                {/* Valeurs */}
                <div className="bg-white border border-line rounded-[28px] p-7 hover:shadow-lg transition">

                  <div className="w-[52px] h-[52px] rounded-[16px_16px_16px_4px] bg-green-100 flex items-center justify-center mb-5">
                    <HeartHandshake
                      className="text-green-700"
                      size={24}
                      strokeWidth={1.7}
                    />
                  </div>


                  <h3 className="font-display font-semibold text-[18px] text-ink mb-3">
                    {t("cards.valuesTitle")}
                  </h3>

                  <p className="text-gray-600 text-[14.5px] leading-relaxed">
                    {t("cards.valuesText")}
                  </p>

                </div>




                {/* Objectifs */}
                <div className="bg-green-50 border border-green-200 rounded-[28px] p-7">

                  <div className="w-[52px] h-[52px] rounded-[16px_16px_16px_4px] bg-green-100 flex items-center justify-center mb-5">
                    <CheckCircle
                      className="text-green-700"
                      size={24}
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="font-display font-semibold text-[18px] mb-3">
                    {t("cards.objectivesTitle")}
                  </h3>

                  <p className="text-gray-600 text-[14.5px] leading-relaxed">
                    {t("cards.objectivesText")}
                  </p>

                </div>

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
                {t("bureau.badge")}
              </div>
              <h2 className="font-display font-bold text-green-900 text-[28px] mb-3">
                {t("bureau.title")}
              </h2>
              <p className="text-gray-600">
                {t("bureau.description")}
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
                {t("members.badge")}
              </div>
              <h2 className="font-display font-bold text-green-900 text-[28px] mb-3">
                {t("members.title")}
              </h2>
            </div>
            <MemberCategories />

            <div className="mt-11">
              <CtaBand
                tone="brown"
                title={t("members.ctaTitle")}
                text={t("members.ctaText")}
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
