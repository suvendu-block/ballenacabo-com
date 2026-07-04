"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FullImageProps {
  src: string;
  alt: string;
  eyebrow?: string;
  title?: string;
}

export default function FullImage({ src, alt, eyebrow, title }: FullImageProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        const img = sectionRef.current.querySelector("img");
        gsap.fromTo(
          img,
          { clipPath: "inset(15% 0% 15% 0%)", scale: 1.15 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.4,
            ease: "power4.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
            },
          }
        );

        const textEl = sectionRef.current.querySelector("[data-animate-fi]");
        if (textEl) {
          gsap.fromTo(
            textEl,
            { clipPath: "inset(0 0 100% 0)" },
            {
              clipPath: "inset(0 0 0% 0)",
              duration: 1,
              delay: 0.6,
              ease: "power4.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full overflow-hidden bg-[var(--color-1)]">
      <div className="relative w-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-[50vh] md:h-[70vh] object-cover"
        />
        {(eyebrow || title) && (
          <div className="absolute inset-0 bg-[var(--color-2)]/40 flex flex-col items-center justify-center text-center px-6">
            <div data-animate-fi>
              {eyebrow && <p className="eyebrow mb-4 text-[var(--color-1)]/80">{eyebrow}</p>}
              {title && <h2 className="title-s text-[var(--color-1)] max-w-3xl">{title}</h2>}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
