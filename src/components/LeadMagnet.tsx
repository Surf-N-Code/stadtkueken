"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [downloaded, setDownloaded] = useState(false);
  const { toast } = useToast();

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    console.log("Lead magnet download for:", email);
    setDownloaded(true);
    toast({
      title: "Download gestartet!",
      description: "Die Kita-Start-Checkliste wird heruntergeladen.",
    });
    
    // Reset after 5 seconds
    setTimeout(() => {
      setDownloaded(false);
      setEmail("");
    }, 5000);
  };

  return (
    <section id="lead-magnet" className="py-20 bg-stadtkueken-orange">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Download className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Kostenloses Infopaket
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              "Kita-Start-Checkliste – 10 Tipps für Eltern"
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
            <div className="text-stadtkueken-brown mb-6">
              <h3 className="text-2xl font-bold mb-2">
                Jetzt kostenlos sichern!
              </h3>
              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-stadtkueken-green flex-shrink-0" />
                  <span>10 praktische Tipps für den Kita-Start</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-stadtkueken-green flex-shrink-0" />
                  <span>Eingewöhnungs-Checkliste</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-stadtkueken-green flex-shrink-0" />
                  <span>Was gehört in die Kita-Tasche?</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-stadtkueken-green flex-shrink-0" />
                  <span>Tipps für entspannte Abschiede</span>
                </li>
              </ul>
            </div>

            {!downloaded ? (
              <form onSubmit={handleDownload} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="leadEmail" className="text-stadtkueken-brown text-left block">
                    E-Mail-Adresse
                  </Label>
                  <Input
                    id="leadEmail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ihre.email@beispiel.de"
                    required
                    className="border-stadtkueken-beige focus:border-stadtkueken-orange"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-stadtkueken-orange hover:bg-stadtkueken-orange-dark text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Jetzt kostenlos herunterladen
                </Button>
              </form>
            ) : (
              <div className="text-center">
                <CheckCircle className="h-16 w-16 text-stadtkueken-green mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-stadtkueken-brown mb-2">
                  Vielen Dank!
                </h3>
                <p className="text-stadtkueken-brown">
                  Ihr Download wird gestartet...
                </p>
              </div>
            )}

            <p className="text-xs text-gray-500 mt-4">
              Ihre Daten sind bei uns sicher. Kein Spam, versprochen!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
