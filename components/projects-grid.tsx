import Image from "next/image";
import { useTranslations } from "next-intl";

export function ProjectsGrid() {
  const t = useTranslations("ActivitiesNews.projects");
  const PROJECTS = [
  {
    title: t("project1.title"),
    meta: t("project1.meta"),
    image: "/hero.jpeg",
  },
  {
    title: t("project2.title"),
    meta: t("project2.meta"),
    image: "/galery1.jpg",
  },
  {
    title: t("project3.title"),
    meta: t("project3.meta"),
    image: "/galery3.jpg",
  },
];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {PROJECTS.map((p) => (
        <div key={p.title} className="group">
          
          <div className="group relative h-[250px] rounded-organic overflow-hidden">

            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-xs uppercase tracking-wide text-white/70">
                {p.meta}
              </p>

              <h3 className="font-display font-semibold text-lg">
                {p.title}
              </h3>
            </div>

          </div>


        </div>
      ))}
    </div>
  );
}