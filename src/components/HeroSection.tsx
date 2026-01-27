import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5522981471247?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container-premium relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                className="btn-gold px-8 py-4 rounded-full text-lg font-medium flex items-center justify-center gap-3 group"
              >
                Agendar Avaliação
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
          <div className="relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop"
                alt="Consultório odontológico moderno e elegante"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-card p-5 rounded-2xl shadow-xl animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">+1.500</p>
                  <p className="text-sm text-muted-foreground">Sorrisos transformados</p>
                </div>
              </div>
            </div>

            {/* Decorative Frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent/30 rounded-3xl -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-accent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
