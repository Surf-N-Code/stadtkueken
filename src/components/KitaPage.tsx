import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KitaHero } from "@/components/Hero";
import { KitaInfo } from "@/components/KitaInfo";
import { KitaGallery } from "@/components/Gallery";
import { KitaTeam } from "@/components/Team";
import { KitaGoogleReviews } from "@/components/GoogleReviews";
import { KitaMap } from "@/components/Map";
import { KitaContact } from "@/components/Contact";
import { KitaLayout } from "@/components/KitaLayout";
import type { KitaData } from "@/data/kitas";

export interface KitaPageProps {
  kitaData: KitaData;
}

export const KitaPage = ({ kitaData }: KitaPageProps) => {
  return (
    <KitaLayout schemaData={kitaData.schemaData}>
      <div className="min-h-screen bg-stadtkueken-cream">
        <Header />
        <KitaHero {...kitaData.hero} />
        <KitaInfo {...kitaData.info} />
        <KitaGallery {...kitaData.gallery} name={kitaData.name} />
        <KitaTeam {...kitaData.team} />
        <KitaGoogleReviews {...kitaData.reviews} />
        <KitaMap {...kitaData.map} />
        <KitaContact {...kitaData.contact} />
        <Footer />
      </div>
    </KitaLayout>
  );
}; 