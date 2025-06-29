"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "https://stadtkueken.de/wp-content/uploads/240130_Lohbekpark_F.jpg",
    alt: "Außenansicht Kita Lohbekpark"
  },
  {
    src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Treudelberg-7.jpg",
    alt: "Elementarbereich"
  },
  {
    src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Treudelberg-4.jpg",
    alt: "Garderobe"
  },
  {
    src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Treudelberg-9.jpg",
    alt: "Krippenbereich"
  },
  {
    src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-Treudelberg-6.jpg",
    alt: "Waschraum"
  },
  {
    src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-47.jpg",
    alt: "Kinder spielen an der Matschküche"
  },
  {
    src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-25.jpg",
    alt: "Gemüse anbauen und ernten in der Kita"
  },
  {
    src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-13.jpg",
    alt: "Kinder lernen gesunde Ernährung"
  }
];

export const GalleryLohbekpark = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-stadtkueken-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stadtkueken-brown mb-4 font-amatic">
            Unsere Einrichtung
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entdecke unsere liebevoll gestalteten Räume und den wunderschönen naturnahen Außenbereich in der Kita Lohbekpark
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-stadtkueken-brown" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-stadtkueken-brown" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? 'bg-stadtkueken-orange scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-stadtkueken-brown mb-4 font-amatic">
              Unsere Räume
            </h3>
            <p className="text-gray-700 mb-4">
              In unseren kindgerechten, hellen Räumen finden unsere Küken den perfekten Wohlfühlort zum Spielen mit vielen gemütlichen Rückzugsorten zum Ausruhen, Lesen & Kuscheln.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-stadtkueken-brown mb-4 font-amatic">
              Außenbereich
            </h3>
            <p className="text-gray-700 mb-4">
              Unser Außenbereich bietet viel Platz für abwechslungsreiches und kreatives Spielen unter freiem Himmel & Auszeiten vom Stadtleben in der Natur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
