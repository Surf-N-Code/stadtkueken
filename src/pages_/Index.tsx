
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValuesGrid } from "@/components/ValuesGrid";
import { WhyStadtkueken } from "@/components/WhyStadtkueken";
import { Gallery } from "@/components/Gallery";
import { TeamSection } from "@/components/TeamSection";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { LeadMagnet } from "@/components/LeadMagnet";
import { Footer } from "@/components/Footer";
import { StickyMobile } from "@/components/StickyMobile";

const Index = () => {
  return (
    <div className="min-h-screen bg-stadtkueken-cream">
      <Header />
      <Hero />
      <ValuesGrid />
      <WhyStadtkueken />
      <Gallery />
      <TeamSection />
      <ProcessTimeline />
      <ContactForm />
      <FAQ />
      <LeadMagnet />
      <Footer />
      <StickyMobile />
    </div>
  );
};

export default Index;
