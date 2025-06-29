
import { Header } from "@/components/Header";
import { HeroLohbekpark } from "@/components/HeroLohbekpark";
import { KitaInfoLohbekpark } from "@/components/KitaInfoLohbekpark";
import { GalleryLohbekpark } from "@/components/GalleryLohbekpark";
import { TeamLohbekpark } from "@/components/TeamLohbekpark";
import { GoogleReviewsLohbekpark } from "@/components/GoogleReviewsLohbekpark";
import { MapLohbekpark } from "@/components/MapLohbekpark";
import { ContactLohbekpark } from "@/components/ContactLohbekpark";
import { Footer } from "@/components/Footer";

const KitaLohbekpark = () => {
  return (
    <div className="min-h-screen bg-stadtkueken-cream">
      <Header />
      <HeroLohbekpark />
      <KitaInfoLohbekpark />
      <GalleryLohbekpark />
      <TeamLohbekpark />
      <GoogleReviewsLohbekpark />
      <MapLohbekpark />
      <ContactLohbekpark />
      <Footer />
    </div>
  );
};

export default KitaLohbekpark;
