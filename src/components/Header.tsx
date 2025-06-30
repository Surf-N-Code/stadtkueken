"use client";
import { useState, useEffect } from "react";
import { SmoothScrollButton } from "@/components/SmoothScrollButton";
import { Phone, Mail } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-white shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/images/logo.png" 
              alt="Stadtküken Logo" 
              className="h-12 w-auto"
              aria-label="Stadtküken Logo"
              aria-describedby="Stadtküken Logo"
            />
          </div>

          {/* Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6 text-stadtkueken-brown">
              <a href="tel:04032890120" className="flex items-center space-x-2 hover:text-stadtkueken-orange transition-colors" aria-label="Telefonnummer" aria-describedby="Telefonnummer" aria-expanded={false} aria-pressed={false} aria-controls="header" aria-live="polite" aria-busy={false} aria-disabled={false}>
                <Phone className="h-4 w-4" />
                <div>
                  <div className="font-semibold">040 / 3289 012-0</div>
                  <div className="text-xs text-gray-600">Mo-Fr 07:00-17:00 Uhr</div>
                </div>
              </a>
              <a href="mailto:info@stadtkueken.de" className="flex items-center space-x-2 hover:text-stadtkueken-orange transition-colors" aria-label="Email" aria-describedby="Email" aria-expanded={false} aria-pressed={false} aria-controls="header" aria-live="polite" aria-busy={false} aria-disabled={false}>
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@stadtkueken.de</span>
              </a>
            </div>
            <SmoothScrollButton 
              targetId="contact"
              className="bg-stadtkueken-orange hover:bg-stadtkueken-orange-dark text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              aria-label="Jetzt Kitaplatz anfragen"
              aria-describedby="Jetzt Kitaplatz anfragen"
              aria-expanded={false}
              aria-pressed={false}
              aria-controls="header"
              aria-live="polite"
              aria-busy={false}
              aria-disabled={false}
            >
              Jetzt Kitaplatz anfragen
            </SmoothScrollButton>
          </div>

          {/* Mobile Phone Icon - Only visible on mobile */}
          <div className="md:hidden">
            <a 
              href="tel:04032890120"
              className="flex items-center justify-center w-10 h-10 bg-stadtkueken-orange hover:bg-stadtkueken-orange-dark text-white rounded-full transition-colors"
              aria-label="Telefonnummer"
              aria-describedby="Telefonnummer"
              aria-expanded={false}
              aria-pressed={false}
              aria-controls="header"
              aria-live="polite"
              aria-busy={false}
              aria-disabled={false}
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
