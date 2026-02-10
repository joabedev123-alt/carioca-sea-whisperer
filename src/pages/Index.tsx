import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import QualitySection from "@/components/QualitySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-background">
          <HeroSection />
        </div>

        {/* Services - 2nd Section */}
        <div className="bg-white">
          <ServicesSection />
        </div>


        {/* Before/After - 3rd Section */}
        <div className="bg-white">
          <BeforeAfterSection />
        </div>


        {/* Quality Section - Reintegrated */}
        <div className="bg-secondary/30">
          <QualitySection />
        </div>

        {/* About Section - 4th Section */}
        <div className="bg-background">
          <AboutSection />
        </div>

        {/* Location & Contact - 5th Section */}
        <div className="bg-white">
          <LocationSection />
        </div>

        {/* Testimonials - 6th Section */}
        <div className="bg-background">
          <TestimonialsSection />
        </div>


      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
