import { useTranslations } from "next-intl";

export function StatsRow() {
  const t = useTranslations("ActivitiesNews.stats");

const STATS = [
  {
    value: "40+",
    label: t("actions"),
    color: "text-green-700",
  },
  {
    value: "12",
    label: t("regions"),
    color: "text-amber-600",
  },
  {
    value: "300+",
    label: t("trained"),
    color: "text-brown-700",
  },
];
  return (
    <div className="grid grid-cols-3 gap-6 mt-11 text-center">
      {STATS.map((s) => (
        <div key={s.label}>
          <div className={`font-display font-bold text-[32px] lg:text-[38px] ${s.color}`}>
            {s.value}
          </div>
          <p className="text-gray-600 text-sm">{s.label}</p>
        </div>
      ))}
    </div>
  );
}