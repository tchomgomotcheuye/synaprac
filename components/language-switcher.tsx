"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const pathWithoutLocale = pathname.replace(/^\/(fr|en)/, "");

  return (
    <div className="flex items-center gap-2">
      <Link href={`/fr${pathWithoutLocale}`}>🇫🇷 FR</Link>
      <Link href={`/en${pathWithoutLocale}`}>🇬🇧 EN</Link>
    </div>
  );
}