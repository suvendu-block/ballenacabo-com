"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Location", href: "/location" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!overlayRef.current || !linksRef.current || !footerRef.current) return;

    const linkEls = linksRef.current.querySelectorAll("a");
    const footerEls = footerRef.current.querySelectorAll("a");

    // Build timeline in closed state
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      overlayRef.current,
      { clipPath: "inset(0 0 100% 0)" },
      { clipPath: "inset(0 0 0% 0)", duration: 0.6, ease: "power4.inOut" }
    );

    tl.fromTo(
      linkEls,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: "power3.out" },
      "-=0.25"
    );

    tl.fromTo(
      footerEls,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "power3.out" },
      "-=0.2"
    );

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (!timelineRef.current) return;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      timelineRef.current.play();
    } else {
      document.body.style.overflow = "";
      timelineRef.current.reverse();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 py-1 transition-all duration-500 md:px-6 md:py-2 bg-transparent">
        <nav className="mx-auto flex max-w-[var(--size-container-max)] items-center justify-between gap-3 rounded-full bg-[#4F4334]/70 px-3 py-1 shadow-[0_10px_35px_rgba(3,9,13,0.18)] backdrop-blur-xl md:px-5">
          <a
            href="https://www.opentable.com.mx/r/ballena-reservations-san-jose-del-cabo?restref=1474057&lang=es-MX&ot_source=Restaurant%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-2 py-1 text-[0.55rem] font-primary uppercase tracking-[0.25em] text-[var(--color-1)] transition-all duration-300 hover:text-[var(--color-3)] sm:px-3 sm:py-1.5 sm:text-[0.62rem] sm:tracking-[0.3em]"
          >
            Book now
            <ArrowUpRight size={10} strokeWidth={2} absoluteStrokeWidth />
          </a>

          <div className="flex flex-1 justify-center md:flex-none md:flex-1">
            <a href="/" className="flex h-8 items-center justify-center">
              <span className="text-base font-primary uppercase tracking-[0.28em] text-[var(--color-1)]">
                BALLENA
              </span>
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-8 w-8 cursor-pointer items-center justify-center text-[var(--color-1)] transition-all duration-300 hover:text-[var(--color-3)]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={16} strokeWidth={1.5} /> : <Menu size={16} strokeWidth={1.5} />}
          </button>
        </nav>
      </header>

      {/* Full-screen Menu Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[var(--color-2)] text-[var(--color-1)]"
        style={{ clipPath: "inset(0 0 100% 0)", pointerEvents: menuOpen ? "auto" : "none" }}
      >
        <nav ref={linksRef} className="flex w-full flex-col items-center gap-6 text-center md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-center text-[clamp(1.5rem,3vw,2.25rem)] font-primary uppercase tracking-[0.12em] text-[var(--color-1)] transition-colors duration-300 hover:text-[var(--color-3)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div ref={footerRef} className="absolute bottom-16 flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <a
            href="https://www.instagram.com/ballenacabo/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-mini text-[var(--color-1)]/80 transition-colors hover:text-[var(--color-3)]"
          >
            Instagram
          </a>
          <a
            href="https://giftup.app/place-order/0d69941b-0e23-4dd9-2090-08de109bf43d?platform=hosted"
            target="_blank"
            rel="noopener noreferrer"
            className="link-mini text-[var(--color-1)]/80 transition-colors hover:text-[var(--color-3)]"
          >
            Gift cards
          </a>
        </div>
      </div>
    </>
  );
}
