import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Location"
        title="A meeting point in San José del Cabo"
        description="Set along the edge of the desert and the sea, Ballena welcomes guests into a place that feels both calm and cinematic."
        imageSrc="/img/reference/location.jpg"
        imageAlt="Ballena location"
        buttonText="Get directions"
        buttonHref="https://maps.google.com/?q=Ballena+San+Jose+del+Cabo"
      />

      <section className="bg-[var(--color-1)] py-24 md:py-36">
        <div className="mx-auto grid max-w-[var(--size-container-max)] items-stretch gap-12 px-6 md:grid-cols-[0.95fr_1.05fr] md:px-10">
          <ScrollReveal type="text" className="h-full">
            <div className="h-full rounded-[2rem] bg-[var(--color-8)] p-10 shadow-[0_20px_60px_rgba(3,9,13,0.06)]">
              <p className="eyebrow mb-4 text-[var(--color-4)]">Visit</p>
              <h2 className="title-sm mb-6">Hours & contact</h2>
              <p className="paragraph-l text-[var(--color-2)]/80 mb-6">5:00 PM – 11:00 PM</p>
              <p className="paragraph-l text-[var(--color-2)]/80 mb-6">Weekends: 12:00 PM – 4:00 PM</p>
              <a href="tel:+526241056635" className="btn-secondary button-light">
                Call the restaurant
                <span className="btn-arrow">
                  <ArrowUpRight size={14} strokeWidth={2} absoluteStrokeWidth />
                </span>
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal type="image">
            <div className="overflow-hidden rounded-[2rem]">
              <img src="/img/home-last.png" alt="Ballena map and surroundings" className="h-full w-full object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
