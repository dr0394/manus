/*
 * Design Philosophy: "Cupertino Elegance"
 * Footer: RomanBau Kontakt und Links
 */

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const footerLinks = {
  "Leistungen": [
    "Malerarbeiten",
    "Spachtelarbeiten",
    "Trockenbau",
    "Bodenverlegung",
    "Fliesenarbeiten",
    "Abrissarbeiten",
  ],
  "Einsatzbereiche": [
    "Wohnung",
    "Haus",
    "Büro",
    "Gewerbe",
  ],
  "Unternehmen": [
    "Über uns",
    "Ablauf",
    "Referenzen",
    "FAQ",
  ],
  "Kontakt": [
    "Anfrage senden",
    "WhatsApp",
    "Besichtigung anfragen",
  ],
};

const bottomLinks = [
  "Impressum",
  "Datenschutz",
  "AGB",
];

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1F] overflow-hidden">
      {/* Main Footer */}
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Top Section with Logo and Contact */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 sm:gap-8 mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-white/10">
          {/* Logo & Tagline */}
          <div className="max-w-sm">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">RomanBau</h3>
            <p className="text-[#86868B] text-xs sm:text-sm mb-3 sm:mb-4">
              Ihr zuverlässiger Handwerksbetrieb in Berlin – Renovierung, Sanierung & Ausbau von A bis Z.
            </p>
            <p className="text-white/60 text-xs sm:text-sm italic">
              „Bei RomanBau sprechen Sie direkt mit dem Chef – keine Vermittler, keine versteckten Kosten.“
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Kontakt aufnehmen</h4>
            <a href="tel:+4917680542027" className="flex items-center gap-2 sm:gap-3 text-[#86868B] hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">0176 80542027</span>
            </a>
            <a href="https://wa.me/4917680542027" className="flex items-center gap-2 sm:gap-3 text-[#86868B] hover:text-white transition-colors">
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">WhatsApp</span>
            </a>
            <a href="mailto:ROMANbauinfo@gmail.com" className="flex items-center gap-2 sm:gap-3 text-[#86868B] hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm break-all">ROMANbauinfo@gmail.com</span>
            </a>
            <div className="flex items-start gap-2 sm:gap-3 text-[#86868B]">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm">Louis-Lewin-Straße 34, 12627 Berlin</span>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[11px] sm:text-[12px] font-semibold text-white mb-2 sm:mb-3 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[12px] sm:text-[13px] text-[#86868B] hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 py-4 sm:py-6 border-t border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FBBC04]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <span className="text-[#86868B] text-xs sm:text-sm">Zufriedene Kunden in Berlin</span>
          </div>
          <span className="text-white/20 hidden sm:block">|</span>
          <span className="text-[#86868B] text-xs sm:text-sm">Google Bewertungen</span>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 sm:gap-3">
            <p className="text-[11px] sm:text-[12px] text-[#86868B] text-center md:text-left">
              © 2026 RomanBau. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-3 sm:gap-x-4 gap-y-1">
              {bottomLinks.map((link, index) => (
                <span key={link} className="flex items-center">
                  <a
                    href="#"
                    className="text-[11px] sm:text-[12px] text-[#86868B] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                  {index < bottomLinks.length - 1 && (
                    <span className="text-white/20 ml-3 sm:ml-4">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
