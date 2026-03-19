import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesGridSection from "@/components/ServicesGridSection";
import StatsSection from "@/components/StatsSection";
import ImpactSection from "@/components/ImpactSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import RegionSection from "@/components/RegionSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <ServicesGridSection />
      <StatsSection />
      <ImpactSection />
      <BenefitsSection />
      <ServicesSection />
      <HowItWorksSection />
      <BeforeAfterSection />
      <DifferentialsSection />
      <RegionSection />
      <FAQSection />
      <FinalCTASection />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
