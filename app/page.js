import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesIntro from "@/components/ServicesIntro";
import ChristmasFeature from "@/components/ChristmasFeature";
import PermanentLightingFeature from "@/components/PermanentLightingFeature";
import CommercialCallout from "@/components/CommercialCallout";
import SolarSection from "@/components/SolarSection";
import ExteriorCleaning from "@/components/ExteriorCleaning";
import WhyUs from "@/components/WhyUs";
import GalleryPreview from "@/components/GalleryPreview";
import ReviewsPlaceholder from "@/components/ReviewsPlaceholder";
import ServiceArea from "@/components/ServiceArea";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesIntro />
      <ChristmasFeature />
      <PermanentLightingFeature />
      <CommercialCallout />
      <SolarSection />
      <ExteriorCleaning />
      <WhyUs />
      <GalleryPreview />
      <ReviewsPlaceholder />
      <ServiceArea />
      <FinalCTA />
    </>
  );
}
