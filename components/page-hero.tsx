export function PageHero({
  crumb,
  title,
  subtitle,
}: {
  crumb: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-700 to-green-600 text-white">
      <div className="absolute -right-24 -top-24 w-[340px] h-[340px] rounded-full bg-white/[0.06]" />
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-12 py-14 lg:py-16">
        <div className="font-display text-[12.5px] text-green-100/80 tracking-wide mb-3.5">
          {crumb}
        </div>
        <h1 className="font-display font-bold text-[30px] lg:text-[38px] mb-2.5">
          {title}
        </h1>
        <p className="text-green-100/90 max-w-[560px]">{subtitle}</p>
      </div>
    </section>
  );
}