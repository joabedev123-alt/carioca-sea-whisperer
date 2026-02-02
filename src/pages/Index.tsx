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

        {/* Services - 2nd Section */}
        <div className="bg-white">
          <ServicesSection />
        </div>

        {/* Before/After - 3rd Section */}
        <div className="bg-white">
          <BeforeAfterSection />
        </div>



        {/* Location & Contact - 5th Section */}
        <div className="bg-white">
          <LocationSection />
        </div>







        {/* About Section - Moved to last section */}
        <div className="bg-background">
          <AboutSection />
        </div>

        {/* Testimonials - Moved to last position */}
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
