import {useTranslations} from "next-intl";


export function Timeline() {
  const t = useTranslations("LeSyndicat.timeline");
  const HISTORY = [
  {
    year: "2021",
    title: t("2021.title"),
    text: t("2021.text"),
  },
  {
    year: "2025",
    title: t("2025.title"),
    text: t("2025.text"),
  },
  {
    year: "2026",
    title: t("2026.title"),
    text: t("2026.text"),
  },
];
  return (
    <div className="relative pl-9">
      <div className="absolute left-2 top-1.5 bottom-1.5 w-px bg-line" />
      <div className="flex flex-col gap-9">
        {HISTORY.map((item) => (
          <div key={item.year} className="relative">
            <span className="absolute -left-9 top-0.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-cream shadow-[0_0_0_2px_#2C7A34]" />
            <div className="font-display font-bold text-green-700 text-[13px] tracking-wide mb-1">
              {item.year}
            </div>
            <h3 className="font-display font-semibold text-[17px] text-ink mb-1.5">
              {item.title}
            </h3>
            <p className="text-gray-600 text-[14.5px] max-w-[560px]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}