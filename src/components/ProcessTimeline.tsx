
import { Phone, Eye, Heart, Calendar } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Anfrage stellen",
    description: "Online-Formular oder Telefon – wir melden uns binnen 48 h."
  },
  {
    icon: Calendar,
    title: "Besichtigung buchen",
    description: "Calendly Integration – freie Slots für Ihren Wunsch-Standort."
  },
  {
    icon: Eye,
    title: "Eingewöhnung planen",
    description: "Schritt-für-Schritt nach Berliner Modell, Ø 4 Wochen."
  },
  {
    icon: Heart,
    title: "Sanft ankommen",
    description: "Ihr Kind wird Teil der Gruppe, wir bleiben im Austausch."
  }
];

export const ProcessTimeline = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stadtkueken-brown mb-4 font-amatic">
            So einfach geht's
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ihr Weg zu einem Kitaplatz bei Stadtküken in vier einfachen Schritten
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-stadtkueken-beige"></div>
            <div className="hidden md:block absolute top-16 left-0 h-1 bg-stadtkueken-orange w-1/4 transition-all duration-1000"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center group">
                  {/* Step Number Circle */}
                  <div className="relative z-10 mx-auto w-32 h-32 bg-stadtkueken-orange rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <step.icon className="h-12 w-12 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-stadtkueken-brown rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  <div className="bg-stadtkueken-beige rounded-2xl p-6 hover-lift transition-all duration-300">
                    <h3 className="text-xl font-bold text-stadtkueken-brown mb-4 font-amatic">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
