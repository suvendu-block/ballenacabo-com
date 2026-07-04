import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";
import { ArrowUpRight } from "lucide-react";

const menuSections = [
  {
    title: "Dinner",
    description: "An international kitchen shaped by Mexican produce, coastal influences, and slow, precise technique.",
  },
  {
    title: "Drinks",
    description: "A thoughtful wine and cocktail program designed to echo the terrain and the pace of the evening.",
  },
  {
    title: "Dessert",
    description: "A final course that balances richness, freshness, and the sweetness of the desert air.",
  },
];

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Menu"
        title="Flavors that hold the moment"
        description="The menu moves between sea, desert, and fire, drawing from the rhythms of the region and presenting them with elegance and warmth."
        imageSrc="/img/reference/menu.jpg"
        imageAlt="Ballena menu"
        buttonText="View seasonal offerings"
        buttonHref="/gallery"
      />

      <section className="bg-[var(--color-1)] py-20 md:py-28">
        <div className="mx-auto max-w-[var(--size-container-max)] px-6 md:px-10">
          <StaggerReveal className="grid gap-8 md:grid-cols-3" type="fade">
            {menuSections.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-[var(--color-2)]/10 bg-[var(--color-6)] p-8">
                <p className="eyebrow mb-4 text-[var(--color-4)]">{item.title}</p>
                <p className="paragraph-l text-[var(--color-2)]/80">{item.description}</p>
              </article>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="bg-[var(--color-2)] py-20 text-[var(--color-1)] md:py-28">
        <div className="mx-auto grid max-w-[var(--size-container-max)] gap-12 px-6 md:grid-cols-[0.95fr_1.05fr] md:px-10">
          <ScrollReveal type="image">
            <div className="overflow-hidden rounded-[2rem]">
              <img src="/img/home-two.jpg" alt="Ballena dining experience" className="h-full w-full object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal type="text" delay={0.15}>
            <div className="flex flex-col justify-center">
              <p className="eyebrow mb-4 text-[var(--color-1)]/70">Dining philosophy</p>
              <h2 className="title-s mb-6">A contemporary menu with deep roots</h2>
              <p className="paragraph-l text-[var(--color-1)]/80">
                Each course is built to feel generous and intentional, inspired by the region's materials and the knowledge of those who have long cared for them.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[var(--color-1)] py-20 md:py-28">
        <div className="mx-auto flex max-w-[var(--size-container-max)] flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <ScrollReveal type="text">
            <p className="eyebrow mb-3 text-[var(--color-4)]">Curated pairing</p>
            <h3 className="title-sm">Discover the evening from first sip to last bite</h3>
          </ScrollReveal>
          <ScrollReveal type="fade" delay={0.15}>
            <a href="/location" className="btn-secondary button-light">
              Visit us
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
