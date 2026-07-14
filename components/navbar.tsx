"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Le Syndicat", href: "/le-syndicat" },
  { label: "Activités & Actualités", href: "/activites-actualites" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({ active = "Accueil" }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-line">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="SYNAPROC"
            width={46}
            height={46}
            className="rounded-[12px_12px_12px_2px] object-cover"
          />
          <div className="font-display font-extrabold text-green-900 leading-tight text-[19px]">
            SYNAPRAC
            <span className="block font-body font-normal text-[10.5px] text-gray-500 tracking-wide">
              Syndicat National Autonome des Professionnels de l&apos;Assainissement
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-display font-medium text-sm py-1 ${
                link.label === active
                  ? "text-green-700 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[3px] after:rounded-full after:bg-amber-500"
                  : "text-ink hover:text-green-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="amber">Nous rejoindre</Button>
        </div>

        <button
          className="lg:hidden text-green-900"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-cream px-6 py-4 flex flex-col gap-4">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display font-medium text-sm ${
                link.label === active ? "text-green-700" : "text-ink"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="amber" className="w-full mt-2">
            Nous rejoindre
          </Button>
        </div>
      )}
    </header>
  );
}
