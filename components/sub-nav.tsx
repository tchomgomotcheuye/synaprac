"use client";

import { useEffect, useState } from "react";

type Tab = { id: string; label: string };

export function SubNav({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-160px 0px -60% 0px", threshold: 0 }
    );
    tabs.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="sticky top-[57px] sm:top-[65px] lg:top-[79px] z-40 bg-cream/95 backdrop-blur border-b border-line py-4">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 flex flex-wrap gap-2.5">
        {tabs.map((t) => (
          
            <a
            key={t.id}
            href={`#${t.id}`}
            className={`font-display font-semibold text-[13px] px-5 py-2.5 rounded-full border-[1.5px] transition-colors ${
              active === t.id
                ? "bg-green-700 border-green-700 text-white"
                : "border-line text-gray-600 hover:border-green-700 hover:text-green-700"
            }`}
          >
            {t.label}
          </a>
        ))}
      </div>
    </div>
  );
}