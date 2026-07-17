const PROJECTS = [
  {
    title: "Campagne de sensibilisation",
    meta: "Douala, 2026",
    gradient: "from-green-600 to-brown-700",
  },
  {
    title: "Formation des vidangeurs",
    meta: "Yaoundé, 2026",
    gradient: "from-amber-500 to-green-600",
  },
  {
    title: "Partenariat communal",
    meta: "Bafoussam, 2025",
    gradient: "from-brown-700 to-green-900",
  },
];

export function ProjectsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {PROJECTS.map((p) => (
        <a key={p.title} href="#" className="block group">
          <div
            className={`h-[170px] rounded-organic bg-gradient-to-br ${p.gradient} mb-4 transition-transform duration-300 group-hover:scale-[1.02]`}
          />
          <div className="font-display font-semibold text-[11.5px] uppercase tracking-wide text-gray-500 mb-2">
            {p.meta}
          </div>
          <h3 className="font-display font-semibold text-[16.5px] text-ink group-hover:text-green-700 transition-colors">
            {p.title}
          </h3>
        </a>
      ))}
    </div>
  );
}