import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "SYNAPRAC — Syndicat National Autonome des Professionnels de l'Assainissement du Cameroun",
  description:
    "Le SYNAPRAC fédère et représente les professionnels de l'assainissement du Cameroun.",

  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },

  openGraph: {
    title:
      "SYNAPRAC — Syndicat National Autonome des Professionnels de l'Assainissement du Cameroun",
    description:
      "Le SYNAPRAC fédère et représente les professionnels de l'assainissement du Cameroun.",
    images: [
      {
        url: "/logo.jpg",
        width: 512,
        height: 512,
        alt: "Logo SYNAPRAC",
      },
    ],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}