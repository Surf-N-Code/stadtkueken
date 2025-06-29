import { Button } from "@/components/ui/button";
import { SmoothScrollButton } from "@/components/SmoothScrollButton";
import { Phone, MapPin, Clock, Users } from "lucide-react";

export const HeroLohbekpark = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://stadtkueken.de/wp-content/uploads/240130_Lohbekpark_F.jpg')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight font-amatic pt-20 md:pt-0">
            Kita <span className="text-stadtkueken-orange">Lohbekpark</span> Lokstedt
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-balance">
            Willkommen in der Kita Lohbekpark in Lokstedt
          </p>
          
          {/* Kita Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left max-w-3xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-lg font-semibold mb-1 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                65 Kinder
              </div>
              <div className="text-sm opacity-90">10 Monate - 6 Jahre</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-lg font-semibold mb-1 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Lohkoppelweg 35b
              </div>
              <div className="text-sm opacity-90">22529 Hamburg</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-lg font-semibold mb-1 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Mo-Fr 07:00-17:00
              </div>
              <div className="text-sm opacity-90">Seit November 2024</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <SmoothScrollButton 
              targetId="contact"
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
              <a href="tel:04032890118">
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
