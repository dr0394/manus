/*
 * Design Philosophy: "Cupertino Elegance"
 * Process Section: 5-Schritte Ablauf für RomanBau
 * - Horizontale Schritte auf Desktop
 * - Vertikale Liste auf Mobile
 */

import ScrollAnimation from "./ScrollAnimation";

const steps = [
  {
    number: "1",
    title: "Anfrage senden",
    description: "Per Formular oder WhatsApp",
  },
  {
    number: "2",
    title: "Fotos & Besichtigung",
    description: "Senden Sie Fotos oder vereinbaren Sie eine Besichtigung",
  },
  {
    number: "3",
    title: "Schnelles Angebot",
    description: "Sie erhalten ein faires, transparentes Angebot",
  },
  {
    number: "4",
    title: "Termin & Umsetzung",
    description: "Wir setzen Ihr Projekt termingerecht um",
  },
  {
    number: "5",
    title: "Abnahme",
    description: "Sauberes Ergebnis – garantiert",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-10 sm:py-16 md:py-20 lg:py-24 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-3 sm:px-4">
        <ScrollAnimation>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-[#1D1D1F] mb-3 sm:mb-4 tracking-tight px-2">
            So einfach geht's
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#86868B] text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            In 5 Schritten zu Ihrem fertigen Projekt
          </p>
        </ScrollAnimation>

        {/* Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-4">
          {steps.map((step, index) => (
            <ScrollAnimation key={step.number} delay={index * 100}>
              <div className="flex flex-col items-center text-center">
                {/* Number Circle */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#0071E3] text-white flex items-center justify-center text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4">
                  {step.number}
                </div>
                
                {/* Connector Line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-[2px] bg-[#D2D2D7]" />
                )}
                
                {/* Title */}
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#1D1D1F] mb-1 sm:mb-2">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-[#86868B] max-w-[150px] sm:max-w-[180px]">
                  {step.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation delay={600}>
          <div className="text-center mt-8 sm:mt-12">
            <button className="btn-apple-primary text-sm sm:text-[17px] px-6 sm:px-8 py-2.5 sm:py-3">
              Jetzt Anfrage senden
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
