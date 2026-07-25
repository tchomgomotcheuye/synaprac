import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const NEWS = {
  "campagne-sensibilisation": {
    title: "Bangangte passe à l'action",
    date: "20 Juillet 2026",
    video: "/s1.mp4",
    description:
      "Et si les déchets cessaient d'être un problème pour devenir une opportunité de développement ? À Bangangté, cette question mobilise depuis ce jeudi autorités locales, experts et acteurs de la société civile. Pendant deux jours, ils réfléchissent aux mécanismes susceptibles d'améliorer la gestion des déchets urbains tout en favorisant l'entrepreneuriat et l'emploi des jeunes. Une initiative de la Fondation Friedrich-Ebert Stiftung en collaboration avec la mairie de Bangangté. Reportage GAYUS BANG BANG,,",
  },

  "ceremonie-officielle": {
    title: "Dechet urbain : Bangangte passe à l'action",
    date: "18 Juillet 2026",
    video: "/s2.mp4",
    description:
      "Et si les déchets cessaient d'être un problème pour devenir une opportunité de développement ? À Bangangté, cette question mobilise depuis ce jeudi autorités locales, experts et acteurs de la société civile. Pendant deux jours, ils réfléchissent aux mécanismes susceptibles d'améliorer la gestion des déchets urbains tout en favorisant l'entrepreneuriat et l'emploi des jeunes. Une initiative de la Fondation Friedrich-Ebert Stiftung en collaboration avec la mairie de Bangangté. Reportage GAYUS BANG BANG",
  },
};

export default async function NewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = NEWS[slug as keyof typeof NEWS];

  if (!article) notFound();

  return (
    <main className="max-w-5xl mx-auto py-12 px-6">

        <Link
            href="/activites-actualites"
            className="mb-6 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-green-700 hover:bg-green-50 transition"
            >
            <ArrowLeft size={18} />
        </Link>

      <h1 className="text-4xl font-bold mb-2">
        {article.title}
      </h1>

      <p className="text-gray-500 mb-8">
        {article.date}
      </p>

      <video
        controls
        poster="logo.jpg"
        className="w-full rounded-2xl shadow-lg"
      >
        <source src={article.video} type="video/mp4" />
      </video>

      <div className="mt-10 prose max-w-none">
        <p>{article.description}</p>
      </div>

    </main>
  );
}