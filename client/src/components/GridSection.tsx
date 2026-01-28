/*
 * Design Philosophy: "Cupertino Elegance"
 * Grid Section: 2x2 Leistungen-Layout für RomanBau
 * - Alternating dark/light tiles with background images
 * - Service icons
 */

import ScrollAnimation from "./ScrollAnimation";
import { Paintbrush, Layers, Grid3X3, Hammer } from "lucide-react";

interface GridTile {
  id: string;
  bgColor: "white" | "gray" | "black";
  title: string;
  subtitle?: string;
  headline?: string;
  primaryCta?: string;
  secondaryCta?: string;
  imageSrc?: string;
}

interface GridSectionProps {
  tiles: GridTile[];
}

const iconMap: { [key: string]: React.ReactNode } = {
  "malerarbeiten": <Paintbrush className="w-10 h-10" />,
  "trockenbau": <Layers className="w-10 h-10" />,
  "bodenarbeiten": <Grid3X3 className="w-10 h-10" />,
  "abriss": <Hammer className="w-10 h-10" />,
};

export default function GridSection({ tiles }: GridSectionProps) {
  return (
    <section className="py-3 overflow-hidden" id="leistungen">
      <div className="max-w-[1280px] mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-6 sm:mb-8 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] mb-2 sm:mb-3 tracking-tight">
              Unsere Leistungen
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#86868B] max-w-2xl mx-auto">
              Professionelle Handwerksleistungen für Ihr Projekt
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {tiles.map((tile, index) => {
            const isDark = tile.bgColor === "black";
            const hasImage = !!tile.imageSrc;

            return (
              <ScrollAnimation key={tile.id} delay={index * 100}>
                <div
                  className={`relative rounded-xl sm:rounded-2xl min-h-[320px] sm:min-h-[380px] md:min-h-[420px] flex flex-col items-center justify-end text-center overflow-hidden group`}
                >
                  {/* Background Image */}
                  {hasImage ? (
                    <>
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${tile.imageSrc})` }}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                    </>
                  ) : (
                    <div className={`absolute inset-0 ${isDark ? "bg-black" : "bg-[#F5F5F7]"}`} />
                  )}

                  {/* Content */}
                  <div className="relative z-10 p-5 sm:p-8 md:p-12 w-full">
                    {/* Icon */}
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${hasImage || isDark ? "bg-white/20 backdrop-blur-sm" : "bg-[#0071E3]/10"} flex items-center justify-center mb-3 sm:mb-4 mx-auto ${hasImage || isDark ? "text-white" : "text-[#0071E3]"}`}>
                      {iconMap[tile.id] || <Paintbrush className="w-6 h-6 sm:w-8 sm:h-8" />}
                    </div>

                    {/* Title */}
                    <h3 className={`${hasImage || isDark ? "text-white" : "text-[#1D1D1F]"} text-xl sm:text-2xl md:text-3xl font-semibold mb-2 tracking-tight`}>
                      {tile.title}
                    </h3>

                    {/* Subtitle */}
                    {tile.subtitle && (
                      <p className={`${hasImage || isDark ? "text-white/80" : "text-[#86868B]"} text-sm sm:text-base md:text-lg mb-1`}>
                        {tile.subtitle}
                      </p>
                    )}

                    {/* Headline */}
                    {tile.headline && (
                      <p className={`${hasImage || isDark ? "text-white/70" : "text-[#86868B]"} text-xs sm:text-sm md:text-base mb-4 sm:mb-6`}>
                        {tile.headline}
                      </p>
                    )}

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
                      {tile.primaryCta && (
                        <button className="btn-apple-primary text-sm sm:text-[17px] px-4 sm:px-5 py-2 sm:py-2.5 w-full sm:w-auto">
                          {tile.primaryCta}
                        </button>
                      )}
                      {tile.secondaryCta && (
                        <button className={`${hasImage || isDark ? "btn-apple-white" : "btn-apple-secondary"} text-sm sm:text-[17px] px-4 sm:px-5 py-2 sm:py-2.5 w-full sm:w-auto`}>
                          {tile.secondaryCta}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
