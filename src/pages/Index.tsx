import { Navbar, HeroSection } from "@/components/HeroSection";
import OfferBar from "@/components/OfferBar";
import AboutSection from "@/components/AboutSection";
import StorySection from "@/components/StorySection";
import { PainPointsSection, AudienceSection } from "@/components/PainPointsSection";
import SolutionSection from "@/components/SolutionSection";
import SixMonthsSection from "@/components/SixMonthsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { JourneySection, WhyDifferentSection, ComparisonSection } from "@/components/JourneySection";
import { FAQSection, FinalCTA } from "@/components/FAQSection";

const Index = () => (
  <div className="min-h-screen">
    <OfferBar />
    <Navbar />
    <HeroSection />

    {/* 1. القسم بتاع الارقام */}
    <AboutSection />

    {/* 2. قسم هل انت ده؟ */}
    <PainPointsSection />

    {/* 3. قسم الحلول */}
    <SolutionSection />

    {/* 4. اعرف اكتر عن سبيكوزي */}
    <StorySection />

    {/* 5. ليه تختار سبيكوزي */}
    <WhyDifferentSection />

    {/* 6. الكورس ده لمين */}
    <AudienceSection />

    {/* 7. المقارنه */}
    <ComparisonSection />

    {/* 8. الفيدباك */}
    <TestimonialsSection />

    {/* 9. تخيل نفسك بعد 6 شهور */}
    <SixMonthsSection />

    {/* 10. رحلتك معانا */}
    <JourneySection />

    <FAQSection />
    <FinalCTA to="/pricing" ctaLabel="شوف الباقات وابدأ ←" />
  </div>
);

export default Index;
