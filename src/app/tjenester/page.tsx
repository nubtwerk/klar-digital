import Button from "../../components/Button";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tjenester — Klar Digital",
  description:
    "Velg den pakken som passer din bedrift. Fra enkel nettside til komplett digital l\u00F8sning.",
};

const packages = [
  {
    id: "kickstart",
    name: "Kickstart",
    price: "4 900 kr",
    description:
      "Perfekt for deg som trenger en enkel, profesjonell nettside raskt.",
    features: [
      "Inntil 5 sider",
      "Responsivt design",
      "Grunnleggende SEO-oppsett",
      "Mobilvennlig",
      "SSL-sertifikat",
      "Leveringstid: 5\u20137 dager",
    ],
    highlighted: false,
  },
  {
    id: "vekst",
    name: "Vekst",
    price: "9 900 kr",
    description:
      "For bedrifter som \u00F8nsker \u00E5 vokse og f\u00E5 flere kunder p\u00E5 nett.",
    features: [
      "Alt i Kickstart",
      "Inntil 10 sider",
      "Avansert SEO og Google-optimalisering",
      "Kontaktskjema med e-postvarsling",
      "Ytelsesoptimalisering (95+ Lighthouse)",
      "Google Analytics-integrasjon",
      "Leveringstid: 7\u201310 dager",
    ],
    highlighted: true,
  },
  {
    id: "komplett",
    name: "Komplett",
    price: "19 900 kr",
    description:
      "Den komplette digitale pakken for ambisi\u00F8se bedrifter.",
    features: [
      "Alt i Vekst",
      "Ubegrenset antall sider",
      "E-handel eller booking-system",
      "Skreddersydde funksjoner",
      "CMS for enkel innholdsredigering",
      "Prioritert support i 3 m\u00E5neder",
      "Leveringstid: 10\u201314 dager",
    ],
    highlighted: false,
  },
];

const comparisonRows = [
  { feature: "Antall sider", kickstart: "5", vekst: "10", komplett: "Ubegrenset" },
  { feature: "Responsivt design", kickstart: true, vekst: true, komplett: true },
  { feature: "Grunnleggende SEO", kickstart: true, vekst: true, komplett: true },
  { feature: "Avansert SEO", kickstart: false, vekst: true, komplett: true },
  { feature: "Kontaktskjema", kickstart: false, vekst: true, komplett: true },
  { feature: "Ytelsesoptimalisering", kickstart: false, vekst: true, komplett: true },
  { feature: "Google Analytics", kickstart: false, vekst: true, komplett: true },
  { feature: "E-handel / booking", kickstart: false, vekst: false, komplett: true },
  { feature: "CMS", kickstart: false, vekst: false, komplett: true },
  { feature: "Skreddersydde funksjoner", kickstart: false, vekst: false, komplett: true },
  { feature: "Prioritert support", kickstart: false, vekst: false, komplett: true },
];

function renderCell(value: boolean | string) {
  if (typeof value === "string") {
    return (
      <span className="text-sm font-medium" style={{ color: "#0F2B46" }}>
        {value}
      </span>
    );
  }
  return value ? (
    <span style={{ color: "#059669" }} aria-label="Inkludert">\u2713</span>
  ) : (
    <span style={{ color: "#CBD5E1" }} aria-label="Ikke inkludert">—</span>
  );
}

export default function TjenesterPage() {
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
                V\u00E5re tjenester
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: "#94A3B8" }}>
                Vi tilbyr tre pakker tilpasset ulike behov og budsjetter. Alle
                inkluderer personlig oppf\u00F8lging og norsk kvalitet.
              </p>
            </div>
          </Container>
        </section>

        {/* Package cards */}
        <Section variant="white">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  id={pkg.id}
                  className="flex flex-col p-8 rounded-lg border-2 transition-shadow duration-200"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: pkg.highlighted ? "#2563EB" : "#E2E8F0",
                    boxShadow: pkg.highlighted
                      ? "0 8px 24px rgba(37, 99, 235, 0.15)"
                      : "0 1px 3px rgba(0,0,0,0.08)",
                  }}
                >
                  {pkg.highlighted && (
                    <span
                      className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold mb-4"
                      style={{ backgroundColor: "#EFF6FF", color: "#2563EB" }}
                    >
                      Mest popul\u00E6r
                    </span>
                  )}
                  <h2
                    className="text-2xl font-bold mb-1"
                    style={{ color: "#0F2B46" }}
                  >
                    {pkg.name}
                  </h2>
                  <p
                    className="text-3xl font-bold mb-4"
                    style={{ color: "#2563EB" }}
                  >
                    {pkg.price}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "#64748B" }}
                  >
                    {pkg.description}
                  </p>
                  <ul className="space-y-3 flex-1 mb-8">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "#0F2B46" }}
                      >
                        <span
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: "#059669" }}
                          aria-hidden="true"
                        >
                          \u2713
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/kontakt"
                    variant={pkg.highlighted ? "primary" : "secondary"}
                    size="lg"
                    className="w-full"
                  >
                    Velg {pkg.name}
                  </Button>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Comparison table */}
        <Section variant="gray">
          <Container>
            <h2
              className="text-3xl font-bold text-center mb-8"
              style={{ color: "#0F2B46" }}
            >
              Detaljert sammenligning
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr style={{ borderBottom: "2px solid #E2E8F0" }}>
                    <th className="py-3 px-4 text-sm font-semibold" style={{ color: "#0F2B46" }}>
                      Funksjon
                    </th>
                    <th className="py-3 px-4 text-sm font-semibold text-center" style={{ color: "#0F2B46" }}>
                      Kickstart
                    </th>
                    <th className="py-3 px-4 text-sm font-semibold text-center" style={{ color: "#2563EB" }}>
                      Vekst
                    </th>
                    <th className="py-3 px-4 text-sm font-semibold text-center" style={{ color: "#0F2B46" }}>
                      Komplett
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} style={{ borderBottom: "1px solid #E2E8F0" }}>
                      <td className="py-3 px-4 text-sm" style={{ color: "#0F2B46" }}>
                        {row.feature}
                      </td>
                      <td className="py-3 px-4 text-center text-lg">{renderCell(row.kickstart)}</td>
                      <td className="py-3 px-4 text-center text-lg">{renderCell(row.vekst)}</td>
                      <td className="py-3 px-4 text-center text-lg">{renderCell(row.komplett)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: "#2563EB" }}>
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Usikker p\u00E5 hvilken pakke?
              </h2>
              <p className="text-lg mb-8" style={{ color: "#BFDBFE" }}>
                Ta kontakt for en gratis og uforpliktende konsultasjon. Vi
                hjelper deg \u00E5 finne riktig l\u00F8sning.
              </p>
              <Button
                href="/kontakt"
                variant="secondary"
                size="lg"
                className="border-white! text-white! hover:bg-white! hover:text-accent!"
              >
                Kontakt oss
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
