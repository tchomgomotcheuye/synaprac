import { useTranslations } from "next-intl";

type News = {
  date: string;
  title: string;
  gradient: string;
};

const NEWS: News[] = [];

export function NewsGridCompact() {
  const t = useTranslations("ActivitiesNews.news");
  return (
    <div>
      {NEWS.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">
            {t("empty")}
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS.map((n) => (
            <a key={n.title} href="#" className="block group">
              <div
                className={`h-[120px] rounded-organic bg-gradient-to-br ${n.gradient} mb-3 relative flex items-end p-3.5 transition-transform duration-300 group-hover:scale-[1.02]`}
              >
                <span className="font-display font-semibold text-[10.5px] uppercase tracking-wide text-white bg-black/20 px-2.5 py-1 rounded-full">
                  {t("label")}
                </span>
              </div>

              <div className="font-display font-semibold text-[11px] uppercase tracking-wide text-gray-500 mb-1.5">
                {n.date}
              </div>

              <h3 className="font-display font-semibold text-[15px] text-ink leading-snug group-hover:text-green-700 transition-colors">
                {n.title}
              </h3>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}