import Link from "next/link";
import Container from "./Container";

const quickLinks = [
  { label: "Hjem", href: "/" },
  { label: "Tjenester", href: "/tjenester" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Kontakt", href: "/kontakt" },
];

const contactInfo = [
  { label: "post@klardigital.no", href: "mailto:post@klardigital.no" },
  { label: "+47 000 00 000", href: "tel:+4700000000" },
  { label: "Oslo, Norge", href: null },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0F2B46", color: "#ffffff" }}>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 lg:py-16">
          {/* Column 1: Logo + tagline */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-0.5 text-xl mb-4 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
            >
              <span className="font-bold text-white">Klar</span>
              <span className="font-normal" style={{ color: "#93C5FD" }}>
                Digital
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mt-3"
              style={{ color: "#94A3B8" }}
            >
              Vi hjelper lokale bedrifter med å vokse digitalt gjennom
              profesjonelle nettsider og målrettet digital markedsføring.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">
              Lenker
            </h3>
            <ul className="space-y-2 list-none m-0 p-0">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                    style={{ color: "#94A3B8" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">
              Kontakt
            </h3>
            <ul className="space-y-2 list-none m-0 p-0">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm transition-colors duration-150 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                      style={{ color: "#94A3B8" }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: "#94A3B8" }}>
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">
              Sosiale medier
            </h3>
            <ul className="space-y-2 list-none m-0 p-0">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors duration-150 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                    style={{ color: "#94A3B8" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t py-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTopColor: "#1E3A5F" }}
        >
          <p className="text-sm" style={{ color: "#64748B" }}>
            &copy; {currentYear} Klar Digital. Alle rettigheter reservert.
          </p>
          <p className="text-sm" style={{ color: "#64748B" }}>
            Laget med omhu i Norge
          </p>
        </div>
      </Container>
    </footer>
  );
}
