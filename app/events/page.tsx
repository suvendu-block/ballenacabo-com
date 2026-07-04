import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";
import { ArrowUpRight } from "lucide-react";

const eventCards = [
  {
    title: "Private dinners",
    text: "Intimate evenings framed by candlelight, ocean air, and a kitchen that moves with the pacing of the night.",
  },
  {
    title: "Sunset gatherings",
    text: "Seasonal tastings, chef-led pairings, and relaxed rituals built around the horizon and the table.",
  },
  {
    title: "Celebrations",
    text: "From birthdays to milestone gatherings, every detail is shaped to feel warm, unhurried, and distinctly local.",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Gatherings shaped by the sea"
        description="From intimate menus to larger celebrations, Ballena offers evenings that feel grounded, elegant, and deeply connected to place."
        imageSrc="/img/reference/events.jpg"
        imageAlt="Ballena events"
        buttonText="Reserve your evening"
        buttonHref="https://www.opentable.com.mx/r/ballena-reservations-san-jose-del-cabo?restref=1474057&lang=es-MX&ot_source=Restaurant%20website"
      />

      <section className="bg-[var(--color-1)] py-20 md:py-28">
        <div className="mx-auto max-w-[var(--size-container-max)] px-6 md:px-10">
          <StaggerReveal className="grid gap-8 md:grid-cols-3" type="fade">
            {eventCards.map((card) => (
              <article key={card.title} className="rounded-[2rem] border border-[var(--color-2)]/10 bg-[var(--color-6)] p-8 shadow-[0_20px_60px_rgba(3,9,13,0.06)]">
                <p className="eyebrow mb-4 text-[var(--color-4)]">{card.title}</p>
                <p className="paragraph-l text-[var(--color-2)]/80">{card.text}</p>
              </article>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="bg-[var(--color-2)] py-20 text-[var(--color-1)] md:py-28">
        <div className="mx-auto grid max-w-[var(--size-container-max)] gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:px-10">
          <ScrollReveal type="text">
            <p className="eyebrow mb-4 text-[var(--color-1)]/70">Seasonal experiences</p>
            <h2 className="title-s mb-6">A setting for moments that linger</h2>
            <p className="paragraph-l max-w-2xl text-[var(--color-1)]/80">
              Our calendar is shaped around the rhythm of the coast, featuring chef-led menus, wine pairings, and gatherings that feel as effortless as they do memorable.
            </p>
          </ScrollReveal>
          <ScrollReveal type="image">
            <div className="overflow-hidden rounded-[2rem]">
              <img src="/img/home-five.jpg" alt="Ballena event atmosphere" className="h-full w-full object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[var(--color-1)] py-20 md:py-28">
        <div className="mx-auto flex max-w-[var(--size-container-max)] flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <ScrollReveal type="text">
            <p className="eyebrow mb-3 text-[var(--color-4)]">Reservations</p>
            <h3 className="title-sm">Plan your next gathering</h3>
          </ScrollReveal>
          <ScrollReveal type="fade" delay={0.15}>
            <a href="https://www.opentable.com.mx/r/ballena-reservations-san-jose-del-cabo?restref=1474057&lang=es-MX&ot_source=Restaurant%20website" target="_blank" rel="noopener noreferrer" className="btn-secondary button-light">
              Book a table
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
