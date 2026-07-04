import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";
import { ArrowUpRight } from "lucide-react";

const galleryImages = [
  { src: "/img/home-one.jpg", alt: "Ballena exterior" },
  { src: "/img/home-two.jpg", alt: "Ballena dining area" },
  { src: "/img/home-three.jpg", alt: "Ballena menu details" },
  { src: "/img/home-four.jpg", alt: "Ballena event setting" },
  { src: "/img/home-five.jpg", alt: "Ballena ambiance" },
  { src: "/img/home-six.jpg", alt: "Ballena mood" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Where atmosphere is built through time and presence"
        description="A visual journey through the textures, light, and quiet drama that define the Ballena experience."
        imageSrc="/img/reference/gallery.jpg"
        imageAlt="Ballena gallery"
        buttonText="Book your table"
        buttonHref="https://www.opentable.com.mx/r/ballena-reservations-san-jose-del-cabo?restref=1474057&lang=es-MX&ot_source=Restaurant%20website"
      />

      <section className="bg-[var(--color-1)] py-20 md:py-28">
        <div className="mx-auto max-w-[var(--size-container-max)] px-6 md:px-10">
          <StaggerReveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" type="image">
            {galleryImages.map((image) => (
              <div key={image.alt} className="overflow-hidden rounded-[2rem]">
                <img src={image.src} alt={image.alt} className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="bg-[var(--color-2)] py-20 text-[var(--color-1)] md:py-28">
        <div className="mx-auto flex max-w-[var(--size-container-max)] flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <ScrollReveal type="text">
            <p className="eyebrow mb-4 text-[var(--color-1)]/70">Atmosphere</p>
            <h2 className="title-s mb-4">Light, texture, and calm in every frame</h2>
            <p className="paragraph-l text-[var(--color-1)]/80">
              The spaces are designed to feel quiet and generous, with every surface and material contributing to the mood of the evening.
            </p>
          </ScrollReveal>
          <ScrollReveal type="fade" delay={0.2}>
            <a href="/about" className="btn-secondary button-dark">
              Learn our story
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
