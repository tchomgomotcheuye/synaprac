const TEAM = [
  { name: "Nom Prénom", role: "Président", gradient: "from-green-600 to-brown-700" },
  { name: "Nom Prénom", role: "Secrétaire Général", gradient: "from-amber-500 to-green-600" },
  { name: "Nom Prénom", role: "Trésorier Général", gradient: "from-brown-700 to-green-900" },
  {
    name: "Nom Prénom",
    role: "Chargé des Relations Extérieures",
    gradient: "from-green-500 to-amber-600",
  },
];

export function TeamGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {TEAM.map((m) => (
        <div key={m.role} className="bg-white border border-line rounded-organic p-6">
          <div className={`w-full h-[190px] rounded-blob bg-gradient-to-br ${m.gradient} mb-4`} />
          <h3 className="font-display font-semibold text-[16.5px] text-ink mb-1">{m.name}</h3>
          <div className="font-display font-semibold text-[12.5px] uppercase tracking-wide text-amber-600">
            {m.role}
          </div>
        </div>
      ))}
    </div>
  );
}