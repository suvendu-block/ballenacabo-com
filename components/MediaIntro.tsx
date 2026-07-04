"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface MediaIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  imageSrc: string;
  imageAlt: string;
}

export default function MediaIntro({
  eyebrow,
  title,
  description,
  buttonText,
  buttonHref = "#",
  imageSrc,
  imageAlt,
}: MediaIntroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const imageEl = sectionRef.current?.querySelector("[data-animate-mi-image]");
      if (imageEl) {
        gsap.fromTo(
          imageEl,
          { clipPath: "inset(0 0 100% 0)", scale: 1.1 },
          {
            clipPath: "inset(0 0 0% 0)",
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }

      const revealEls = sectionRef.current?.querySelectorAll("[data-animate-mi-reveal]");
      if (revealEls) {
        gsap.fromTo(
          revealEls,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1,
            stagger: 0.18,
            delay: 0.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }

      const fadeEls = sectionRef.current?.querySelectorAll("[data-animate-mi]");
      if (fadeEls) {
        gsap.fromTo(
          fadeEls,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.5,
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
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Left: Eyebrow */}
          <div className="md:w-1/5" data-animate-mi>
            <p className="eyebrow-l">{eyebrow}</p>
          </div>

          {/* Center: Image */}
          <div className="md:w-2/5">
            <div className="aspect-[4/5] overflow-hidden" data-animate-mi-image>
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:w-2/5 flex flex-col justify-center">
            <div className="overflow-hidden" data-animate-mi-reveal>
              <h2 className="title-s mb-6">{title}</h2>
            </div>
            <div className="overflow-hidden" data-animate-mi-reveal>
              <p className="paragraph-l text-[var(--color-2)]/80 mb-8">{description}</p>
            </div>
            <div data-animate-mi>
              <a href={buttonHref} className="btn-secondary button-light">
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
