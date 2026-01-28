/*
 * Design Philosophy: "Cupertino Elegance"
 * Contact Section: Kontaktformular und Kontaktinfos für RomanBau
 */

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Anfrage gesendet! Wir melden uns schnellstmöglich bei Ihnen.");
  };

  return (
    <section className="py-10 sm:py-16 md:py-20 lg:py-24 bg-[#F5F5F7] overflow-hidden" id="kontakt">
      <div className="max-w-[980px] mx-auto px-3 sm:px-4">
        <ScrollAnimation>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-[#1D1D1F] mb-3 sm:mb-4 tracking-tight px-2">
            Kontakt aufnehmen
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#86868B] text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            Senden Sie uns Ihre Anfrage – wir melden uns schnellstmöglich bei Ihnen.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Contact Form */}
          <ScrollAnimation delay={100}>
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] mb-4 sm:mb-6">
                Anfrage senden
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm text-[#86868B] mb-1">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#0071E3] focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="Ihr Name"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm text-[#86868B] mb-1">E-Mail</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#0071E3] focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="ihre@email.de"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm text-[#86868B] mb-1">Telefon</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#0071E3] focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm text-[#86868B] mb-1">Ihre Nachricht</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#0071E3] focus:outline-none transition-colors resize-none text-sm sm:text-base"
                    rows={4}
                    placeholder="Beschreiben Sie Ihr Projekt..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-apple-primary text-sm sm:text-[17px] py-2.5 sm:py-3 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Anfrage senden
                </button>
              </form>
            </div>
          </ScrollAnimation>

          {/* Contact Info */}
          <ScrollAnimation delay={200}>
            <div className="space-y-4 sm:space-y-6">
              {/* Direct Contact */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] mb-4 sm:mb-6">
                  Direkt erreichen
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <a href="tel:+4917680542027" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#F5F5F7] hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0071E3]/10 flex items-center justify-center text-[#0071E3] flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-[#86868B]">Telefon</p>
                      <p className="text-[#1D1D1F] font-medium text-sm sm:text-base">0176 80542027</p>
                    </div>
                  </a>
                  <a href="https://wa.me/4917680542027" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#F5F5F7] hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] flex-shrink-0">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-[#86868B]">WhatsApp</p>
                      <p className="text-[#1D1D1F] font-medium text-sm sm:text-base">Fotos senden & anfragen</p>
                    </div>
                  </a>
                  <a href="mailto:ROMANbauinfo@gmail.com" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#F5F5F7] hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0071E3]/10 flex items-center justify-center text-[#0071E3] flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-[#86868B]">E-Mail</p>
                      <p className="text-[#1D1D1F] font-medium text-sm sm:text-base break-all">ROMANbauinfo@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0071E3]/10 flex items-center justify-center text-[#0071E3] flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-[#86868B]">Adresse</p>
                    <p className="text-[#1D1D1F] font-medium text-sm sm:text-base">Louis-Lewin-Straße 34, 12627 Berlin</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
