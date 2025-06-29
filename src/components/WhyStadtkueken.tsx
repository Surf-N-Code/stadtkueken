
import { Award, CreditCard, Heart, MapPin, Quote, Star, Users } from "lucide-react";

export const WhyStadtkueken = () => {
  return (
    <section className="py-20 bg-stadtkueken-green-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stadtkueken-brown mb-4 font-amatic">
            Warum Stadtküken?
          </h2>
          <div className="text-xl text-stadtkueken-orange font-semibold mb-4 italic">
            "Sawubona – Ich sehe dich."
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bei den Stadtküken wird jeder gesehen, akzeptiert & geschätzt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-stadtkueken-orange rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stadtkueken-brown mb-2">
                  SunPass Kita 2021/22
                </h3>
                <p className="text-gray-700">
                  Kita Mühlenhof erhielt Hamburger Sonnenschutz-Auszeichnung; Ziel: UV-Belastung verringern.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-stadtkueken-orange rounded-full flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stadtkueken-brown mb-2">
                  Kita-Gutschein akzeptiert
                </h3>
                <p className="text-gray-700">
                  Staatliche Förderung · 5 h Betreuung kostenlos · Elternanteil max. 204 €/Monat (12 h).
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-stadtkueken-orange rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stadtkueken-brown mb-2">
                  8 Standorte in Hamburg
                </h3>
                <p className="text-gray-700">
                  Wandsbek (Mühle, Mühlenhof, Putte) · Blankenese (Villa Blumenfeld) · Lokstedt (Lohbekpark) · Lemsahl (Treudelberg) · Neugraben (Baumpieper) · Groß Borstel (Johann's Garten).
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-stadtkueken-orange rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stadtkueken-brown mb-2">
                  Inklusive Kommunikation
                </h3>
                <p className="text-gray-700">
                  Talking Hands Daumenkinos • Gebärden-Unterstützung fördert Sprachentwicklung & Inklusion.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
              <Quote className="h-12 w-12 text-stadtkueken-orange mb-6" />
              <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                "Unser Sohn kommt strahlend nach Hause!"
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stadtkueken-beige rounded-full flex items-center justify-center">
                  <span className="text-stadtkueken-brown font-bold">E</span>
                </div>
                <div>
                  <div className="font-semibold text-stadtkueken-brown">Elena</div>
                  <div className="text-sm text-gray-600">Mutter, 2024</div>
                </div>
              </div>
            </div>

            <div className="bg-stadtkueken-orange rounded-2xl p-6 text-white text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-2xl font-bold">4,9</span>
                <Star className="h-5 w-5 fill-current" />
              </div>
              <div className="text-lg font-semibold mb-1">Google Bewertungen</div>
              <div className="text-sm opacity-90">{'>'} 120 Bewertungen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
