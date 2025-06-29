"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const images = [
  {
    src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-47-600x400.jpg",
    alt: "Außengelände mit Kindern"
  },
  {
    src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-26-600x400.jpg",
    alt: "Krippenraum"
  },
  {
    src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-28-600x400.jpg",
    alt: "Gruppenraum"
  },
  {
    src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-30-600x400.jpg",
    alt: "Kinder beim Spielen"
  },
  {
    src: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-46-600x400.jpg",
    alt: "Betreuungsraum"
  },
  {
    src: "https://stadtkueken.de/wp-content/uploads/5F9A8565-600x375.jpg",
    alt: "Kinder im Garten"
  }
];

export const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stadtkueken-brown mb-4">
            Einblicke & Atmosphäre
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie unsere liebevoll gestalteten Räume und das wunderschöne Außengelände
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6 text-stadtkueken-brown" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 hover:scale-110"
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

          {/* Video Preview */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-stadtkueken-beige">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-32.jpg')"
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-stadtkueken-orange hover:bg-stadtkueken-orange-dark text-white rounded-full p-6 transition-all duration-300 hover:scale-110 animate-pulse">
                <Play className="h-8 w-8 ml-1" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-bold text-xl mb-2">
                Willkommen bei Stadtküken
              </h3>
              <p className="text-white/90 text-sm">
                Unsere Erzieher*innen begrüßen Sie herzlich
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
