import { MapPin } from "lucide-react";

export interface KitaMapProps {
  name: string;
  location: string;
  address: string;
  postalCode: string;
  city: string;
  district: string;
  description: string;
  publicTransport: string;
  parking: string;
  mapEmbedUrl: string;
}

export const KitaMap = ({
  name,
  location,
  address,
  postalCode,
  city,
  district,
  description,
  publicTransport,
  parking,
  mapEmbedUrl
}: KitaMapProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stadtkueken-brown mb-4 font-amatic">
            Anfahrt zur Kita {name}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Address Info */}
          <div className="lg:col-span-1">
            <div className="bg-stadtkueken-beige rounded-2xl p-8 h-full">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-stadtkueken-orange rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stadtkueken-brown mb-2">
                    Stadtküken Kita {name}
                  </h3>
                  <p className="text-gray-700">
                    {address}<br />
                    {postalCode} {city}<br />
                    {district}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="font-amatic font-semibold text-xl text-stadtkueken-brown mb-2">Öffentliche Verkehrsmittel</p>
                  <p className="text-gray-600 text-sm">
                    {publicTransport}
                  </p>
                </div>
                
                <div>
                  <p className="font-amatic font-semibold text-xl text-stadtkueken-brown mb-2">Parkmöglichkeiten</p>
                  <p className="text-gray-600 text-sm">
                    {parking}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96 lg:h-full min-h-[400px]">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Kita ${name} Standort`}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 