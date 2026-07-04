"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ContentIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
}

export default function ContentIntro({
  eyebrow,
  title,
  description,
  buttonText,
  buttonHref = "#",
}: ContentIntroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const revealEls = sectionRef.current?.querySelectorAll("[data-animate-ci-reveal]");
      if (revealEls) {
        gsap.fromTo(
          revealEls,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1,
            stagger: 0.18,
            ease: "power4.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }

      const fadeEls = sectionRef.current?.querySelectorAll("[data-animate-ci]");
      if (fadeEls) {
        gsap.fromTo(
          fadeEls,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--color-1)] py-20 md:py-32"
    >
      <div className="max-w-[var(--size-container-max)] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:gap-20">
          {/* Left: Eyebrow */}
          <div className="md:w-1/4 mb-6 md:mb-0 overflow-hidden" data-animate-ci>
            <p className="eyebrow-l">{eyebrow}</p>
          </div>

          {/* Right: Content */}
          <div className="md:w-3/4 max-w-3xl">
            <div className="overflow-hidden" data-animate-ci-reveal>
              <h2 className="title-s mb-8">{title}</h2>
            </div>
            <div className="overflow-hidden" data-animate-ci-reveal>
              <p className="paragraph-l text-[var(--color-2)]/80 mb-10 max-w-2xl">
                {description}
              </p>
            </div>
            <div data-animate-ci>
              <a
                href={buttonHref}
                className="btn-secondary button-light"
              >
                {buttonText}
                <span className="btn-arrow">
                  <ArrowUpRight size={14} strokeWidth={2} absoluteStrokeWidth />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
