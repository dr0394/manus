/*
 * Design Philosophy: "Cupertino Elegance"
 * Two Column Section: USPs für RomanBau
 * - Light gray background
 * - Icon + Text Layout
 */

import ScrollAnimation from "./ScrollAnimation";
import { CheckCircle, Shield, Clock, User } from "lucide-react";

interface ColumnTile {
  id: string;
  logoText: string;
  subtitle: string;
  primaryCta?: string;
  secondaryCta?: string;
}

interface TwoColumnSectionProps {
  tiles: ColumnTile[];
}

const iconMap: { [key: string]: React.ReactNode } = {
  "Zuverlässig": <CheckCircle className="w-8 h-8" />,
  "Transparent": <Shield className="w-8 h-8" />,
  "Pünktlich": <Clock className="w-8 h-8" />,
  "Persönlich": <User className="w-8 h-8" />,
};

export default function TwoColumnSection({ tiles }: TwoColumnSectionProps) {
  return (
    <section className="py-3 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {tiles.map((tile, index) => (
            <ScrollAnimation key={tile.id} delay={index * 100}>
              <div
                className="bg-[#F5F5F7] rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 min-h-[280px] sm:min-h-[320px] md:min-h-[380px] flex flex-col items-center justify-center text-center"
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#0071E3]/10 flex items-center justify-center mb-4 sm:mb-6 text-[#0071E3]">
                  {iconMap[tile.logoText] || <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1D1D1F] mb-2 sm:mb-3 tracking-tight">
                  {tile.logoText}
                </h3>

                {/* Subtitle */}
                <p className="text-[#86868B] text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 max-w-sm px-2">
                  {tile.subtitle}
                </p>

                {/* CTAs */}
                {(tile.primaryCta || tile.secondaryCta) && (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto">
                    {tile.primaryCta && (
                      <button className="btn-apple-primary text-sm sm:text-[17px] px-4 sm:px-5 py-2 sm:py-2.5 w-full sm:w-auto">
                        {tile.primaryCta}
                      </button>
                    )}
                    {tile.secondaryCta && (
                      <button className="btn-apple-secondary text-sm sm:text-[17px] px-4 sm:px-5 py-2 sm:py-2.5 w-full sm:w-auto">
                        {tile.secondaryCta}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
