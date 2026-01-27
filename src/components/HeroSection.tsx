import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero01/WhatsApp Image 2026-01-26 at 16.38.35.jpeg";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5522981471247?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container-premium relative z-10 pt-28 pb-12 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Atendimento Premium em RJ e BH</span>
            </div>

            <h1 className="heading-xl text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Odontologia moderna, estética e funcional para{" "}
              <span className="text-gradient-gold">transformar seu sorriso</span>
            </h1>

            <p className="body-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Atendimento humanizado em clínica geral, implantes e harmonização facial.
              Sua saúde bucal tratada com excelência e cuidado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-8 py-4 rounded-full text-lg font-medium flex items-center justify-center gap-3 group hover:!bg-none hover:!bg-[#25D366] transition-colors duration-300"
              >
                Fale com um especialista
                <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#servicos"
                className="px-8 py-4 rounded-full text-lg font-medium border-2 border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center"
              >
                Conhecer Serviços
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-10 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">CRO-RJ 52953</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm">+10 anos de experiência</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Tecnologia de ponta</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          {/* Hero Image */}
          <div className="relative animate-fade-up flex justify-center lg:justify-end" style={{ animationDelay: '0.3s' }}>
            <div className="relative max-w-[240px] sm:max-w-[280px] md:max-w-xs w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Consultório odontológico Dra. Sidilene Gonçalves"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-2xl animate-float z-20 backdrop-blur-xl bg-white/60 dark:bg-black/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shadow-inner">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm drop-shadow-sm">+1.500</p>
                    <p className="text-xs text-muted-foreground font-medium">Sorrisos transformados</p>
                  </div>
                </div>
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-accent/30 rounded-3xl -z-10 bg-accent/5 backdrop-blur-[2px]" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
