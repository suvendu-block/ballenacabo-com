"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-2)] text-[var(--color-1)]">
      <div className="max-w-[var(--size-container-max)] mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-16">
          <div className="md:w-1/3">
            <svg viewBox="0 0 150 40" fill="none" className="w-32 mb-6">
              <text
                x="50%"
                y="50%"
                dominantBaseline="central"
                textAnchor="middle"
                className="text-xl font-primary tracking-[0.15em] fill-[var(--color-1)]"
              >
                BALLENA
              </text>
            </svg>
            <p className="paragraph-m text-[#7D7D79] max-w-sm">
              Driven by a passion for cuisine and genuine hospitality, we create
              memorable dining experiences throughout Mexico and into the United
              States, spanning 16 culinary concepts.
            </p>
            <a
              href="https://www.grupohunan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary button-light mt-6 inline-flex"
            >
              GRUPO HUNAN
              <span className="btn-arrow">
                <ArrowUpRight size={14} strokeWidth={2} absoluteStrokeWidth />
              </span>
            </a>
          </div>

          {/* Navigation + Newsletter */}
          <div className="flex-1 flex flex-col md:flex-row gap-10 md:gap-20">
            {/* Nav */}
            <div>
              <p className="eyebrow text-[var(--color-1)]/60 mb-6">NAVIGATION</p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Events", href: "/events" },
                  { label: "Menu", href: "/menu" },
                  { label: "Gallery", href: "/gallery" },
                  { label: "Location", href: "/location" },
                  { label: "About", href: "/about" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="link-mini text-[var(--color-1)] hover:text-[var(--color-3)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3 mt-8">
                <li>
                  <a
                    href="https://www.instagram.com/ballenacabo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-mini text-[var(--color-1)] hover:text-[var(--color-3)] transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://giftup.app/place-order/0d69941b-0e23-4dd9-2090-08de109bf43d?platform=hosted"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-mini text-[var(--color-1)] hover:text-[var(--color-3)] transition-colors"
                  >
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="flex-1 max-w-md">
              <p className="eyebrow text-[var(--color-1)]/60 mb-6">NEWSLETTER</p>
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="bg-transparent border-b border-[var(--color-1)]/30 pb-2 font-primary text-sm tracking-widest uppercase text-[var(--color-1)] placeholder:text-[var(--color-1)]/40 outline-none focus:border-[var(--color-3)] transition-colors"
                />
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  className="bg-transparent border-b border-[var(--color-1)]/30 pb-2 font-primary text-sm tracking-widest uppercase text-[var(--color-1)] placeholder:text-[var(--color-1)]/40 outline-none focus:border-[var(--color-3)] transition-colors"
                />
                <input
                  type="text"
                  placeholder="LAST NAME"
                  className="bg-transparent border-b border-[var(--color-1)]/30 pb-2 font-primary text-sm tracking-widest uppercase text-[var(--color-1)] placeholder:text-[var(--color-1)]/40 outline-none focus:border-[var(--color-3)] transition-colors"
                />
                <button
                  type="submit"
                  className="btn-secondary button-light self-start mt-2"
                >
                  SUBSCRIBE
                  <span className="btn-arrow">
                    <ArrowUpRight size={14} strokeWidth={2} absoluteStrokeWidth />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10 border-t border-[var(--color-1)]/10">
          <div className="flex items-center gap-4 text-xs text-[var(--color-1)]/40 font-primary tracking-widest uppercase">
            <span>BALLENA © GRUPO HUNAN</span>
            <span className="w-px h-3 bg-[var(--color-1)]/20" />
            <a href="https://www.grupohunan.com/aviso-privacidad.php" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-3)] transition-colors">
              Privacy Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
