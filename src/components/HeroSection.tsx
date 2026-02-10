import heroCover from "@/assets/videos02/sidlene.png";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5522981471247?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

  return (
    <section className="relative section-padding bg-background">
      {/* Dental Pattern Background */}
      <div
        className="absolute inset-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: "url('/dental_pattern.png')",
          backgroundSize: "300px",
          backgroundRepeat: "repeat"
        }}
      />

      <div className="container-premium mt-24 md:mt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 relative z-10 animate-fade-up">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

            <h1 className="heading-xl mb-6 text-primary drop-shadow-sm">
              Transforme seu sorriso com <span className="text-gradient-gold">excelência</span>.
            </h1>

            <p className="body-lg mb-8 max-w-xl mx-auto lg:mx-0 text-foreground/80">
              Com os Implantes dentários, você recupera: Saúde, Autoestima e alegria de sorrir.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern flex items-center justify-center gap-2 group"
              >
                <i className="bi-whatsapp text-xl group-hover:scale-110 transition-transform"></i>
                Fale com um especialista
              </a>
            </div>
          </div>

          {/* Hero Video */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0 flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white max-w-[280px] md:max-w-[380px] w-full">
              <img
                src={heroCover}
                alt="Golden Tooth - Odontologia de Excelência"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Simple decoration */}
            <div className="absolute -z-10 top-0 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 bottom-0 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
