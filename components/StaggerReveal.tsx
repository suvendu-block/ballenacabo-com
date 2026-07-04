"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  type?: "text" | "image" | "fade";
  delay?: number;
}

export default function StaggerReveal({
  children,
  className = "",
  type = "fade",
  delay = 0,
}: StaggerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const items = containerRef.current!.children;
      if (!items.length) return;

      if (type === "text") {
        gsap.fromTo(
          items,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1,
            stagger: 0.15,
            delay,
            ease: "power4.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 88%",
            },
          }
        );
      } else if (type === "image") {
        gsap.fromTo(
          items,
          { clipPath: "inset(0 0 100% 0)", scale: 1.1 },
          {
            clipPath: "inset(0 0 0% 0)",
            scale: 1,
            duration: 1.2,
            stagger: 0.12,
            delay,
            ease: "power4.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 88%",
            },
          }
        );
      } else {
        gsap.fromTo(
          items,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 88%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [type, delay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
