import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import Button from "../../components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss — Klar Digital",
  description:
    "Lær mer om Klar Digital — et norsk digitalbyrå som hjelper lokale bedrifter med å vokse på nett.",
};

const values = [
  {
    title: "Enkelhet",
    description:
      "Vi fjerner det unødvendige. Hvert element på nettsiden din har en jobb å gjøre.",
    icon: "✨",
  },
  {
    title: "Klarhet",
    description:
      "Tydelig kommunikasjon, ren design og ingen sjargong. Vi snakker ditt språk.",
    icon: "\u{1F4A1}",
  },
  {
    title: "Hastighet",
    description:
      "Rask levering, raske nettsider og raske beslutninger. Vi verdsetter tiden din.",
    icon: "⚡",
  },
  {
    title: "Profesjonalitet",
    description:
      "Polert og tilgjengelig. Aldri stivt, aldri sløvt. Alltid pålitelig.",
    icon: "\u{1F3AF}",
  },
];

export default function OmOssPage() {
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
                Om Klar Digital
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: "#94A3B8" }}>
                Vi er et norsk digitalbyrå med én klar misjon: hjelpe lokale
                bedrifter med å lykkes på nett.
              </p>
            </div>
          </Container>
        </section>

        {/* Story */}
        <Section variant="white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "#0F2B46" }}
              >
                Vår historie
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#64748B" }}>
                <p>
                  Klar Digital ble grunnlagt med en enkel observasjon: altfor mange
                  lokale bedrifter sliter med å få en profesjonell digital
                  tilstedeværelse. Enten er løsningene for dyre, for
                  kompliserte, eller tar for lang tid.
                </p>
                <p>
                  Vi bestemte oss for å gjøre det annerledes. Ved å kombinere
                  moderne teknologi med skandinavisk designfilosofi leverer vi
                  nettsider som ser profesjonelle ut, laster raskt og — viktigst
                  av alt — gir resultater.
                </p>
                <p>
                  Vår tilnærming er enkel: vi lytter til dine behov, designer en
                  løsning som passer, og leverer den på rekordtid. Ingen
                  overraskelser, ingen skjulte kostnader, bare ren verdi.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Values */}
        <Section variant="gray">
          <Container>
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: "#0F2B46" }}
              >
                Våre verdier
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
                Alt vi gjør er forankret i fire kjerneverdier.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="p-6 rounded-lg border text-center"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#E2E8F0",
                  }}
                >
                  <div className="text-3xl mb-4" aria-hidden="true">
                    {v.icon}
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "#0F2B46" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Why Klar Digital */}
        <Section variant="white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl font-bold mb-6 text-center"
                style={{ color: "#0F2B46" }}
              >
                Hvorfor velge Klar Digital?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Rask levering",
                    desc: "De fleste nettsider er klare på under 7 dager.",
                  },
                  {
                    title: "Faste priser",
                    desc: "Ingen timepriser eller overraskelser. Du vet hva du betaler.",
                  },
                  {
                    title: "Norsk kvalitet",
                    desc: "Designet og utviklet i Norge, for norske bedrifter.",
                  },
                  {
                    title: "Personlig oppfølging",
                    desc: "Du får en fast kontaktperson gjennom hele prosessen.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 items-start"
                  >
                    <span
                      className="mt-1 flex-shrink-0 text-lg"
                      style={{ color: "#059669" }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <div>
                      <h3
                        className="text-base font-semibold mb-1"
                        style={{ color: "#0F2B46" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm" style={{ color: "#64748B" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Team placeholder */}
        <Section variant="gray">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: "#0F2B46" }}
              >
                Teamet
              </h2>
              <p className="text-lg mb-8" style={{ color: "#64748B" }}>
                Vi er et lite, dedikert team med stor lidenskap for digital
                verdiskaping. Mer info kommer snart.
              </p>
              <Button href="/kontakt" variant="primary" size="md">
                Bli kjent med oss
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
