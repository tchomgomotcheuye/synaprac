import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SYNAPROC — Syndicat National Autonome des Professionnels de l'Assainissement",
  description:
    "Le SYNAPROC fédère et représente les professionnels de l'assainissement du Cameroun.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="bg-cream text-ink font-body antialiased">{children}</body>
    </html>
  );
}
