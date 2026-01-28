/*
 * Design Philosophy: "Cupertino Elegance"
 * FAQ Section: Häufig gestellte Fragen für RomanBau
 * - Accordion-Style mit Apple-Design
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const faqs = [
  {
    question: "In welchen Bezirken arbeitet ihr?",
    answer: "Wir sind in ganz Berlin und Umgebung für Sie im Einsatz. Egal ob Mitte, Charlottenburg, Kreuzberg oder am Stadtrand – wir kommen zu Ihnen.",
  },
  {
    question: "Wie schnell bekomme ich ein Angebot?",
    answer: "Nach Erhalt Ihrer Fotos oder nach einer Besichtigung vor Ort erstellen wir Ihnen schnellstmöglich ein faires und transparentes Angebot.",
  },
  {
    question: "Macht ihr auch Komplettsanierungen?",
    answer: "Ja, wir begleiten Ihr Projekt von A bis Z. Von der Planung über die Umsetzung bis zur finalen Abnahme – alles aus einer Hand.",
  },
  {
    question: "Sind kurzfristige Termine möglich?",
    answer: "Je nach aktueller Kapazität können wir auch kurzfristige Termine anbieten. Fragen Sie einfach an – wir finden eine Lösung.",
  },
  {
    question: "Wie läuft eine Besichtigung ab?",
    answer: "Sie können uns Fotos senden oder eine Besichtigung vor Ort anfragen. Der Inhaber kommt persönlich vorbei, bespricht Ihre Wünsche und erstellt daraufhin ein schnelles, faires Angebot.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden" id="faq">
      <div className="max-w-[680px] mx-auto px-3 sm:px-4">
        <ScrollAnimation>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-[#1D1D1F] mb-3 sm:mb-4 tracking-tight px-2">
            Häufige Fragen
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#86868B] text-center mb-8 sm:mb-12 px-2">
            Antworten auf Ihre wichtigsten Fragen
          </p>
        </ScrollAnimation>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} delay={index * 50}>
              <div className="border-b border-[#D2D2D7]">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 sm:py-5 flex items-center justify-between text-left group"
                >
                  <span className="text-sm sm:text-base md:text-[17px] font-semibold text-[#1D1D1F] pr-3 sm:pr-4 group-hover:text-[#0071E3] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-[#86868B] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openIndex === index ? "max-h-[250px] pb-4 sm:pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-xs sm:text-sm md:text-[15px] text-[#86868B] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation delay={300}>
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-[#86868B] text-sm sm:text-base mb-3 sm:mb-4">
              Noch Fragen? Wir helfen Ihnen gerne weiter.
            </p>
            <button className="btn-apple-primary text-sm sm:text-[17px] px-6 sm:px-8 py-2.5 sm:py-3">
              Kontakt aufnehmen
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
