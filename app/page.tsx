import AboutSection from "@/components/AboutSection";
import AffiliationsBar from "@/components/AffiliationsBar";
import CTABanner from "@/components/CTABanner";
import CredentialsBar from "@/components/CredentialsBar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CredentialsBar />
      <AboutSection />
      <ServicesSection />
      <AffiliationsBar />
      <CTABanner />
    </>
  );
}
