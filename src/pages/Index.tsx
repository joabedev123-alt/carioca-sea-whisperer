import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-background">
          <HeroSection />
        </div>

        {/* Services - Moved up for immediate visibility as requested */}
        <div className="bg-white">
          <ServicesSection />
        </div>

        {/* About Section */}
        <div className="bg-background">
          <AboutSection />
        </div>

        {/* Before/After */}
        <div className="bg-white">
          <BeforeAfterSection />
        </div>

        {/* Testimonials */}
        <div className="bg-background">
          <TestimonialsSection />
        </div>

        {/* Location & Contact */}
        <div className="bg-white">
          <LocationSection />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
