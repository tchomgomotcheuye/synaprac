import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Play } from "lucide-react";
import { useTranslations } from "next-intl";

type News = {
  slug: string;
  date: string;
  title: string;
  thumbnail: string;
  duration: string;
};

const NEWS: News[] = [
  {
    slug: "campagne-sensibilisation",
    date: "20 Juillet 2026",
    title: "Bangangte passe à l'action",
    thumbnail: "/logo.jpg",
    duration: "2 min",
  },
  {
    slug: "ceremonie-officielle",
    date: "Juillet 2026",
    title: "Dechet urbain : Bangangte passe à l'action",
    thumbnail: "/logo.jpg",
    duration: "2 min",
  },
];

export function NewsGridCompact() {
  const t = useTranslations("ActivitiesNews.news");

  return (
    <div>
      {NEWS.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">{t("empty")}</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS.map((n) => (
            <Link
              key={n.slug}
              href={`/activites-actualites/${n.slug}`}
              className="group"
            >
              <div className="relative h-[180px] rounded-organic overflow-hidden mb-3">

                <Image
                  src={n.thumbnail}
                  alt={n.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/35" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                    <Play
                      size={24}
                      className="text-green-700 fill-green-700 ml-1"
                    />
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {n.duration}
                </div>
              </div>

              <div className="text-xs uppercase text-gray-500 mb-1">
                {n.date}
              </div>

              <h3 className="font-semibold group-hover:text-green-700 transition">
                {n.title}
              </h3>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}