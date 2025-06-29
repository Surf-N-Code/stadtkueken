import { SmoothScrollButton } from "@/components/SmoothScrollButton";
import { Phone, MessageSquare } from "lucide-react";

export const StickyMobile = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-stadtkueken-beige shadow-lg md:hidden">
      <div className="flex">
        <a 
          href="tel:04032890120"
          className="flex-1 flex items-center justify-center space-x-2 py-4 bg-stadtkueken-orange text-white font-semibold transition-colors hover:bg-stadtkueken-orange-dark"
        >
          <Phone className="h-5 w-5" />
          <span>Anrufen</span>
        </a>
        <SmoothScrollButton 
          targetId="contact"
          className="flex-1 flex items-center justify-center space-x-2 py-4 bg-stadtkueken-brown text-white font-semibold transition-colors hover:bg-stadtkueken-brown/90"
        >
          <MessageSquare className="h-5 w-5" />
          <span>Anfragen</span>
        </SmoothScrollButton>
      </div>
    </div>
  );
};
