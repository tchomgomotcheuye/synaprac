import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Presentation } from "@/components/presentation";
import { Missions } from "@/components/missions";
import { GalleryCarousel } from "@/components/gallery-carousel";
import { CtaBand } from "@/components/cta-band";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar active="Accueil" />
      <main>
        <Hero />
        <Presentation />
        <Missions />
        <GalleryCarousel />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}