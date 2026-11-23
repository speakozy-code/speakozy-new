import { Navbar } from "@/components/HeroSection";
import OfferBar from "@/components/OfferBar";
import PricingSection from "@/components/PricingSection";
import { FinalCTA } from "@/components/FAQSection";

const Pricing = () => (
  <div className="min-h-screen">
    <OfferBar />
    <Navbar />
    <div className="pt-4 md:pt-8">
      <PricingSection />
    </div>
    <FinalCTA
      to="/register"
      ctaLabel="حدد مستواك مجانًا وابدأ ←"
      subtitle="اختار الباقة المناسبة، واحنا هنحدد مستواك مجانًا قبل ما تبدأ."
    />
  </div>
);

export default Pricing;
