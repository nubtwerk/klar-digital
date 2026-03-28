import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import ContactForm from "../../components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — Klar Digital",
  description:
    "Ta kontakt med Klar Digital for en gratis konsultasjon. Vi svarer innen 24 timer.",
};

export default function KontaktPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: "#0F2B46" }}
        >
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Kontakt oss
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: "#94A3B8" }}>
                Vi h\u00F8rer gjerne fra deg. Send oss en melding, s\u00E5 tar vi kontakt
                innen 24 timer.
              </p>
            </div>
          </Container>
        </section>

        <Section variant="white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact form */}
              <div>
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: "#0F2B46" }}
                >
                  Send oss en melding
                </h2>
                <ContactForm />
              </div>

              {/* Contact info + map placeholder */}
              <div>
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: "#0F2B46" }}
                >
                  Kontaktinformasjon
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5" aria-hidden="true">
                      {"\u{1F4E7}"}
                    </span>
                    <div>
                      <h3
                        className="text-sm font-semibold mb-1"
                        style={{ color: "#0F2B46" }}
                      >
                        E-post
                      </h3>
                      <a
                        href="mailto:post@klardigital.no"
                        className="text-sm underline"
                        style={{ color: "#2563EB" }}
                      >
                        post@klardigital.no
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5" aria-hidden="true">
                      {"\u{1F4DE}"}
                    </span>
                    <div>
                      <h3
                        className="text-sm font-semibold mb-1"
                        style={{ color: "#0F2B46" }}
                      >
                        Telefon
                      </h3>
                      <a
                        href="tel:+4700000000"
                        className="text-sm underline"
                        style={{ color: "#2563EB" }}
                      >
                        +47 000 00 000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5" aria-hidden="true">
                      {"\u{1F4CD}"}
                    </span>
                    <div>
                      <h3
                        className="text-sm font-semibold mb-1"
                        style={{ color: "#0F2B46" }}
                      >
                        Adresse
                      </h3>
                      <p className="text-sm" style={{ color: "#64748B" }}>
                        Oslo, Norge
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5" aria-hidden="true">
                      {"\u{1F553}"}
                    </span>
                    <div>
                      <h3
                        className="text-sm font-semibold mb-1"
                        style={{ color: "#0F2B46" }}
                      >
                        \u00C5pningstider
                      </h3>
                      <p className="text-sm" style={{ color: "#64748B" }}>
                        Mandag\u2013Fredag: 09:00\u201317:00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div
                  className="mt-8 rounded-lg overflow-hidden border"
                  style={{ borderColor: "#E2E8F0" }}
                >
                  <div
                    className="h-64 flex items-center justify-center"
                    style={{ backgroundColor: "#F1F5F9" }}
                  >
                    <p className="text-sm" style={{ color: "#64748B" }}>
                      Kart kommer snart
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
