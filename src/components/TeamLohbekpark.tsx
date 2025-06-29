
import { Phone, Mail } from "lucide-react";

export const TeamLohbekpark = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stadtkueken-brown mb-4 font-amatic">
            Unsere Leitung
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Leidenschaftliche Pädagogin, die Ihr Kind auf seinem Weg begleitet
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="relative mb-8 lg:mb-0">
                <img
                  src="https://stadtkueken.de/wp-content/uploads/Stadtkueken-Website-Bilder-Portraet-Judith-Lohbekpark-600x600.png"
                  alt="Judith Müller"
                  className="w-64 h-64 rounded-full mx-auto lg:mx-0 object-cover shadow-lg"
                />
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-stadtkueken-brown mb-2 font-amatic">
                Judith Müller
              </h3>
              <p className="text-xl text-stadtkueken-orange font-semibold mb-6">
                Leitung Kita Lohbekpark
              </p>
              
              <div className="space-y-4 mb-8">
                <a 
                  href="tel:04032890118"
                  className="flex items-center justify-center lg:justify-start space-x-3 text-stadtkueken-brown hover:text-stadtkueken-orange transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-lg">040 3289 012 - 18</span>
                </a>
                <a 
                  href="mailto:lohbekpark@stadtkueken.de"
                  className="flex items-center justify-center lg:justify-start space-x-3 text-stadtkueken-brown hover:text-stadtkueken-orange transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>lohbekpark@stadtkueken.de</span>
                </a>
              </div>

              <div className="bg-stadtkueken-beige rounded-2xl p-6">
                <blockquote className="text-lg text-stadtkueken-brown italic leading-relaxed">
                  "Die partnerschaftliche und enge Zusammenarbeit zwischen den Eltern und unserer Kita stellt eine Voraussetzung für das Wohlbefinden und die Entwicklung unserer Kinder dar."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
