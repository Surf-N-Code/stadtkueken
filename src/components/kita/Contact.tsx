"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Phone, Mail, Calendar } from "lucide-react";

export interface KitaContactProps {
  name: string;
  location: string;
  address: string;
  postalCode: string;
  city: string;
  openingHours: string;
  groups: string;
  phoneNumber: string;
  email: string;
  contactPerson: string;
  contactPersonTitle?: string;
  contactId?: string;
}

export const KitaContact = ({
  name,
  location,
  address,
  postalCode,
  city,
  openingHours,
  groups,
  phoneNumber,
  email,
  contactPerson,
  contactPersonTitle = "Kita-Leitung",
  contactId = "contact"
}: KitaContactProps) => {
  return (
    <section id={contactId} className="py-20 bg-stadtkueken-green-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stadtkueken-brown mb-4 font-amatic">
            Buche deine Kita-Besichtigung ganz einfach online!
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Du möchtest unsere Kita {name} in {location} kennenlernen und dir selbst ein Bild von unserem pädagogischen Konzept machen? Kein Problem! Buche dir jetzt ganz bequem einen Besichtigungstermin über unser Online-Tool. Wähle einfach den passenden Termin aus – ganz flexibel und ohne lange Wartezeiten.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-stadtkueken-brown mb-6 font-amatic">
                Kontakt & Informationen
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-stadtkueken-orange rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stadtkueken-brown mb-1">Adresse</h4>
                    <p className="text-gray-700">
                      Stadtküken Kita {name}<br />
                      {address}<br />
                      {postalCode} {city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-stadtkueken-orange rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stadtkueken-brown mb-1">Öffnungszeiten</h4>
                    <p className="text-gray-700">
                      {openingHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-stadtkueken-orange rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stadtkueken-brown mb-1">Gruppen</h4>
                    <p className="text-gray-700">
                      {groups}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-stadtkueken-orange rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stadtkueken-brown mb-1">Telefon</h4>
                    <a href={`tel:${phoneNumber}`} className="text-stadtkueken-orange hover:underline">
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <a href={`mailto:${email}`} className="flex items-start space-x-4 hover:bg-stadtkueken-beige rounded-lg p-2 -m-2 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-stadtkueken-orange rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stadtkueken-brown mb-1">E-Mail</h4>
                    <span className="text-stadtkueken-orange hover:underline">
                      {email}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-stadtkueken-brown mb-6 font-amatic">
              Besichtigung Kita {name}
            </h3>
            <div className="text-center">
              <div className="bg-stadtkueken-beige rounded-2xl p-6 mb-6">
                <Calendar className="h-16 w-16 text-stadtkueken-orange mx-auto mb-4" />
                <p className="text-stadtkueken-brown font-semibold mb-2">
                  45 min • {address}, {postalCode} {city}
                </p>
                <p className="text-gray-700 mb-4">
                  Liebe Eltern, ich freue mich darauf, euch die Räumlichkeiten der Kita {name} zeigen zu dürfen. Wählt euch gerne einen passenden Termin aus.
                </p>
                <p className="text-stadtkueken-brown font-semibold">
                  Liebe Grüße<br />
                  {contactPerson}
                  {contactPersonTitle && <><br />{contactPersonTitle}</>}
                </p>
              </div>
              
              <Button 
                size="lg"
                className="bg-stadtkueken-orange hover:bg-stadtkueken-orange-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover-lift w-full"
                asChild
              >
                <a 
                  href="https://calendly.com/stadtkueken" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                  aria-label="Buche einen Termin über Calendly"
                  aria-describedby="Buche einen Termin über Calendly"
                  aria-expanded={false}
                  aria-pressed={false}
                  aria-controls="contact"
                  aria-live="polite"
                  aria-busy={false}
                  aria-disabled={false}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Online Termin buchen
                </a>
              </Button>
              
              <p className="text-sm text-gray-600 mt-4">
                Flexible Terminwahl • Ganz ohne Wartezeiten
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 