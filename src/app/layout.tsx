import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  /* -------- Basis -------- */
  title:
    "Stadtküken Natur-Kitas in Hamburg | Achtsamkeit · Naturpädagogik · Gesunde Ernährung",
  description:
    "Stadtküken Natur-Kitas: mehrere Standorte in ganz Hamburg. Naturnahe Betreuung (10 Monate – 6 Jahre), achtsame Pädagogik, eigener Kita-Acker & überwiegend Bio-Verpflegung. Kita-Gutschein willkommen – jetzt Kitaplatz finden!",
  keywords:
    "Stadtküken Natur-Kita, Natur-Kita Hamburg, Kita Hamburg, Kitaplatz Hamburg, Kita-Gutschein Hamburg, Achtsamkeit Kinder, Naturpädagogik, SunPass Kita, Kita Wandsbek, Kita Lokstedt, Kita Blankenese, Kita Groß Borstel, Kita Treudelberg, Kita Neugraben-Fischbek, Kinderbetreuung Hamburg",
  authors: [{ name: "Stadtküken Natur-Kita" }],
  robots: "index, follow",

  /* -------- Open Graph -------- */
  openGraph: {
    type: "website",
    url: "https://stadtkueken.de",
    title:
      "Stadtküken Natur-Kitas in Hamburg | Achtsamkeit & Natur für Kinder",
    description:
      "Mehrere Standorte in Hamburg – liebevolle, naturnahe Betreuung, Bio-Essen, partizipative Pädagogik & eigener Gemüseacker.",
    images: [
      {
        url: "https://stadtkueken.de/wp-content/uploads/Favicon-150x150.png",
        width: 600,
        height: 600,
        alt: "Kinder spielen draußen bei den Stadtküken Natur-Kitas in Hamburg",
      },
    ],
    locale: "de_DE",
    siteName: "Stadtküken Natur-Kitas",
  },

  /* -------- Twitter Cards -------- */
  twitter: {
    card: "summary_large_image",
    title:
      "Stadtküken Natur-Kitas in Hamburg | Achtsamkeit, Natur & Bio-Essen",
    description:
      "Entdecke unsere naturnahen Kitas an mehreren Standorten in Hamburg. Jetzt Platz anfragen!",
    images: [
      "https://stadtkueken.de/wp-content/uploads/2021/08/stadtkueken-header_gruppen-spielen.jpg",
    ],
  },

  /* -------- Weitere Metatags -------- */
  other: {
    "geo.region": "DE-HH",
    // zentrale Koordinate für Hamburg-Mitte
    "geo.position": "53.551086;9.993682",
    ICBM: "53.551086, 9.993682",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ChildCare",
              "name": "Stadtküken Kita Lohbekpark",
              "description": "Natur-Kita in Hamburg-Lokstedt mit achtsamer Betreuung für Kinder von 10 Monaten bis 6 Jahren",
              "url": "https://stadtkueken.de/kita-lohbekpark",
              "telephone": "+49-40-3289012-18",
              "email": "lohbekpark@stadtkueken.de",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lohkoppelweg 35b",
                "addressLocality": "Hamburg",
                "addressRegion": "Hamburg",
                "postalCode": "22529",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 53.598765,
                "longitude": 9.923456
              },
              "openingHours": "Mo-Fr 07:00-17:00",
              "priceRange": "Kita-Gutschein akzeptiert",
              "image": "https://stadtkueken.de/wp-content/uploads/240130_Lohbekpark_F.jpg"
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
