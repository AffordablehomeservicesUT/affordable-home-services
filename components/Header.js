"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Christmas Lighting", href: "/christmas-lighting" },
  { label: "Permanent Lighting", href: "/permanent-lighting" },
  { label: "Solar Services", href: "/solar-services" },
  { label: "Exterior Cleaning", href: "/exterior-cleaning" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__row">
        <a href="/" className="site-header__logo">
          <Image
            src="/images/logo/AHS-Logo-Horizontal-Dark.png"
            alt="Affordable Home Services"
            width={220}
            height={48}
            priority
            style={{ height: "40px", width: "auto" }}
          />
        </a>

        {/* Desktop navigation */}
        <nav className="site-header__nav" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a href="/request-quote" className="btn btn--gold site-header__cta">
            Get a Free Quote
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="site-header__menu-icon" data-open={menuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      <nav
        id="mobile-nav"
        className="mobile-nav"
        data-open={menuOpen}
        aria-label="Mobile"
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/request-quote"
          className="btn btn--gold mobile-nav__cta"
          onClick={() => setMenuOpen(false)}
        >
          Get a Free Quote
        </a>
      </nav>
    </header>
  );
}
