"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "EVENTS",
    description:
      "Ways to gather beyond the table",
    image: "/img/home-four.jpg",
    href: "/ballena/events",
  },
  {
    title: "Gallery",
    description:
      "Where atmosphere is built through time and presence",
    image: "/img/home-five.jpg",
    href: "/ballena/gallery",
  },
  {
    title: "Gift Cards",
    description:
      "Passed along, meant to be shared",
    image: "/img/home-six.jpg",
    href: "https://giftup.app/place-order/0d69941b-0e23-4dd9-2090-08de109bf43d?platform=hosted",
  },
  {
    title: "Menu",
    description:
      "A tide that moves through the plate",
    image: "/img/home-three.jpg",
    href: "/ballena/menu",
  },
];

export default function SliderSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const currentSlideRef = useRef(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current.querySelector("[data-animate-slider-title]"),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scroll = (direction: number) => {
    if (!trackRef.current) return;
    const slides = trackRef.current.children;
    const maxIndex = slides.length - 1;
    const newIndex = Math.max(
      0,
      Math.min(currentSlideRef.current + direction, maxIndex)
    );
    if (newIndex === currentSlideRef.current) return;
    currentSlideRef.current = newIndex;

    const slideWidth = (slides[0] as HTMLElement).offsetWidth + 32; // gap-8 = 2rem
    trackRef.current.style.transform = `translateX(-${newIndex * slideWidth}px)`;
    trackRef.current.style.transition = "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)";

    if (progressRef.current) {
      const progress = (newIndex + 1) / slides.length;
      progressRef.current.style.width = `${progress * 100}%`;
    }
    setCurrentSlide(newIndex);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--color-1)] py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-[var(--size-container-max)] mx-auto px-6 md:px-10">
        {/* Pagination */}
        <div
          data-animate-slider-title
          className="flex items-center justify-center gap-3 mb-12"
        >
          <span className="title-sm text-[var(--color-4)]">01</span>
          <span className="w-12 h-px bg-[var(--color-4)]/40" />
          <span className="text-xs font-primary tracking-widest text-[var(--color-4)]/60">04</span>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden w-[calc(100%+48px)] md:w-[calc(100%+80px)] -mx-6 md:-mx-10">
          <div
            ref={trackRef}
            className="flex gap-8 transition-transform duration-700 ease-out"
            style={{ transform: "translateX(0)" }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0"
              >
                <a
                  href={slide.href}
                  target={slide.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    slide.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group block text-center"
                >
                  <div className="h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden mb-8 w-full">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="title-xs mb-3 group-hover:text-[var(--color-3)] transition-colors">
                    {slide.title}
                  </h3>
                  <p className="paragraph-m text-[var(--color-2)]/80 mb-6">
                    {slide.description}
                  </p>
                  <span className="btn-secondary button-light">
                    explore more
                    <span className="btn-arrow">
                      <ArrowUpRight size={14} strokeWidth={2} absoluteStrokeWidth />
                    </span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => scroll(-1)}
            className="btn-secondary button-light"
            aria-label="Previous slide"
          >
            <span className="btn-arrow">
              <ChevronLeft size={14} strokeWidth={2} absoluteStrokeWidth />
            </span>
          </button>

          {/* Progress bar */}
          <div className="flex-1 max-w-full flex items-center gap-4">
            <div className="flex-1 h-[2px] rounded-full bg-[var(--color-8)]/70 overflow-hidden">
              <div
                ref={progressRef}
                className="h-full rounded-full bg-[var(--color-2)] transition-all duration-700 ease-out"
                style={{ width: "25%" }}
              />
            </div>
            <span className="text-xs font-primary tracking-[0.35em] text-[var(--color-2)]/70 whitespace-nowrap">
              {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <button
            onClick={() => scroll(1)}
            className="btn-secondary button-light"
            aria-label="Next slide"
          >
            <span className="btn-arrow">
              <ChevronRight size={14} strokeWidth={2} absoluteStrokeWidth />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
