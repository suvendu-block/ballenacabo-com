"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Phone, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface CardContentProps {
  eyebrow: string;
  title: string;
  description: string[];
  hours: { label: string; time: string }[];
  phone: string;
  address: string[];
  videoSrc: string;
}

export default function CardContent({
  eyebrow,
  title,
  description,
  hours,
  phone,
  address,
  videoSrc,
}: CardContentProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll("[data-animate-cc]");
      if (els) {
        gsap.fromTo(
          els,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
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
      className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-[var(--color-2)]"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[var(--color-2)]/60" />
      </div>

      {/* Content Card */}
      <div className="relative z-10 max-w-lg w-full mx-6 md:mx-10 bg-[var(--color-2)]/80 backdrop-blur-sm border border-[var(--color-1)]/10 p-8 md:p-12">
        <p className="eyebrow !text-[var(--color-1)]/70 mb-4" data-animate-cc>
          {eyebrow}
        </p>
        <h2 className="title-s text-[var(--color-1)] mb-6" data-animate-cc>
          {title}
        </h2>

        {description.map((paragraph, i) => (
          <p key={i} className="paragraph-m text-[var(--color-1)]/80 mb-4" data-animate-cc>
            {paragraph}
          </p>
        ))}

        {/* Hours */}
        <div className="mt-8 space-y-2" data-animate-cc>
          <div className="flex items-center gap-2 text-sm font-primary tracking-widest uppercase text-[var(--color-1)]/60 mb-3">
            <Clock size={14} strokeWidth={1.5} />
            <span>HOURS</span>
          </div>
          {hours.map((h, i) => (
            <div key={i} className="flex justify-between text-sm font-primary tracking-widest uppercase text-[var(--color-1)]/80">
              <span>{h.label}</span>
              <span>{h.time}</span>
            </div>
          ))}
        </div>

        {/* Phone */}
        <p className="mt-6 flex items-center gap-2 text-sm font-primary tracking-widest text-[var(--color-1)]/80" data-animate-cc>
          <Phone size={14} strokeWidth={1.5} className="shrink-0" />
          <span>{phone}</span>
        </p>

        {/* Address */}
        <p className="mt-2 flex items-start gap-2 text-sm font-primary tracking-widest text-[var(--color-1)]/60" data-animate-cc>
          <MapPin size={14} strokeWidth={1.5} className="shrink-0 mt-0.5" />
          <span>
            {address.map((line, i) => (
              <span key={i}>
                {line}
                {i < address.length - 1 && <br />}
              </span>
            ))}
          </span>
        </p>
      </div>
    </section>
  );
}
