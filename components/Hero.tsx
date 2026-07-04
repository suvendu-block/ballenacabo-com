"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        const words = textRef.current.querySelectorAll(".hero-word");
        gsap.fromTo(
          words,
          { y: 80, opacity: 0, rotateX: 15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const heroWords = [
    "Shaped",
    "by",
    "sea.",
    "Grounded",
    "in",
    "land",
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[var(--color-1)]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/video/reference/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[var(--color-2)]/45" />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 px-6 text-center">
        <h1
          ref={textRef}
          className="text-[clamp(2.5rem,8vw,5.125rem)] leading-[0.9] font-primary font-light tracking-[0.025em] text-[var(--color-1)] uppercase"
        >
          {heroWords.map((word, i) => (
            <span
              key={i}
              className="hero-word inline-block mr-[0.3em]"
              style={{ opacity: 0, transform: "translateY(80px)" }}
            >
              {word}
            </span>
          ))}
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-[var(--color-1)]/80 to-transparent" />
      </div>
    </section>
  );
}
