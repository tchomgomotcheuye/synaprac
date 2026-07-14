import { Phone, Mail, MapPin } from "lucide-react";

const DETAILS = [
  { icon: Phone, label: "Téléphone", value: "+237 6xx xx xx xx" },
  { icon: Mail, label: "E-mail", value: "contact@synaproc.cm" },
  { icon: MapPin, label: "Adresse", value: "Yaoundé, Cameroun" },
];

export function ContactDetails() {
  return (
    <div>
      <div className="inline-flex items-center gap-2 font-display font-semibold text-[12.5px] tracking-[.14em] uppercase text-amber-600 mb-3.5">
        <span className="w-[18px] h-[2px] bg-amber-500" />
        Coordonnées
      </div>
      <h2 className="font-display font-bold text-green-900 text-[26px] mb-7">
        Restons en contact
      </h2>

      <div className="flex flex-col gap-6 mb-8">
        {DETAILS.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex gap-4">
            <div className="w-[52px] h-[52px] shrink-0 rounded-[16px_16px_16px_4px] bg-green-100 flex items-center justify-center">
              <Icon className="text-green-700" size={22} strokeWidth={1.7} />
            </div>
            <div>
              <h4 className="font-display font-semibold text-[15px] text-ink mb-0.5">
                {label}
              </h4>
              <p className="text-gray-600 text-[14.5px]">{value}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="h-[180px] rounded-organic-lg border border-line flex items-center justify-center"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #E7F2E4, #E7F2E4 10px, #F2EDE1 10px, #F2EDE1 20px)",
        }}
      >
        <span className="font-display text-[12px] uppercase tracking-wide text-gray-600">
          Carte de localisation
        </span>
      </div>
    </div>
  );
}