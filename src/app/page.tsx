import Button from "../components/Button";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";

const services = [
  {
    id: 1,
    icon: "\u{1F310}",
    title: "Kickstart",
    price: "4 900 kr",
    description:
      "Perfekt for deg som trenger en enkel, profesjonell nettside raskt. Inkluderer design, utvikling og grunnleggende SEO.",
    href: "/tjenester#kickstart",
  },
  {
    id: 2,
    icon: "\u{1F4C8}",
    title: "Vekst",
    price: "9 900 kr",
    description:
      "For bedrifter som vil vokse. Alt i Kickstart pluss avansert SEO, kontaktskjema og ytelsesoptimalisering.",
    href: "/tjenester#vekst",
  },
  {
    id: 3,
    icon: "\u{1F680}",
    title: "Komplett",
    price: "19 900 kr",
    description:
      "Den komplette digitale pakken. Alt i Vekst pluss e-handel, booking-system eller skreddersydde funksjoner.",
    href: "/tjenester#komplett",
  },
];

const stats = [
  { value: "7 dager", label: "Leveringstid" },
  { value: "50+", label: "Fornøyde kunder" },
  { value: "95+", label: "Lighthouse-score" },
  { value: "100%", label: "Mobilvennlig" },
];

const steps = [
  {
    number: "01",
    title: "Gratis konsultasjon",
    description:
      "Vi starter med en uforpliktende samtale for å forstå dine behov og mål.",
  },
  {
    number: "02",
    title: "Design og strategi",
    description:
      "Vi lager et skreddersydd forslag med design, struktur og innholdsstrategi.",
  },
  {
    number: "03",
    title: "Utvikling",
    description:
      "Vi bygger nettsiden din med fokus på hastighet, SEO og brukervennlighet.",
  },
  {
    number: "04",
    title: "Lansering og oppfølging",
    description:
      "Vi lanserer nettsiden og gir deg opplæring så du kan oppdatere selv.",
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "Klar Digital leverte nettsiden vår på under en uke. Profesjonelt, raskt og til en veldig god pris.",
    author: "Maria Hansen",
    role: "Daglig leder, Hansen Bakeri",
  },
  {
    id: 2,
    quote:
      "Etter at vi fikk ny nettside har vi fått dobbelt så mange henvendelser. Fantastisk jobb!",
    author: "Erik Johansen",
    role: "Eier, Johansen Elektro",
  },
  {
    id: 3,
    quote:
      "Endelig en nettside vi er stolte av. Klar Digital forsto nøyaktig hva vi trengte.",
    author: "Lise Berg",
    role: "Grunnlegger, Berg Interiør",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero section */}
        <section
          className="flex items-center justify-center min-h-screen pt-16"
          style={{ backgroundColor: "#0F2B46" }}
        >
          <Container>
            <div className="flex flex-col items-center text-center py-20 lg:py-28 max-w-[48rem] mx-auto">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: "#1E3A5F", color: "#93C5FD" }}
              >
                Profesjonell digital tilstedeværelse
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Nettsider som leverer{" "}
                <span style={{ color: "#F59E0B" }}>resultater</span>
              </h1>

              <p
                className="text-lg sm:text-xl leading-relaxed mb-10 max-w-[42rem]"
                style={{ color: "#94A3B8" }}
              >
                Vi hjelper lokale bedrifter med å vokse digitalt. Få en
                profesjonell nettside som tiltrekker kunder og bygger tillit —
                levert på under 7 dager.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="#kontakt" variant="primary" size="lg">
                  Kom i gang i dag
                </Button>
                <Button
                  href="/tjenester"
                  variant="ghost"
                  size="lg"
                  className="border border-white/30 hover:bg-white/10"
                  style={{ color: "#ffffff" }}
                >
                  Se våre tjenester
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Stats bar */}
        <section style={{ backgroundColor: "#2563EB" }}>
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 lg:py-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm mt-1" style={{ color: "#BFDBFE" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Services overview */}
        <Section variant="white" id="tjenester">
          <Container>
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: "#0F2B46" }}
              >
                Våre pakker
              </h2>
              <p
                className="text-lg max-w-[42rem] mx-auto"
                style={{ color: "#64748B" }}
              >
                Velg pakken som passer din bedrift. Alle inkluderer responsivt
                design, SEO-grunnlag og personlig oppfølging.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col p-6 rounded-lg border transition-shadow duration-200 hover:shadow-md"
                  style={{
                    backgroundColor: "#F1F5F9",
                    borderColor: "#E2E8F0",
                  }}
                >
                  <div className="text-3xl mb-4" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-1"
                    style={{ color: "#0F2B46" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-2xl font-bold mb-3"
                    style={{ color: "#2563EB" }}
                  >
                    {service.price}
                  </p>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "#64748B" }}
                  >
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <Button href={service.href} variant="ghost" size="sm">
                      Les mer
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button href="/tjenester" variant="secondary" size="md">
                Se alle detaljer
              </Button>
            </div>
          </Container>
        </Section>

        {/* Process steps */}
        <Section variant="gray" id="prosess">
          <Container>
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: "#0F2B46" }}
              >
                Slik jobber vi
              </h2>
              <p
                className="text-lg max-w-[42rem] mx-auto"
                style={{ color: "#64748B" }}
              >
                Fra første samtale til ferdig nettside — en enkel prosess i fire
                steg.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full text-xl font-bold mb-4"
                    style={{ backgroundColor: "#2563EB", color: "#ffffff" }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "#0F2B46" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#64748B" }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Pricing preview / comparison */}
        <Section variant="white" id="priser">
          <Container>
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: "#0F2B46" }}
              >
                Sammenlign pakker
              </h2>
              <p
                className="text-lg max-w-[42rem] mx-auto"
                style={{ color: "#64748B" }}
              >
                Alle pakker inkluderer grunnleggende funksjoner. Oppgrader for
                mer avanserte løsninger.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr style={{ borderBottom: "2px solid #E2E8F0" }}>
                    <th
                      className="py-3 px-4 text-sm font-semibold"
                      style={{ color: "#0F2B46" }}
                    >
                      Funksjon
                    </th>
                    <th
                      className="py-3 px-4 text-sm font-semibold text-center"
                      style={{ color: "#0F2B46" }}
                    >
                      Kickstart
                    </th>
                    <th
                      className="py-3 px-4 text-sm font-semibold text-center"
                      style={{ color: "#0F2B46" }}
                    >
                      Vekst
                    </th>
                    <th
                      className="py-3 px-4 text-sm font-semibold text-center"
                      style={{ color: "#0F2B46" }}
                    >
                      Komplett
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Responsivt design", true, true, true],
                    ["Grunnleggende SEO", true, true, true],
                    ["Kontaktskjema", false, true, true],
                    ["Avansert SEO", false, true, true],
                    ["Ytelsesoptimalisering", false, true, true],
                    ["E-handel / booking", false, false, true],
                    ["Skreddersydde funksjoner", false, false, true],
                    ["Prioritert support", false, false, true],
                  ].map(([feature, kick, vekst, komplett]) => (
                    <tr
                      key={feature as string}
                      style={{ borderBottom: "1px solid #E2E8F0" }}
                    >
                      <td
                        className="py-3 px-4 text-sm"
                        style={{ color: "#0F2B46" }}
                      >
                        {feature as string}
                      </td>
                      <td className="py-3 px-4 text-center text-lg">
                        {kick ? (
                          <span style={{ color: "#059669" }} aria-label="Inkludert">
                            ✓
                          </span>
                        ) : (
                          <span style={{ color: "#CBD5E1" }} aria-label="Ikke inkludert">
                            —
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center text-lg">
                        {vekst ? (
                          <span style={{ color: "#059669" }} aria-label="Inkludert">
                            ✓
                          </span>
                        ) : (
                          <span style={{ color: "#CBD5E1" }} aria-label="Ikke inkludert">
                            —
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center text-lg">
                        {komplett ? (
                          <span style={{ color: "#059669" }} aria-label="Inkludert">
                            ✓
                          </span>
                        ) : (
                          <span style={{ color: "#CBD5E1" }} aria-label="Ikke inkludert">
                            —
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td
                      className="py-4 px-4 text-sm font-semibold"
                      style={{ color: "#0F2B46" }}
                    >
                      Pris
                    </td>
                    <td
                      className="py-4 px-4 text-center font-bold"
                      style={{ color: "#2563EB" }}
                    >
                      4 900 kr
                    </td>
                    <td
                      className="py-4 px-4 text-center font-bold"
                      style={{ color: "#2563EB" }}
                    >
                      9 900 kr
                    </td>
                    <td
                      className="py-4 px-4 text-center font-bold"
                      style={{ color: "#2563EB" }}
                    >
                      19 900 kr
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-8">
              <Button href="/tjenester" variant="primary" size="md">
                Velg din pakke
              </Button>
            </div>
          </Container>
        </Section>

        {/* Testimonials */}
        <Section variant="gray" id="anmeldelser">
          <Container>
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: "#0F2B46" }}
              >
                Hva kundene sier
              </h2>
              <p
                className="text-lg max-w-[42rem] mx-auto"
                style={{ color: "#64748B" }}
              >
                Vi er stolte av å levere resultater som gjør en forskjell.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <blockquote
                  key={t.id}
                  className="flex flex-col p-6 rounded-lg border"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#E2E8F0",
                  }}
                >
                  <p
                    className="text-sm leading-relaxed flex-1 italic mb-4"
                    style={{ color: "#0F2B46" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer>
                    <cite className="not-italic">
                      <span
                        className="block text-sm font-semibold"
                        style={{ color: "#0F2B46" }}
                      >
                        {t.author}
                      </span>
                      <span
                        className="block text-xs mt-0.5"
                        style={{ color: "#64748B" }}
                      >
                        {t.role}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA section */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: "#2563EB" }}>
          <Container>
            <div className="text-center max-w-[42rem] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Klar for å vokse digitalt?
              </h2>
              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ color: "#BFDBFE" }}
              >
                Ta kontakt i dag og få en gratis konsultasjon. Vi hjelper deg å
                finne den beste løsningen for din bedrift.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="#kontakt"
                  variant="secondary"
                  size="lg"
                  className="border-white! text-white! hover:bg-white! hover:text-accent!"
                >
                  Send oss en melding
                </Button>
                <Button
                  href="/kontakt"
                  variant="ghost"
                  size="lg"
                  className="text-white! hover:bg-white/20!"
                >
                  Kontaktside
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Inline contact form */}
        <Section variant="white" id="kontakt">
          <Container>
            <div className="max-w-[42rem] mx-auto">
              <div className="text-center mb-8">
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-4"
                  style={{ color: "#0F2B46" }}
                >
                  Ta kontakt
                </h2>
                <p className="text-lg" style={{ color: "#64748B" }}>
                  Fyll ut skjemaet så tar vi kontakt innen 24 timer.
                </p>
              </div>
              <ContactForm />
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
