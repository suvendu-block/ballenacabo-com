"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  type?: "text" | "image" | "fade";
  delay?: number;
  className?: string;
  stagger?: number;
}

export default function ScrollReveal({
  children,
  type = "text",
  delay = 0,
  className = "",
  stagger = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      if (type === "text") {
        gsap.fromTo(
          ref.current!,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1,
            delay,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 88%",
            },
          }
        );
      } else if (type === "image") {
        gsap.fromTo(
          ref.current!,
          { clipPath: "inset(0 0 100% 0)", scale: 1.1 },
          {
            clipPath: "inset(0 0 0% 0)",
            scale: 1,
            duration: 1.2,
            delay,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 88%",
            },
          }
        );
      } else {
        gsap.fromTo(
          ref.current!,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 88%",
            },
          }
        );
      }
    }, ref);

    return () => ctx.revert();
  }, [type, delay, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
