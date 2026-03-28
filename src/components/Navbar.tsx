"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import Container from "./Container";

const navLinks = [
  { label: "Hjem", href: "/" },
  { label: "Tjenester", href: "/tjenester" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border"
      style={{ borderBottomColor: "#E2E8F0" }}
    >
      <Container>
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Hovednavigasjon"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-0.5 text-xl focus:outline-none focus:ring-2 focus:ring-accent rounded"
            style={{ color: "#0F2B46" }}
          >
            <span className="font-bold" style={{ color: "#0F2B46" }}>
              Klar
            </span>
            <span className="font-normal" style={{ color: "#2563EB" }}>
              Digital
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-150 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded"
                  style={{ color: "#0F2B46" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="/kontakt" variant="primary" size="sm">
              Kom i gang
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-surface focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}
            style={{ color: "#0F2B46" }}
          >
            <span
              className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${
                mobileOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current my-1 transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${
                mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden border-t py-4"
            style={{ borderTopColor: "#E2E8F0" }}
          >
            <ul className="flex flex-col gap-1 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-surface transition-colors"
                    style={{ color: "#0F2B46" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-3">
              <Button
                href="/kontakt"
                variant="primary"
                size="sm"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                Kom i gang
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
