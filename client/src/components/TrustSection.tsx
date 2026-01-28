/*
 * Design Philosophy: "Cupertino Elegance"
 * Trust Section: Google-Bewertungen im Apple-Stil für RomanBau
 * - Minimalistisches Design
 * - Sterne-Bewertung
 * - Testimonial-Karten
 */

import ScrollAnimation from "./ScrollAnimation";
import { Star, Quote, ExternalLink } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Kundenname",
    rating: 5,
    text: "Hier könnte Ihre Bewertung stehen. Platzhalter für echte Google-Bewertungen.",
    date: "vor 2 Wochen",
    initials: "K",
  },
  {
    id: "2",
    name: "Kundenname",
    rating: 5,
    text: "Hier könnte Ihre Bewertung stehen. Platzhalter für echte Google-Bewertungen.",
    date: "vor 1 Monat",
    initials: "K",
  },
  {
    id: "3",
    name: "Kundenname",
    rating: 5,
    text: "Hier könnte Ihre Bewertung stehen. Platzhalter für echte Google-Bewertungen.",
    date: "vor 2 Monaten",
    initials: "K",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? "fill-[#FBBC04] text-[#FBBC04]"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function TrustSection() {
  return (
    <section className="py-10 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden" id="referenzen">
      <div className="max-w-[980px] mx-auto px-3 sm:px-4">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-8 sm:mb-12">
            {/* Google Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white border border-gray-200 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-4 sm:mb-6 shadow-sm">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm sm:text-[15px] font-medium text-[#1D1D1F]">
                Google Bewertungen
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] mb-3 sm:mb-4 tracking-tight px-2">
              Zufriedene Kunden in Berlin
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#86868B] max-w-2xl mx-auto px-2">
              Das sagen unsere Kunden über ihre Erfahrungen mit RomanBau.
            </p>
          </div>
        </ScrollAnimation>

        {/* Overall Rating Card */}
        <ScrollAnimation delay={100}>
          <div className="bg-[#F5F5F7] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 mb-6 sm:mb-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12">
              {/* Rating Display */}
              <div className="flex flex-col items-center">
                <div className="text-5xl sm:text-6xl md:text-7xl font-semibold text-[#1D1D1F] mb-2">
                  5.0
                </div>
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 sm:w-6 sm:h-6 fill-[#FBBC04] text-[#FBBC04]"
                    />
                  ))}
                </div>
                <p className="text-[#86868B] text-xs sm:text-sm">Durchschnittliche Bewertung</p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-24 bg-gray-300" />
              <div className="md:hidden w-20 sm:w-24 h-px bg-gray-300" />

              {/* Stats */}
              <div className="text-center">
                <p className="text-[#86868B] text-xs sm:text-sm mb-3 sm:mb-4">
                  Basierend auf Google-Bewertungen
                </p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0071E3] hover:underline text-sm sm:text-[15px] font-medium"
                >
                  Auf Google Maps ansehen
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={testimonial.id} delay={200 + index * 100}>
              <div className="bg-[#F5F5F7] rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  {/* Avatar */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0071E3] flex items-center justify-center text-white font-medium text-xs sm:text-sm flex-shrink-0">
                    {testimonial.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[#1D1D1F] text-sm sm:text-[15px] truncate">
                      {testimonial.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <StarRating rating={testimonial.rating} />
                      <span className="text-[#86868B] text-xs">
                        {testimonial.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-1">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#86868B]/30 mb-2" />
                  <p className="text-[#1D1D1F] text-sm sm:text-[15px] leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>

                {/* Google Icon */}
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="text-[#86868B] text-xs">
                      Verifizierte Google-Bewertung
                    </span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation delay={500}>
          <div className="text-center mt-8 sm:mt-10">
            <p className="text-[#86868B] text-sm sm:text-[15px] mb-3 sm:mb-4">
              Überzeugen Sie sich selbst von unserer Arbeit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple-primary text-sm sm:text-[17px] px-5 sm:px-6 py-2.5 sm:py-3 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Bewertung schreiben
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <button className="btn-apple-secondary text-sm sm:text-[17px] px-5 sm:px-6 py-2.5 sm:py-3 w-full sm:w-auto">
                Kontakt aufnehmen
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
