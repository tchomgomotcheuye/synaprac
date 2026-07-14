 import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";

export default function ContactPage() {
  return (
    <>
      <Navbar active="Contact" />
      <PageHero
        crumb="Accueil / Contact"
        title="Contactez-nous"
        subtitle="Une question, un projet de partenariat ou une demande d'adhésion ? Écrivez-nous."
      />

      <Footer />
    </>
  );
}