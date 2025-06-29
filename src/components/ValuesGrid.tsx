
import { Heart, Trees, Users, GraduationCap, Leaf, Music, Apple, Sun, Sprout } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Achtsamkeit",
    description: "Jedes Kind wird gesehen, akzeptiert & geschätzt; pädagogische Achtsamkeitsübungen im Alltag."
  },
  {
    icon: Trees,
    title: "Stadt & Natur",
    description: "Großzügige Außengelände + tägliche Waldausflüge; Stadtleben achtsam erleben & ausgleichen."
  },
  {
    icon: Users,
    title: "Partizipation",
    description: "Kinder entscheiden mit – Mitbestimmung & Selbstwirksamkeit ab Krippe."
  },
  {
    icon: GraduationCap,
    title: "Liebevolle Betreuung",
    description: "Qualifizierte Pädagog·innen (Erzieher, SPA, Heilpädagog·innen) begleiten von 10 Mon. bis 6 J."
  },
  {
    icon: Leaf,
    title: "Nachhaltigkeit",
    description: "Papierfreie CARE-App, Naturmaterial-Innenausbau, Ressourcenschonung im Alltag."
  },
  {
    icon: Apple,
    title: "Ernährung",
    description: "Frisch, regional, > 70 % Bio | DGE-Standard, Frühstück + Mittag + Snack."
  },
  {
    icon: Music,
    title: "Aktivitäten",
    description: "Yoga, Musik, Tanz, Talking-Hands Gebärden, Sommer-Betreuung."
  },
  {
    icon: Sun,
    title: "SunPass-Sonnenschutz",
    description: "Ausgezeichnete Vorsorge – UV-Schutz-Programm & Sonnenschutzbeauftragte."
  },
  {
    icon: Sprout,
    title: "Ackerracker",
    description: "Eigenes Hochbeet; Kinder säen, pflegen & ernten Gemüse – Bewusstsein für Ernährung & Naturkreisläufe."
  }
];

export const ValuesGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stadtkueken-brown mb-4 font-amatic">
            Unsere Werte & Leistungen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Was uns ausmacht und was wir Ihrem Kind bieten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-stadtkueken-beige rounded-2xl p-8 text-center hover-lift transition-all duration-300 hover:bg-stadtkueken-cream group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-stadtkueken-orange rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-stadtkueken-brown mb-4 font-amatic">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
