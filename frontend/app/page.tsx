import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ServiceAreaSection from "@/components/sections/ServiceAreaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <FeaturedProjectsSection />
      <ServiceAreaSection />
      <ReviewsSection />
    </>
  );
}
