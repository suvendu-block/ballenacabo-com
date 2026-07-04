import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Hospitality grounded in place"
        description="Ballena is part of Grupo Hunan, where each restaurant is shaped by context, local materiality, and the calm confidence of sincere hospitality."
        imageSrc="/img/reference/about.jpg"
        imageAlt="Ballena about"
        buttonText="Discover Grupo Hunan"
        buttonHref="https://www.grupohunan.com/"
      />

      <section className="bg-[var(--color-1)] py-20 md:py-28">
        <div className="mx-auto grid max-w-[var(--size-container-max)] gap-12 px-6 md:grid-cols-[1fr_0.9fr] md:px-10">
          <ScrollReveal type="text">
            <p className="eyebrow mb-4 text-[var(--color-4)]">Our approach</p>
            <h2 className="title-s mb-6">A restaurant shaped by sea, land, and time</h2>
            <p className="paragraph-l text-[var(--color-2)]/80 max-w-2xl">
              The experience at Ballena is rooted in gathering, in hospitality that feels effortless, and in cuisine that honours both tradition and the changing light of the coastline.
            </p>
          </ScrollReveal>
          <ScrollReveal type="fade" delay={0.15}>
            <div className="rounded-[2rem] border border-[var(--color-2)]/10 bg-[var(--color-6)] p-10 shadow-[0_20px_60px_rgba(3,9,13,0.06)]">
              <p className="eyebrow mb-4 text-[var(--color-4)]">What defines us</p>
              <ul className="space-y-4 text-[var(--color-2)]/80">
                <li>• Responsive, warm hospitality</li>
                <li>• A menu grounded in locality and seasonality</li>
                <li>• Spaces that feel calm, tactile, and refined</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[var(--color-2)] py-20 text-[var(--color-1)] md:py-28">
        <div className="mx-auto flex max-w-[var(--size-container-max)] flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <ScrollReveal type="text">
            <p className="eyebrow mb-4 text-[var(--color-1)]/70">Story</p>
            <h2 className="title-s mb-4">A place that invites people to stay a little longer</h2>
            <p className="paragraph-l text-[var(--color-1)]/80">
              Every detail is considered to encourage lingering, conversation, and the feeling that the meal belongs to the moment rather than the schedule.
            </p>
          </ScrollReveal>
          <ScrollReveal type="fade" delay={0.2}>
            <a href="/gallery" className="btn-secondary button-dark">
              Explore the space
              <span className="btn-arrow">
                <ArrowUpRight size={14} strokeWidth={2} absoluteStrokeWidth />
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
