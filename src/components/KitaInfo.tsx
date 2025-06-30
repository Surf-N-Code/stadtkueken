import { Leaf, Heart, Users, Sun, Sprout, Utensils } from "lucide-react";

export interface KitaInfoProps {
  name: string;
  location: string;
  description: string;
  paragraph1: string;
  paragraph2: string;
  quote: string;
  imageUrl: string;
  imageAlt: string;
  activities: {
    title: string;
    description: string;
  };
  nutrition: {
    title: string;
    description: string;
  };
  garden: {
    title: string;
    description: string;
  };
  values: {
    mindfulness: string;
    nature: string;
    participation: string;
  };
}

export const KitaInfo = ({
  name,
  location,
  description,
  paragraph1,
  paragraph2,
  quote,
  imageUrl,
  imageAlt,
  activities,
  nutrition,
  garden,
  values
}: KitaInfoProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stadtkueken-brown mb-4 font-amatic">
            Deine Natur-Kita {name} in {location}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              {paragraph1}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              {paragraph2}
            </p>
            <div className="bg-stadtkueken-beige rounded-2xl p-6">
              <blockquote className="text-lg text-stadtkueken-brown italic leading-relaxed">
                "{quote}"
              </blockquote>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
              aria-label={imageAlt}
              aria-describedby={imageAlt}
              aria-expanded={false}
              aria-pressed={false}
              aria-controls="gallery-images"
              aria-live="polite"
              aria-busy={false}
            />
          </div>
        </div>

        {/* What makes us special */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-stadtkueken-green-light/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-stadtkueken-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <p className="text-2xl font-bold text-stadtkueken-brown mb-4 font-amatic">
              {activities.title}
            </p>
            <p className="text-gray-700">
              {activities.description}
            </p>
          </div>
          
          <div className="bg-stadtkueken-orange/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-stadtkueken-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="h-8 w-8 text-white" />
            </div>
            <p className="text-2xl font-bold text-stadtkueken-brown mb-4 font-amatic">
              {nutrition.title}
            </p>
            <p className="text-gray-700">
              {nutrition.description}
            </p>
          </div>
          
          <div className="bg-stadtkueken-brown/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-stadtkueken-brown rounded-full flex items-center justify-center mx-auto mb-4">
              <Sprout className="h-8 w-8 text-white" />
            </div>
            <p className="text-2xl font-bold text-stadtkueken-brown mb-4 font-amatic">
              {garden.title}
            </p>
            <p className="text-gray-700">
              {garden.description}
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
              <p className="font-amatic text-xl font-bold text-stadtkueken-brown mb-2">Achtsamkeit</p>
              <p className="text-gray-700 text-sm">
                {values.mindfulness}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-stadtkueken-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <p className="font-amatic text-xl font-bold text-stadtkueken-brown mb-2">Natur</p>
              <p className="text-gray-700 text-sm">
                {values.nature}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-stadtkueken-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <p className="font-amatic text-xl font-bold text-stadtkueken-brown mb-2">Partizipation</p>
              <p className="text-gray-700 text-sm">
                {values.participation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 