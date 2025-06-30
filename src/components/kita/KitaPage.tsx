import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KitaHero } from "@/components/kita/Hero";
import { KitaInfo } from "@/components/kita/KitaInfo";
import { KitaGallery } from "@/components/kita/Gallery";
import { KitaTeam } from "@/components/kita/Team";
import { KitaGoogleReviews } from "@/components/kita/GoogleReviews";
import { KitaMap } from "@/components/kita/Map";
import { KitaContact } from "@/components/kita/Contact";
import { KitaLayout } from "@/components/kita/KitaLayout";
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