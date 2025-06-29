import { Button } from "@/components/ui/button";
import { SmoothScrollButton } from "@/components/SmoothScrollButton";
import { Phone, Download, Award, Leaf, CreditCard } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-33.jpg')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 text-balance leading-tight font-amatic pt-24 md:pt-0">
            Wir geben Kindern <span className="text-stadtkueken-orange">Seelenproviant</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-balance">
            achtsam, natürlich & mitten in Hamburg.
          </p>
          
          {/* USP Bulletlines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left max-w-3xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-lg font-semibold mb-1">8 Standorte</div>
              <div className="text-sm opacity-90">{'>'} 600 glückliche Küken</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-lg font-semibold mb-1 flex items-center">
                <Leaf className="h-5 w-5 mr-2" />
                Natur-Kita
              </div>
              <div className="text-sm opacity-90">mit eigenem Gemüseacker</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-lg font-semibold mb-1">Kita-Gutschein</div>
              <div className="text-sm opacity-90">Elternanteil ab 0 €</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <SmoothScrollButton 
              targetId="lead-magnet"
              className="bg-stadtkueken-orange hover:bg-stadtkueken-orange-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover-lift h-11"
            >
              <Download className="mr-2 h-5 w-5" />
              Kostenloses Infopaket sichern
            </SmoothScrollButton>
            <Button 
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-white text-stadtkueken-brown hover:bg-white hover:text-stadtkueken-brown px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 bg-white"
            >
              <a 
                href="tel:04032890120" 
                className="flex items-center"
                aria-label="Ruf uns an"
                aria-describedby="Ruf uns an"
                aria-expanded={false}
                aria-pressed={false}
                aria-controls="contact"
                aria-live="polite"
                aria-busy={false}
                aria-disabled={false}
              >
                <Phone className="mr-2 h-5 w-5" />
                Jetzt anrufen
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Award className="h-4 w-4" />
              <span>SunPass Kita</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Leaf className="h-4 w-4" />
              <span>DGE-Ernährung</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <CreditCard className="h-4 w-4" />
              <span>Ackerracker-Partner</span>
            </div>
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
