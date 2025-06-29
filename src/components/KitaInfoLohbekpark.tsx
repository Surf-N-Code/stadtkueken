
import { Leaf, Heart, Users, Sun, Sprout, Utensils } from "lucide-react";

export const KitaInfoLohbekpark = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stadtkueken-brown mb-4 font-amatic">
            Deine Natur-Kita Lohbekpark in Lokstedt
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seit November 2024 heißen wir in unserer neuen Kita in Hamburg-Lokstedt rund 65 kleine Küken im Alter von einem bis sechs Jahren willkommen. Unser einzigartiges Konzept verbindet Natur, Achtsamkeit und Partizipation zu einem Ort, an dem Kinder in einer warmen, wertschätzenden Atmosphäre spielen, lernen und wachsen können.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Die hellen, neu gestalteten Räume laden zum Wohlfühlen ein, während der liebevoll angelegte naturnahe Außenbereich den perfekten Rückzugsort mitten in der Stadt bietet. Hier können Kinder die Natur entdecken, Abenteuer erleben und einfach Kind sein.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Unser engagiertes pädagogisches Team begleitet jedes Kind individuell und mit Herz. Mit einem achtsamen Blick auf die Bedürfnisse der Kinder schaffen wir Raum für Entfaltung und stärken sie auf ihrem Weg zu selbstbewussten und kreativen Persönlichkeiten.
            </p>
            <div className="bg-stadtkueken-beige rounded-2xl p-6">
              <blockquote className="text-lg text-stadtkueken-brown italic leading-relaxed">
                "Wir ermutigen unsere Kinder dazu in sich hineinzuhören, Gefühle nicht zu verdrängen, sondern aktiv wahrzunehmen, zu benennen und sie einzusortieren."
              </blockquote>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://stadtkueken.de/wp-content/uploads/240130_Lohbekpark_F.jpg"
              alt="Außenansicht Kita Lohbekpark"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* What makes us special */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-stadtkueken-green-light/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-stadtkueken-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-stadtkueken-brown mb-4 font-amatic">
              Aktivitäten
            </h3>
            <p className="text-gray-700">
              Vielfältige Aktivitäten in der Natur fördern die Kreativität und das Bewusstsein für die Umwelt unserer Kinder.
            </p>
          </div>
          
          <div className="bg-stadtkueken-orange/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-stadtkueken-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-stadtkueken-brown mb-4 font-amatic">
              Ernährung
            </h3>
            <p className="text-gray-700">
              Frische, gesunde Mahlzeiten nach DGE-Standard fördern eine bewusste Ernährung von klein auf.
            </p>
          </div>
          
          <div className="bg-stadtkueken-brown/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-stadtkueken-brown rounded-full flex items-center justify-center mx-auto mb-4">
              <Sprout className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-stadtkueken-brown mb-4 font-amatic">
              Ackerracker
            </h3>
            <p className="text-gray-700">
              Unser eigener Gemüsegarten lehrt Kinder, woher das Essen kommt und wie es wächst.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-stadtkueken-beige rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-stadtkueken-brown mb-8 text-center font-amatic">
            Unsere Werte
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-stadtkueken-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-stadtkueken-brown mb-2">Achtsamkeit</h4>
              <p className="text-gray-700 text-sm">
                Wir achten auf jedes Kind und seine individuellen Bedürfnisse
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-stadtkueken-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-stadtkueken-brown mb-2">Natur</h4>
              <p className="text-gray-700 text-sm">
                Die Natur ist unser wichtigster Lernort und Spielplatz
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-stadtkueken-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-stadtkueken-brown mb-2">Partizipation</h4>
              <p className="text-gray-700 text-sm">
                Kinder gestalten ihren Kita-Alltag aktiv mit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
