/*
 * Design Philosophy: "Cupertino Elegance"
 * Home Page: RomanBau - Handwerksbetrieb Berlin
 * Apple-style Onepager mit Unternehmens-Inhalten
 */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GridSection from "@/components/GridSection";
import TwoColumnSection from "@/components/TwoColumnSection";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import TrustSection from "@/components/TrustSection";
import PortfolioSection from "@/components/PortfolioSection";

// Grid tiles - Leistungen
const gridTiles = [
  {
    id: "malerarbeiten",
    bgColor: "black" as const,
    title: "Malerarbeiten",
    subtitle: "Anstriche & Spachtelarbeiten Q1–Q4",
    headline: "Professionelle Wandgestaltung",
    primaryCta: "Anfrage senden",
    imageSrc: "/images/grid-maler.png",
  },
  {
    id: "trockenbau",
    bgColor: "gray" as const,
    title: "Trockenbau & Rigips",
    subtitle: "Wände verputzen & Raumgestaltung",
    primaryCta: "Anfrage senden",
    imageSrc: "/images/grid-trockenbau.jpg",
  },
  {
    id: "bodenarbeiten",
    bgColor: "black" as const,
    title: "Bodenverlegung",
    subtitle: "Laminat & Fliesenarbeiten",
    headline: "Für jeden Raum der passende Boden",
    primaryCta: "Anfrage senden",
    imageSrc: "/images/grid-boden.jpg",
  },
  {
    id: "abriss",
    bgColor: "gray" as const,
    title: "Abriss & Demontage",
    subtitle: "Reinigung & Wohnungsauflösungen",
    primaryCta: "Anfrage senden",
    imageSrc: "/images/grid-abriss.jpg",
  },
];

// Two-column tiles - USPs
const twoColumnTiles = [
  {
    id: "zuverlaessig",
    logoText: "Zuverlässig",
    subtitle: "Pünktlich, sauber und präzise – wir halten, was wir versprechen.",
  },
  {
    id: "transparent",
    logoText: "Transparent",
    subtitle: "Faire Preise ohne versteckte Kosten. Sie wissen immer, woran Sie sind.",
  },
];

// Leistungen Carousel
const leistungenCards = [
  { id: "maler", serviceName: "Malerarbeiten", ctaText: "Mehr erfahren", imageSrc: "/images/leistung-malerarbeiten.png" },
  { id: "spachtel", serviceName: "Spachtelarbeiten Q1–Q4", ctaText: "Mehr erfahren", imageSrc: "/images/leistung-spachtel.jpg" },
  { id: "trocken", serviceName: "Trockenbau & Rigips", ctaText: "Mehr erfahren", imageSrc: "/images/leistung-trockenbau.jpg" },
  { id: "putz", serviceName: "Wände verputzen", ctaText: "Mehr erfahren", imageSrc: "/images/leistung-verputzen.jpg" },
  { id: "boden", serviceName: "Laminat & Bodenverlegung", ctaText: "Mehr erfahren", imageSrc: "/images/leistung-boden.jpg" },
  { id: "fliesen", serviceName: "Fliesenarbeiten", ctaText: "Mehr erfahren", imageSrc: "/images/leistung-fliesen.jpg" },
];

// Einsatzbereiche Carousel
const einsatzbereicheCards = [
  { id: "wohnung", serviceName: "Wohnung", ctaText: "Anfrage senden", imageSrc: "/images/einsatz-wohnung.webp" },
  { id: "haus", serviceName: "Haus", ctaText: "Anfrage senden", imageSrc: "/images/einsatz-haus.webp" },
  { id: "buero", serviceName: "Büro", ctaText: "Anfrage senden", imageSrc: "/images/einsatz-buero.webp" },
  { id: "gewerbe", serviceName: "Gewerbe", ctaText: "Anfrage senden", imageSrc: "/images/einsatz-gewerbe.webp" },
];

// Portfolio Bilder - Echte Projektbilder
const portfolioImages = [
  { id: "projekt1", src: "/images/portfolio-1.webp", alt: "Badezimmer Sanierung", title: "Badezimmer Komplettsanierung", category: "Fliesenarbeiten" },
  { id: "projekt2", src: "/images/portfolio-2.webp", alt: "Küche Renovierung", title: "Küche mit Granitarbeitsplatte", category: "Renovierung" },
  { id: "projekt3", src: "/images/portfolio-3.webp", alt: "Sanierung in Arbeit", title: "Wohnung in Sanierung", category: "Sanierung" },
  { id: "projekt4", src: "/images/portfolio-4.webp", alt: "Renovierter Raum", title: "Raum nach Renovierung", category: "Malerarbeiten" },
  { id: "projekt5", src: "/images/portfolio-5.webp", alt: "Abrissarbeiten", title: "Wandabriss & Demontage", category: "Abrissarbeiten" },
];

// USP Punkte für die Hero-Section
const heroUSPPoints = [
  {
    title: "Direkt vom Chef",
    description: "Bei RomanBau sprechen Sie direkt mit dem Inhaber – keine Vermittler, keine versteckten Kosten.",
  },
  {
    title: "Berlin & Umgebung",
    description: "Ihr zuverlässiger Partner für saubere Arbeit in ganz Berlin und Umgebung.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="pt-12 flex-1">
        {/* Hero Section: Hauptangebot mit USPs */}
        <HeroSection
          title="RomanBau"
          subtitle="Renovierung, Sanierung & Ausbau in Berlin"
          headline="Ihr zuverlässiger Handwerksbetrieb – von A bis Z"
          primaryCta="Jetzt anfragen"
          secondaryCta="Leistungen ansehen"
          bgColor="white"
          imageSrc="/images/romanbau-hero.webp"
          imageAlt="RomanBau Gebäude in Berlin"
          uspPoints={heroUSPPoints}
        />

        {/* Ablauf / Prozess Section */}
        <ProcessSection />

        {/* 2x2 Grid Section - Leistungen */}
        <GridSection tiles={gridTiles} />

        {/* Two Column Section - USPs */}
        <TwoColumnSection tiles={twoColumnTiles} />

        {/* Leistungen Carousel */}
        <Carousel
          title="Alle Leistungen"
          cards={leistungenCards}
          bgColor="white"
        />

        {/* Einsatzbereiche Carousel */}
        <Carousel
          title="Einsatzbereiche"
          cards={einsatzbereicheCards}
          bgColor="black"
        />

        {/* Portfolio Section */}
        <PortfolioSection
          title="Unsere Projekte"
          subtitle="Einblicke in unsere abgeschlossenen Arbeiten"
          images={portfolioImages}
        />

        {/* Trust Section - Google Bewertungen */}
        <TrustSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
