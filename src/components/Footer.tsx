
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-stadtkueken-brown text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-amatic">Stadtküken</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">JAH Verwaltungs GmbH</div>
                  <div>Poßmoorweg 2</div>
                  <div>22307 Hamburg</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-amatic">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:04032890120"
                className="flex items-center space-x-3 hover:text-stadtkueken-orange transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>040 / 3289 012-0</span>
              </a>
              <a 
                href="mailto:info@stadtkueken.de"
                className="flex items-center space-x-3 hover:text-stadtkueken-orange transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@stadtkueken.de</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-amatic">Navigation</h3>
            <div className="space-y-2 text-sm">
              <a href="https://stadtkueken.de/standorte" className="block hover:text-stadtkueken-orange transition-colors">Standorte</a>
              <a href="https://stadtkueken.de/kita-konzept" className="block hover:text-stadtkueken-orange transition-colors">Konzept</a>
              <a href="https://stadtkueken.de/karriere" className="block hover:text-stadtkueken-orange transition-colors">Karriere</a>
              <a href="https://stadtkueken.de/blog" className="block hover:text-stadtkueken-orange transition-colors">Blog</a>
            </div>
          </div>

          {/* Opening Hours & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-amatic">Öffnungszeiten</h3>
            <div className="space-y-2 text-sm mb-6">
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <div>Mo - Fr: 07:00 - 17:00 Uhr</div>
                  <div className="text-white/70">Wochenende: Geschlossen</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Folgen Sie uns</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/stadtkueken/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stadtkueken-orange rounded-full flex items-center justify-center hover:bg-stadtkueken-orange-dark transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/stadtkueken_kita/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stadtkueken-orange rounded-full flex items-center justify-center hover:bg-stadtkueken-orange-dark transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
              <a href="https://stadtkueken.de/impressum/" className="hover:text-stadtkueken-orange transition-colors">Impressum</a>
              <a href="https://stadtkueken.de/datenschutz/" className="hover:text-stadtkueken-orange transition-colors">Datenschutz</a>
              <a href="https://stadtkueken.de/datenschutz-social-media/" className="hover:text-stadtkueken-orange transition-colors">Datenschutz Social Media</a>
            </div>
            <div className="text-sm text-white/70">
              © 2025 JAH Verwaltungs GmbH. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
