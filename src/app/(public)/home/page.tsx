import HomeHeader from "@/components/common/HomeHeader";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PopularServicesSection from "@/components/home/PopularServicesSection";
import WhyUseOurPlatformSection from "@/components/home/WhyUseOurPlatformSection";
import WhatCustomersSaySection from "@/components/home/WhatCustomersSaySection";
import BecomeAProfessionalBannerSection from "@/components/home/BecomeAProfessionalBannerSection";
import FAQSection from "@/components/home/FAQSection";
import InspirationSection from "@/components/home/InspirationSection";
import HomeFooter from "@/components/common/HomeFooter";

export default function HomePage() {
  return (
    <div>
      <HomeHeader />
      <HeroSection />
      <HowItWorksSection />
      <PopularServicesSection />
      <WhyUseOurPlatformSection />
      <WhatCustomersSaySection />
      <BecomeAProfessionalBannerSection />
      <FAQSection />
      <InspirationSection />
      <HomeFooter />
    </div>
  );
}
