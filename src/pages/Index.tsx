import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologySection from "@/components/TechnologySection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HealthTipsSection from "@/components/HealthTipsSection";
import CTASection from "@/components/CTASection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero - gradient white to light */}
        <div className="bg-gradient-to-br from-background via-white to-secondary/30">
          <HeroSection />
        </div>

        {/* Stats - medium teal */}
        <div className="bg-section-teal-medium">
          <StatsSection />
        </div>

        {/* Benefits - gray gradient */}
        <div className="bg-section-gray">
          <BenefitsSection />
        </div>

        {/* About - white */}
        <div className="bg-white">
          <AboutSection />
        </div>

        {/* Process - strong pattern */}
        <div className="bg-section-pattern">
          <ProcessSection />
        </div>

        {/* Services - light */}
        <div className="bg-section-light">
          <ServicesSection />
        </div>

        {/* Technology - white */}
        <div className="bg-white">
          <TechnologySection />
        </div>

        {/* Before/After - medium teal */}
        <div className="bg-section-teal-medium">
          <BeforeAfterSection />
        </div>

        {/* Testimonials - gray */}
        <div className="bg-section-gray">
          <TestimonialsSection />
        </div>

        {/* Health Tips - white */}
        <div className="bg-white">
          <HealthTipsSection />
        </div>

        {/* CTA - strong teal/gold gradient */}
        <div className="bg-gradient-to-br from-primary/15 via-accent/10 to-primary/15">
          <CTASection />
        </div>

        {/* Location - light */}
        <div className="bg-section-light">
          <LocationSection />
        </div>

        {/* FAQ - white */}
        <div className="bg-white">
          <FAQSection />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
