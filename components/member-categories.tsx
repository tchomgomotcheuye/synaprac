import { Truck, Recycle, Building2, Shield, Handshake, Users } from "lucide-react";

const CATEGORIES = [
  { icon: Truck, label: "Vidangeurs" },
  { icon: Recycle, label: "Collecteurs de déchets" },
  { icon: Building2, label: "Gestionnaires de décharges" },
  { icon: Shield, label: "Entreprises d'assainissement" },
  { icon: Handshake, label: "Partenaires techniques" },
  { icon: Users, label: "Membres individuels" },
];

export function MemberCategories() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {CATEGORIES.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="bg-white border border-line rounded-organic p-7 text-center"
        >
          <div className="w-[52px] h-[52px] rounded-[16px_16px_16px_4px] bg-green-100 flex items-center justify-center mx-auto mb-4">
            <Icon className="text-green-700" size={24} strokeWidth={1.7} />
          </div>
          <h3 className="font-display font-semibold text-[16px] text-ink">{label}</h3>
        </div>
      ))}
    </div>
  );
}