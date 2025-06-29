"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface KitaGalleryProps {
  title: string;
  subtitle: string;
  images: GalleryImage[];
  roomsTitle: string;
  roomsDescription: string;
  outdoorTitle: string;
  outdoorDescription: string;
}

export const KitaGallery = ({
  title,
  subtitle,
  images,
  roomsTitle,
  roomsDescription,
  outdoorTitle,
  outdoorDescription
}: KitaGalleryProps) => {
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
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
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
              aria-label="Vorheriges Bild"
              aria-describedby="Vorheriges Bild"
              aria-expanded={false}
              aria-pressed={false}
              aria-controls="gallery-images"
              aria-live="polite"
              aria-busy={false}
            >
              <ChevronLeft className="h-6 w-6 text-stadtkueken-brown" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Nächstes Bild"
              aria-describedby="Nächstes Bild"
              aria-expanded={false}
              aria-pressed={false}
              aria-controls="gallery-images"
              aria-live="polite"
              aria-busy={false}
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
                aria-label={`Bild ${index + 1} von ${images.length}`}
                aria-describedby={`Bild ${index + 1} von ${images.length}`}
                aria-expanded={false}
                aria-pressed={false}
                aria-controls="gallery-images"
                aria-live="polite"
                aria-busy={false}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-stadtkueken-brown mb-4 font-amatic">
              {roomsTitle}
            </h3>
            <p className="text-gray-700 mb-4">
              {roomsDescription}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-stadtkueken-brown mb-4 font-amatic">
              {outdoorTitle}
            </h3>
            <p className="text-gray-700 mb-4">
              {outdoorDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 