"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  buttonHref = "#",
}: PageHeroProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const children = contentRef.current.children;
    gsap.fromTo(
      children,
      { clipPath: "inset(0 0 100% 0)" },
      {
        clipPath: "inset(0 0 0% 0)",
        duration: 1,
        stagger: 0.15,
        delay: 0.3,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-[var(--color-2)] text-[var(--color-1)]">
      <img src={imageSrc} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[var(--color-2)]/55" />
      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-[var(--size-container-max)] items-end px-6 py-24 md:px-10 lg:px-12">
        <div ref={contentRef} className="max-w-3xl">
          <p className="eyebrow mb-4 text-[var(--color-1)]/80">{eyebrow}</p>
          <h1 className="title-m mb-6 max-w-3xl">{title}</h1>
          <p className="paragraph-l mb-8 max-w-2xl text-[var(--color-1)]/85">{description}</p>
          {buttonText && (
            <a href={buttonHref} className="btn-secondary button-dark">
              {buttonText}
              <span className="btn-arrow">
                <ArrowUpRight size={14} strokeWidth={2} absoluteStrokeWidth />
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
