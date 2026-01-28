import heroImage from "@/assets/hero01/WhatsApp Image 2026-01-26 at 16.38.35.jpeg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5522981471247?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-white to-secondary/20">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-premium relative z-10 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white border border-primary/20 rounded-full text-foreground mb-8 shadow-sm animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <i className="bi-geo-alt-fill text-primary text-sm"></i>
              <span className="text-sm font-medium">Atendimento em RJ e BH</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-semibold text-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Seu sorriso perfeito começa{" "}
              <span className="text-gradient-gold">aqui</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Odontologia moderna e humanizada com foco em estética, saúde bucal e bem-estar
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-[#25D366] text-white rounded-full text-base font-medium flex items-center justify-center gap-3 hover:bg-[#128C7E] hover:shadow-lg transition-all duration-300"
              >
                <i className="bi-whatsapp text-xl group-hover:scale-110 transition-transform"></i>
                Agendar Consulta
              </a>
              <a
                href="#servicos"
                className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-full text-base font-medium hover:bg-primary hover:text-white transition-all duration-300 text-center"
              >
                Nossos Serviços
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                  <i className="bi-shield-check text-primary"></i>
                </div>
                <span className="text-sm font-medium">CRO-RJ 52953</span>
              </div>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10">
                  <i className="bi-award text-accent"></i>
                </div>
                <span className="text-sm font-medium">+10 anos de experiência</span>
              </div>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                  <i className="bi-cpu text-primary"></i>
                </div>
                <span className="text-sm font-medium">Tecnologia de ponta</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up flex justify-center lg:justify-end" style={{ animationDelay: '0.3s' }}>
            <div className="relative max-w-sm md:max-w-md lg:max-w-lg w-full">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Dra. Sidilene Gonçalves - Cirurgiã-Dentista"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent pointer-events-none" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-border/50 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-sm">
                    <i className="bi-emoji-smile text-2xl text-white"></i>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground text-lg">+1.500</p>
                    <p className="text-xs text-muted-foreground font-medium">Sorrisos Transformados</p>
                  </div>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
