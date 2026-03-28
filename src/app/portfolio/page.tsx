import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import Button from "../../components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Klar Digital",
  description:
    "Se v\u00E5re tidligere prosjekter og hva vi kan gj\u00F8re for din bedrift.",
};

const placeholders = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Prosjekt ${i + 1}`,
}));

export default function PortfolioPage() {
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
                Portfolio
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: "#94A3B8" }}>
                Se hva vi har skapt for andre bedrifter.
              </p>
            </div>
          </Container>
        </section>

        <Section variant="white">
          <Container>
            <div className="text-center mb-12">
              <span
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: "#FEF3C7", color: "#92400E" }}
              >
                Kommer snart
              </span>
              <h2
                className="text-2xl font-bold mt-6 mb-4"
                style={{ color: "#0F2B46" }}
              >
                Vi jobber med \u00E5 samle v\u00E5re beste prosjekter
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
                Vi er i ferd med \u00E5 dokumentere v\u00E5re prosjekter. I mellomtiden kan
                du ta kontakt for \u00E5 h\u00F8re mer om hva vi kan gj\u00F8re for deg.
              </p>
            </div>

            {/* Placeholder grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {placeholders.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg overflow-hidden border"
                  style={{ borderColor: "#E2E8F0" }}
                >
                  <div
                    className="h-48 flex items-center justify-center"
                    style={{ backgroundColor: "#F1F5F9" }}
                  >
                    <span className="text-4xl" style={{ color: "#CBD5E1" }} aria-hidden="true">
                      {"\u{1F5BC}\uFE0F"}
                    </span>
                  </div>
                  <div className="p-4">
                    <div
                      className="h-4 w-2/3 rounded mb-2"
                      style={{ backgroundColor: "#E2E8F0" }}
                    />
                    <div
                      className="h-3 w-full rounded"
                      style={{ backgroundColor: "#F1F5F9" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button href="/kontakt" variant="primary" size="lg">
                Ta kontakt
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
