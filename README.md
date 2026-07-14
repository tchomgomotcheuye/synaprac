# SYNAPROC — Page Accueil

Page d'accueil du site vitrine SYNAPROC, développée avec :

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS** (tokens de couleurs personnalisés dans `tailwind.config.ts`)
- **shadcn/ui** (composants `Button` et `Card` fournis dans `components/ui/`, dans le style shadcn — ajoute-en d'autres via `npx shadcn@latest add <composant>` si besoin)
- **Framer Motion** (animations d'apparition et de survol)
- **Lucide React** (icônes)

## Installation

```bash
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:3000`.

## Structure

```
app/
  layout.tsx        → layout racine (police, métadonnées)
  page.tsx           → assemble les sections de la page Accueil
  globals.css         → directives Tailwind + police Poppins/Inter
components/
  navbar.tsx          → en-tête avec navigation responsive (menu mobile inclus)
  hero.tsx            → bannière principale animée
  presentation.tsx    → section "Présentation"
  missions.tsx        → grille des 4 missions (cartes animées en cascade)
  news.tsx             → grille des actualités récentes
  cta-band.tsx         → bandeau d'appel à l'action final
  footer.tsx           → pied de page
  ui/
    button.tsx          → composant Button (variants: default, amber, outline, outline-light, ghost)
    card.tsx             → composant Card
lib/
  utils.ts             → fonction `cn()` pour fusionner les classes Tailwind
public/
  logo.jpg             → logo du SYNAPROC
```

## Notes pour la suite

- **Liens de navigation** : la Navbar référence déjà les routes `/le-syndicat`, `/bureau`, `/membres`, `/activites`, `/actualites`, `/galerie`, `/contact` — il ne reste qu'à créer ces pages dans `app/` en suivant le même modèle (Navbar + sections + Footer).
- **Images** : les blocs dégradés (`bg-gradient-to-br from-... to-...`) sont des placeholders à remplacer par de vraies photos via `next/image` une fois fournies par le SYNAPROC.
- **Couleurs de marque** : tous les tokens (`green-900`, `amber-500`, `brown-700`, `cream`, `ink`, etc.) sont centralisés dans `tailwind.config.ts` — modifie-les à un seul endroit si la charte évolue.
- **Forme "blob"** : la classe `rounded-blob` (et sa variante `rounded-blob-alt`) reproduit le cadre organique inspiré du logo, utilisée sur les visuels de la page d'accueil et à réutiliser sur les autres pages (Bureau, Galerie, etc.) pour garder une identité cohérente.
- **Police** : le projet utilise une pile de polices système par défaut (`ui-sans-serif`, `system-ui`) pour rester 100% autonome sans dépendance réseau. Pour utiliser Poppins + Inter comme prévu dans la charte, ajoute-les proprement avec `next/font/google` dans `app/layout.tsx` (recommandé, optimisé par Next.js) plutôt que via un `@import` CSS :

```tsx
import { Poppins, Inter } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["500","600","700","800"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], weight: ["400","500","600"], variable: "--font-body" });
```

Puis référence `--font-display` / `--font-body` dans `tailwind.config.ts` (`fontFamily.display` / `fontFamily.body`).
