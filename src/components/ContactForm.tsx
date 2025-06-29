"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const standorte = [
  "Wandsbek - Kita Mühle",
  "Wandsbek - Kita Mühlenhof", 
  "Wandsbek - Kita Putte",
  "Blankenese - Villa Blumenfeld",
  "Lokstedt - Lohbekpark",
  "Lemsahl - Treudelberg",
  "Neugraben - Baumpieper",
  "Groß Borstel - Johann's Garten"
];

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    birthDate: "",
    startDate: "",
    phone: "",
    email: "",
    standort: "",
    kitaGutscheinBeratung: false,
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
    // Reset form
    setFormData({
      parentName: "",
      childName: "",
      birthDate: "",
      startDate: "",
      phone: "",
      email: "",
      standort: "",
      kitaGutscheinBeratung: false,
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-stadtkueken-green-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stadtkueken-brown mb-4 font-amatic">
            Kitaplatz anfragen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nehmen Sie unverbindlich Kontakt mit uns auf
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="parentName">Vor- & Nachname (Eltern) *</Label>
                  <Input
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                    className="border-stadtkueken-beige focus:border-stadtkueken-orange"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="childName">Name des Kindes *</Label>
                  <Input
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleInputChange}
                    required
                    className="border-stadtkueken-beige focus:border-stadtkueken-orange"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="birthDate">Geburtsdatum des Kindes *</Label>
                  <Input
                    id="birthDate"
                    name="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    required
                    className="border-stadtkueken-beige focus:border-stadtkueken-orange"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startDate">Gewünschter Betreuungsstart</Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="border-stadtkueken-beige focus:border-stadtkueken-orange"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefonnummer *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="border-stadtkueken-beige focus:border-stadtkueken-orange"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail-Adresse *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-stadtkueken-beige focus:border-stadtkueken-orange"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="standort">Wunsch-Standort</Label>
                <Select value={formData.standort} onValueChange={(value) => setFormData(prev => ({...prev, standort: value}))}>
                  <SelectTrigger className="border-stadtkueken-beige focus:border-stadtkueken-orange">
                    <SelectValue placeholder="Wählen Sie einen Standort" />
                  </SelectTrigger>
                  <SelectContent>
                    {standorte.map((standort) => (
                      <SelectItem key={standort} value={standort}>
                        {standort}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Nachricht (optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="border-stadtkueken-beige focus:border-stadtkueken-orange"
                  placeholder="Haben Sie spezielle Fragen oder Wünsche?"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="kitaGutscheinBeratung"
                  checked={formData.kitaGutscheinBeratung}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, kitaGutscheinBeratung: checked as boolean }))
                  }
                />
                <Label htmlFor="kitaGutscheinBeratung">Kita-Gutschein Beratung gewünscht</Label>
              </div>

              <div className="bg-stadtkueken-beige rounded-lg p-4 text-sm text-stadtkueken-brown">
                <strong>Hinweis:</strong> Wir erheben einen Qualitätsbeitrag von 25–45 € (einrichtungsabhängig).
              </div>

              <Button 
                type="submit" 
                className="w-full bg-stadtkueken-orange hover:bg-stadtkueken-orange-dark text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Kitaplatz unverbindlich anfragen
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-stadtkueken-brown mb-6 font-amatic">
                Direkt Kontakt aufnehmen
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="tel:04032890120"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-stadtkueken-beige hover:bg-stadtkueken-orange hover:text-white transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-stadtkueken-orange group-hover:bg-white rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white group-hover:text-stadtkueken-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">040 / 3289 012-0</div>
                    <div className="text-sm opacity-75">Rückruf innerhalb 24 h</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-stadtkueken-beige">
                  <div className="w-12 h-12 bg-stadtkueken-green rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">info@stadtkueken.de</div>
                    <div className="text-sm text-gray-600">E-Mail schreiben</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-stadtkueken-beige">
                  <div className="w-12 h-12 bg-stadtkueken-brown rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">8 Standorte in Hamburg</div>
                    <div className="text-sm text-gray-600">Wandsbek, Blankenese, Lokstedt u.v.m.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stadtkueken-orange rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-amatic">
                Öffnungszeiten
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Montag - Freitag:</span>
                  <span>07:00 - 17:00 Uhr</span>
                </div>
                <div className="flex justify-between opacity-75">
                  <span>Wochenende:</span>
                  <span>Geschlossen</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm opacity-90">
                  Flexible Module: 5/6/8/10/12 h | Während der Hamburger Schulferien bieten wir eine Sommerbetreuung an.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
