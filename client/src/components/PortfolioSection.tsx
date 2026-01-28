/*
 * Design Philosophy: "Cupertino Elegance"
 * Portfolio Slider: Großer Bildslider im Apple-Stil für RomanBau
 * - Vollbreite Bilder
 * - Sanfte Übergänge
 * - Minimalistische Dot-Navigation
 */

import { useState, useEffect, useCallback } from "react";
import ScrollAnimation from "./ScrollAnimation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category?: string;
}

interface PortfolioSectionProps {
  title?: string;
  subtitle?: string;
  images: PortfolioImage[];
}

export default function PortfolioSection({
  title = "Unsere Projekte",
  subtitle = "Einblicke in unsere Arbeit",
  images,
}: PortfolioSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play Funktion
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Auto-play nach 10 Sekunden wieder aktivieren
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [images.length]);

  return (
    <section className="py-10 sm:py-16 md:py-24 lg:py-32 bg-[#F5F5F7] overflow-hidden" id="portfolio">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] mb-3 sm:mb-4 tracking-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#86868B] max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        </ScrollAnimation>

        {/* Slider Container */}
        <ScrollAnimation delay={100}>
          <div className="relative">
            {/* Main Slider */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-white shadow-lg">
              {/* Slides */}
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="w-full flex-shrink-0 relative"
                  >
                    {/* Bild Container - Großformat */}
                    <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] relative overflow-hidden">
                      {image.src ? (
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        /* Platzhalter */
                        <div className="w-full h-full bg-gradient-to-br from-[#E8E8ED] to-[#D2D2D7] flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                              <svg
                                className="w-10 h-10 text-[#86868B]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                            <p className="text-[#86868B] text-lg font-medium">
                              Projektbild
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Gradient Overlay für Text */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 lg:p-12">
                        {image.category && (
                          <span className="inline-block text-white/80 text-xs sm:text-sm md:text-base font-medium mb-1 sm:mb-2 tracking-wide uppercase">
                            {image.category}
                          </span>
                        )}
                        {image.title && (
                          <h3 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                            {image.title}
                          </h3>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows - Apple Style */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#1D1D1F] hover:bg-white transition-all duration-300 hover:scale-105"
                    aria-label="Vorheriges Bild"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#1D1D1F] hover:bg-white transition-all duration-300 hover:scale-105"
                    aria-label="Nächstes Bild"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </button>
                </>
              )}
            </div>

            {/* Dot Navigation - Apple Style */}
            {images.length > 1 && (
              <div className="flex justify-center gap-2 mt-6 md:mt-8">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "w-8 h-2 bg-[#1D1D1F]"
                        : "w-2 h-2 bg-[#86868B]/40 hover:bg-[#86868B]/60"
                    }`}
                    aria-label={`Gehe zu Bild ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Slide Counter */}
            <div className="text-center mt-4">
              <span className="text-[#86868B] text-sm">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation delay={200}>
          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <p className="text-[#86868B] text-sm sm:text-[15px] mb-3 sm:mb-4">
              Möchten Sie Ihr Projekt mit uns umsetzen?
            </p>
            <button className="btn-apple-primary text-sm sm:text-[17px] px-5 sm:px-6 py-2.5 sm:py-3">
              Projekt anfragen
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
