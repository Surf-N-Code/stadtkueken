import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadMagnet } from "@/components/LeadMagnet";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { StickyMobile } from "@/components/StickyMobile";
import { ValuesGrid } from "@/components/ValuesGrid";
import { WhyStadtkueken } from "@/components/WhyStadtkueken";

export const metadata: Metadata = {
  title: "Stadtküken Natur-Kita | Achtsame Kinderbetreuung in Hamburg",
  description: "Stadtküken - Naturnahe Kinderbetreuung in Hamburg mit 8 Standorten. Achtsamkeit, gesunde Ernährung & Partizipation für über 600 glückliche Küken. Jetzt Kitaplatz anfragen!",
  keywords: "Stadtküken, Natur-Kita Hamburg, Kinderbetreuung Hamburg, Achtsamkeit Kinder, Naturpädagogik, Kita Gutschein Hamburg, Kitaplatz Hamburg",
  openGraph: {
    type: "website",
    url: "https://stadtkueken.de",
    title: "Stadtküken Natur-Kita | Achtsame Kinderbetreuung in Hamburg",
    description: "Naturnahe Kinderbetreuung in Hamburg mit 8 Standorten. Achtsamkeit, gesunde Ernährung & Partizipation für über 600 glückliche Küken.",
    images: [
      {
        url: "https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-33.jpg",
        width: 1200,
        height: 630,
        alt: "Stadtküken Natur-Kita Hamburg",
      },
    ],
    locale: "de_DE",
    siteName: "Stadtküken Natur-Kita",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stadtküken Natur-Kita | Achtsame Kinderbetreuung in Hamburg",
    description: "Naturnahe Kinderbetreuung in Hamburg mit 8 Standorten. Achtsamkeit, gesunde Ernährung & Partizipation für über 600 glückliche Küken.",
    images: ["https://stadtkueken.de/wp-content/uploads/Stadtkueken-kita-hamburg-image-33.jpg"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-stadtkueken-cream">
      <Header />
      <Hero />
      <ValuesGrid />
      <WhyStadtkueken />
      <Gallery />
      <ProcessTimeline />
      <ContactForm />
      <FAQ />
      <LeadMagnet />
      <Footer />
      <StickyMobile />
    </div>
  );
}
