/*
 * Design Philosophy: "Cupertino Elegance"
 * Navigation: Sticky header für RomanBau
 * - Logo links, Menüpunkte mittig, Kontakt rechts
 */

import { useState, useEffect } from "react";
import { Menu, Phone, X } from "lucide-react";

const navItems = [
  "Leistungen",
  "Ablauf",
  "Über uns",
  "Portfolio",
  "Referenzen",
  "FAQ",
  "Kontakt",
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#000000]/95 backdrop-blur-xl" : "bg-[#000000]"
      }`}
    >
      <div className="max-w-[1024px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-11 sm:h-12">
          {/* Logo */}
          <a 
            href="#" 
            className="text-white font-semibold text-base sm:text-lg tracking-tight hover:opacity-80 transition-opacity duration-300 flex-shrink-0"
            aria-label="RomanBau Home"
          >
            RomanBau
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white text-[13px] font-normal transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA & Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a 
              href="tel:+4917680542027"
              className="hidden md:flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
              aria-label="Anrufen"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-[13px]">0176 80542027</span>
            </a>
            <button className="hidden sm:block btn-apple-primary text-xs sm:text-[13px] px-3 sm:px-4 py-1.5">
              Anfrage
            </button>
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white/80 hover:text-white transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" strokeWidth={1.5} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#000000] border-t border-white/10">
          <div className="px-4 sm:px-6 py-4 sm:py-5 space-y-0">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white/90 hover:text-white text-base sm:text-[17px] font-normal py-2.5 sm:py-3 border-b border-white/10 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-3 sm:pt-4 space-y-3">
              <a 
                href="tel:+4917680542027"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" />
                <span>0176 80542027</span>
              </a>
              <button className="w-full btn-apple-primary text-base sm:text-[17px] py-2.5 sm:py-3">
                Anfrage senden
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
