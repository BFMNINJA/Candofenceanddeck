import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ServiceAreaSection from "@/components/sections/ServiceAreaSection";
import QuoteSection from "@/components/sections/QuoteSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <WhyUsSection />
      <FeaturedProjectsSection />
      <ProcessSection />
      <ReviewsSection />
      <ServiceAreaSection />
      <QuoteSection />
    </>
  );
}
