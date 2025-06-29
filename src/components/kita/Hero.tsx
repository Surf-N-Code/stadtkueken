import { Button } from "@/components/ui/button";
import { SmoothScrollButton } from "@/components/SmoothScrollButton";
import { Phone, MapPin, Clock, Users } from "lucide-react";

export interface KitaHeroProps {
  name: string;
  location: string;
  subtitle: string;
  backgroundImage: string;
  childrenCount: number;
  ageRange: string;
  address: string;
  postalCode: string;
  city: string;
  openingHours: string;
  sinceDate: string;
  phoneNumber: string;
  contactId?: string;
}

export const KitaHero = ({
  name,
  location,
  subtitle,
  backgroundImage,
  childrenCount,
  ageRange,
  address,
  postalCode,
  city,
  openingHours,
  sinceDate,
  phoneNumber,
  contactId = "contact"
}: KitaHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${backgroundImage}')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight font-amatic pt-20 md:pt-0">
            Kita <span className="text-stadtkueken-orange">{name}</span> {location}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-balance">
            {subtitle}
          </p>
          
          {/* Kita Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left max-w-3xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-lg font-semibold mb-1 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                {childrenCount} Kinder
              </div>
              <div className="text-sm opacity-90">{ageRange}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-lg font-semibold mb-1 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {address}
              </div>
              <div className="text-sm opacity-90">{postalCode} {city}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-lg font-semibold mb-1 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {openingHours}
              </div>
              <div className="text-sm opacity-90">Seit {sinceDate}</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <SmoothScrollButton 
              targetId={contactId}
              className="bg-stadtkueken-orange hover:bg-stadtkueken-orange-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover-lift h-11"
            >
              Besichtigung buchen
            </SmoothScrollButton>
            <Button 
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-white text-stadtkueken-brown hover:bg-white hover:text-stadtkueken-brown px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 bg-white"
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="mr-2 h-5 w-5" />
                Jetzt anrufen
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}; 