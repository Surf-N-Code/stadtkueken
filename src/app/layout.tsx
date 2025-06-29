import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kita Lohbekpark Hamburg-Lokstedt | Stadtküken Natur-Kita | Achtsamkeit & Natur",
  description: "Kita Lohbekpark in Hamburg-Lokstedt: Naturnahe Betreuung für 65 Kinder (10 Monate - 6 Jahre). Achtsamkeit, gesunde Ernährung & Partizipation. Jetzt Kitaplatz anfragen! ☎ 040/3289012-18",
  keywords: "Kita Lohbekpark, Kita Hamburg Lokstedt, Natur-Kita Hamburg, Stadtküken, Kitaplatz Hamburg, Achtsamkeit Kinder, Naturpädagogik, Kita Gutschein Hamburg, Kinderbetreuung Lokstedt, Lohkoppelweg",
  authors: [{ name: "Stadtküken Natur-Kita" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://stadtkueken.de/kita-lohbekpark",
    title: "Kita Lohbekpark Hamburg-Lokstedt | Stadtküken Natur-Kita",
    description: "Naturnahe Betreuung für 65 Kinder in Hamburg-Lokstedt. Achtsamkeit, gesunde Ernährung & Partizipation. Jetzt Kitaplatz anfragen!",
    images: [
      {
        url: "https://stadtkueken.de/wp-content/uploads/240130_Lohbekpark_F.jpg",
        width: 1200,
        height: 630,
        alt: "Kita Lohbekpark Hamburg-Lokstedt",
      },
    ],
    locale: "de_DE",
    siteName: "Stadtküken Natur-Kita",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kita Lohbekpark Hamburg-Lokstedt | Stadtküken Natur-Kita",
    description: "Naturnahe Betreuung für 65 Kinder in Hamburg-Lokstedt. Achtsamkeit, gesunde Ernährung & Partizipation.",
    images: ["https://stadtkueken.de/wp-content/uploads/240130_Lohbekpark_F.jpg"],
  },
  other: {
    "geo.region": "DE-HH",
    "geo.placename": "Hamburg-Lokstedt",
    "geo.position": "53.598765;9.923456",
    "ICBM": "53.598765, 9.923456",
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
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
