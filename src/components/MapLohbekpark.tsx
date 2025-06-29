
import { MapPin } from "lucide-react";

export const MapLohbekpark = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stadtkueken-brown mb-4 font-amatic">
            Anfahrt zur Kita Lohbekpark
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Besuchen Sie uns in der Lohkoppelweg 35b, 22529 Hamburg. Wir freuen uns auf Ihren Besuch!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Address Info */}
          <div className="lg:col-span-1">
            <div className="bg-stadtkueken-beige rounded-2xl p-8 h-full">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-stadtkueken-orange rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stadtkueken-brown mb-2">
                    Stadtküken Kita Lohbekpark
                  </h3>
                  <p className="text-gray-700">
                    Lohkoppelweg 35b<br />
                    22529 Hamburg<br />
                    Lokstedt
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-stadtkueken-brown mb-2">Öffentliche Verkehrsmittel</h4>
                  <p className="text-gray-600 text-sm">
                    Gut erreichbar mit Bus und Bahn. Haltestellen in der Nähe.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-stadtkueken-brown mb-2">Parkmöglichkeiten</h4>
                  <p className="text-gray-600 text-sm">
                    Parkplätze in der Umgebung verfügbar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96 lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.1234567890123!2d9.9234567890123456!3d53.5987654321098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f5a1b2c3d4e%3A0x1234567890abcdef!2sLohkoppelweg%2035B%2C%2022529%20Hamburg!5e0!3m2!1sde!2sde!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kita Lohbekpark Standort"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
