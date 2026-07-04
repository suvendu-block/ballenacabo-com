import Hero from "@/components/Hero";
import SplitContent from "@/components/SplitContent";
import FullImage from "@/components/FullImage";
import ContentIntro from "@/components/ContentIntro";
import SliderSection from "@/components/SliderSection";
import MediaIntro from "@/components/MediaIntro";
import CardContent from "@/components/CardContent";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Sea and Desert */}
      <SplitContent
        eyebrow="SEA AND DESERT"
        title="Ballena, where gathering comes naturally"
        description="Guided by time, light, and movement. An international kitchen rooted in territory, led by warmth, and made to be shared."
        buttonText="explore more"
        buttonHref="/ballena/gallery"
        imageSrc="/img/reference/hero-image.jpg"
        imageAlt="Ballena Cabo sea and desert"
        hasGallery
      />

      {/* 3. Flavors / Menu */}
      <SplitContent
        eyebrow="Menu"
        title="Flavors that hold the moment"
        description="The desert is not empty, it is pure life. It is the silence screaming, it is resistance made beautiful. It is an ecosystem where every leaf, every root, is an act of pure determination."
        buttonText="View Full Menu"
        buttonHref="/menu"
        imageSrc="/img/reference/menu.jpg"
        imageAlt="Ballena Cabo menu"
        reversed
        themeAccent
      />

      {/* 4. Full-width Image */}
      <FullImage
        src="/img/reference/gallery.jpg"
        alt="Ballena Cabo atmosphere"
        eyebrow="The Space"
        title="Light, texture, and calm in every frame"
      />

      {/* 5. Nature Retreat */}
      <ContentIntro
        eyebrow="NATURE RETREAT"
        title="Where the kitchen moves with the landscape. Discover our restaurant in nature"
        description="Around the table, Ballena comes to life. Good company, shared plates, and moments that linger."
        buttonText="EXPLORE GALLERY"
        buttonHref="/ballena/gallery"
      />

      {/* 6. Slider / Carousel */}
      <SliderSection />

      {/* 7. About */}
      <MediaIntro
        eyebrow="About"
        title="Hospitality that feels natural"
        description="Ballena is part of Grupo Hunan. A restaurant group focused on thoughtful dining, where each place responds to its context and the way people come together."
        buttonText="About Grupo Hunan"
        buttonHref="/ballena/about"
        imageSrc="/img/reference/about.jpg"
        imageAlt="Ballena Cabo about"
      />

      {/* 8. Contact / Location */}
      <CardContent
        eyebrow="CONTACT AND LOCATION"
        title="A meeting point, naturally"
        description={[]}
        hours={[
          { label: "HOURS", time: "5:00 PM – 11:00 PM" },
          { label: "WEEKENDS", time: "12:00 PM – 4:00 PM" },
        ]}
        phone="+52 624 105 6635"
        address={[
          "Camino Cabo Este, San José",
          "Del Cabo 23403 Mexico",
        ]}
        videoSrc="/video/reference/contact-video.mp4"
      />
    </>
  );
}
