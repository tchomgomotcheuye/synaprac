const NEWS = [
  { date: "12 juin 2026", title: "Journée de sensibilisation à Douala", gradient: "from-green-600 to-brown-700" },
  { date: "2 juin 2026", title: "Nouveau partenariat institutionnel", gradient: "from-amber-500 to-green-600" },
  { date: "20 mai 2026", title: "Formation des vidangeurs à Yaoundé", gradient: "from-brown-700 to-green-900" },
  { date: "10 mai 2026", title: "Assemblée générale annuelle", gradient: "from-green-500 to-amber-600" },
];

export function NewsGridCompact() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {NEWS.map((n) => (
        <a key={n.title} href="#" className="block group">
          <div className={`h-[120px] rounded-organic bg-gradient-to-br ${n.gradient} mb-3 relative flex items-end p-3.5 transition-transform duration-300 group-hover:scale-[1.02]`}>
            <span className="font-display font-semibold text-[10.5px] uppercase tracking-wide text-white bg-black/20 px-2.5 py-1 rounded-full">
              Actualité
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
  );
}