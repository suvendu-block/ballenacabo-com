"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface SplitContentProps {
  eyebrow?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  hasGallery?: boolean;
  themeAccent?: boolean;
}

export default function SplitContent({
  eyebrow = "",
  title,
  description,
  buttonText,
  buttonHref = "#",
  imageSrc,
  imageAlt,
  reversed = false,
  hasGallery = false,
  themeAccent = false,
}: SplitContentProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        // Curtain reveal for the image side
        const imgContainer = sectionRef.current.querySelector(".split-image-reveal");
        if (imgContainer) {
          gsap.fromTo(
            imgContainer,
            { clipPath: "inset(0 0 100% 0)" },
            {
              clipPath: "inset(0 0 0% 0)",
              duration: 1.2,
              ease: "power4.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
              },
            }
          );
        }

        // Clip-path reveal for title
        const revealEls = sectionRef.current.querySelectorAll("[data-animate-split-reveal]");
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

        // Standard fade-up for remaining elements
        const panels = sectionRef.current.querySelectorAll("[data-animate-split]");
        gsap.fromTo(
          panels,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.3,
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
      className={`relative w-full overflow-hidden ${
        themeAccent ? "bg-[var(--color-2)] text-[var(--color-1)]" : "bg-[var(--color-1)]"
      }`}
    >
      <div
        className={`flex flex-col ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        } min-h-[80vh]`}
      >
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative overflow-hidden split-image-reveal">
          <div className="w-full h-[50vh] md:h-full">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 flex items-center px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="max-w-xl">
            {hasGallery ? (
              /* Gallery layout with small images at top */
              <div className="flex gap-2 mb-8 overflow-hidden" data-animate-split>
                <div className="w-1/3 aspect-[3/4]">
                  <img
                    src="/img/home-seven.jpg"
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/3 aspect-[3/4]">
                  <img
                    src="/img/home-eight.jpg"
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ) : null}

            {eyebrow && (
              <div className="overflow-hidden mb-4" data-animate-split-reveal>
                <p
                  className={`eyebrow ${themeAccent ? "!text-[var(--color-1)]/70" : ""}`}
                >
                  {eyebrow}
                </p>
              </div>
            )}
            <h2
              className={`title-s mb-6 ${themeAccent ? "text-[var(--color-1)]" : ""}`}
              data-animate-split-reveal
            >
              {title}
            </h2>
            <p
              className={`paragraph-l mb-8 ${themeAccent ? "text-[var(--color-1)]/80" : "text-[var(--color-2)]/80"}`}
              data-animate-split
            >
              {description}
            </p>
            {buttonText && (
              <a
                href={buttonHref}
                className={`btn-secondary ${themeAccent ? "button-dark" : "button-light"}`}
                data-animate-split
              >
                {buttonText}
                <span className="btn-arrow">
                  <ArrowUpRight size={14} strokeWidth={2} absoluteStrokeWidth />
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
