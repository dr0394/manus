/*
 * Design Philosophy: "Cupertino Elegance"
 * Carousel: Horizontale Karten für Leistungen/Einsatzbereiche
 */

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Paintbrush, Layers, Grid3X3, Home, Briefcase, Store } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

interface CarouselCard {
  id: string;
  serviceName: string;
  ctaText: string;
  imageSrc?: string;
}

interface CarouselProps {
  title: string;
  cards: CarouselCard[];
  bgColor?: "white" | "black";
}

const iconMap: { [key: string]: React.ReactNode } = {
  "Malerarbeiten": <Paintbrush className="w-8 h-8" />,
  "Spachtelarbeiten Q1–Q4": <Layers className="w-8 h-8" />,
  "Trockenbau & Rigips": <Layers className="w-8 h-8" />,
  "Wände verputzen": <Layers className="w-8 h-8" />,
  "Laminat & Bodenverlegung": <Grid3X3 className="w-8 h-8" />,
  "Fliesenarbeiten": <Grid3X3 className="w-8 h-8" />,
  "Wohnung": <Home className="w-8 h-8" />,
  "Haus": <Home className="w-8 h-8" />,
  "Büro": <Briefcase className="w-8 h-8" />,
  "Gewerbe": <Store className="w-8 h-8" />,
};

export default function Carousel({ title, cards, bgColor = "white" }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDark = bgColor === "black";

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      const newScrollLeft =
        direction === "left"
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = 320;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setActiveIndex(Math.min(newIndex, cards.length - 1));
      }
    };

    const ref = scrollRef.current;
    ref?.addEventListener("scroll", handleScroll);
    return () => ref?.removeEventListener("scroll", handleScroll);
  }, [cards.length]);

  return (
    <section className={`py-10 sm:py-16 md:py-20 lg:py-24 overflow-hidden ${isDark ? "bg-black" : "bg-white"}`}>
      <div className="max-w-[1280px] mx-auto px-3 sm:px-4">
        {/* Title */}
        <ScrollAnimation>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 md:mb-12 text-center tracking-tight px-2 ${isDark ? "text-white" : "text-[#1D1D1F]"}`}>
            {title}
          </h2>
        </ScrollAnimation>

        {/* Carousel Container */}
        <ScrollAnimation delay={200}>
          <div className="relative">
            {/* Navigation Arrows - Hidden on mobile */}
            <button
              onClick={() => scroll("left")}
              className={`hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 sm:w-10 h-8 sm:h-10 rounded-full items-center justify-center transition-all hover:scale-105 ${
                isDark ? "bg-white/10 text-white hover:bg-white/20" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className={`hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 sm:w-10 h-8 sm:h-10 rounded-full items-center justify-center transition-all hover:scale-105 ${
                isDark ? "bg-white/10 text-white hover:bg-white/20" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Cards */}
            <div
              ref={scrollRef}
              className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-1 sm:px-12"
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`flex-shrink-0 w-[240px] sm:w-[280px] h-[280px] sm:h-[320px] rounded-xl sm:rounded-2xl snap-start overflow-hidden transition-transform hover:scale-[1.02] ${
                    isDark ? "bg-white/5" : "bg-[#F5F5F7]"
                  }`}
                >
                  {card.imageSrc ? (
                    /* Card with Image */
                    <div className="relative h-full flex flex-col">
                      {/* Image */}
                      <div className="h-[140px] sm:h-[180px] overflow-hidden">
                        <img 
                          src={card.imageSrc} 
                          alt={card.serviceName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Content */}
                      <div className="flex-1 p-4 sm:p-5 flex flex-col items-center justify-center text-center">
                        <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-[#1D1D1F]"}`}>
                          {card.serviceName}
                        </h3>
                        <button className={`text-sm sm:text-[17px] font-normal hover:underline ${isDark ? "text-white" : "text-[#0071E3]"}`}>
                          {card.ctaText} →
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Card with Icon */
                    <div className="p-4 sm:p-6 h-full flex flex-col items-center justify-center text-center">
                      {/* Icon */}
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 ${
                        isDark ? "bg-white/10 text-white" : "bg-[#0071E3]/10 text-[#0071E3]"
                      }`}>
                        {iconMap[card.serviceName] || <Paintbrush className="w-6 h-6 sm:w-8 sm:h-8" />}
                      </div>

                      {/* Service Name */}
                      <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${isDark ? "text-white" : "text-[#1D1D1F]"}`}>
                        {card.serviceName}
                      </h3>

                      {/* CTA */}
                      <button className={`text-sm sm:text-[17px] font-normal hover:underline ${isDark ? "text-white" : "text-[#0071E3]"}`}>
                        {card.ctaText} →
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex
                  ? isDark ? "bg-white w-4" : "bg-[#1D1D1F] w-4"
                  : isDark ? "bg-white/30" : "bg-gray-300"
              }`}
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({
                    left: index * 320,
                    behavior: "smooth",
                  });
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
