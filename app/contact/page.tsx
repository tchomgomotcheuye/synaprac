import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { ContactDetails } from "@/components/contact-details";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <>
      <Navbar active="Contact" />
      <PageHero
        crumb="Accueil / Contact"
        title="Contactez-nous"
        subtitle="Une question, un projet de partenariat ou une demande d'adhésion ? Écrivez-nous."
      />

      <main>
        <section className="py-16 lg:py-20">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-14">
            <ContactDetails />
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}