import ClinicaGeral1 from "./ClinicaGeral1";
import ClinicaGeral2 from "./ClinicaGeral2";
import ClinicaGeral3 from "./ClinicaGeral3";
import ClinicaGeral4 from "./ClinicaGeral4";
import ClinicaGeral5 from "./ClinicaGeral5";
import ClinicaGeral6 from "./ClinicaGeral6";
import ImplanteCard1 from "./ImplanteCard1";
import ImplanteCard2 from "./ImplanteCard2";
import ImplanteCard3 from "./ImplanteCard3";
import ImplanteCard4 from "./ImplanteCard4";
import ImplanteCard5 from "./ImplanteCard5";
import ImplanteAntesDepoisCard from "./ImplanteAntesDepoisCard";

const ServicesSection = () => {
  const whatsappLink = "https://wa.me/5522981471247?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços.";

  return (
    <section id="servicos" className="section-padding bg-secondary/20">
      <div className="container-premium">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-2">
            Nossos Serviços
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Tratamentos especializados para o seu{" "}
            <span className="text-gradient-gold">sorriso perfeito</span>
          </h2>
          <p className="body-md text-muted-foreground">
            Oferecemos uma gama completa de procedimentos odontológicos e restauradores,
            sempre com foco em resultados naturais e duradouros.
          </p>
        </div>

        {/* Clínica Geral Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="heading-md text-3xl mb-3">Clínica Geral</h3>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              Tratamentos preventivos e restauradores para manter sua saúde bucal em dia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ClinicaGeral1 />
            <ClinicaGeral2 />
            <ClinicaGeral3 />
            <ClinicaGeral4 />
            <ClinicaGeral5 />
            <ClinicaGeral6 />
          </div>

          <div className="mt-8 text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Saiba mais
              <i className="bi-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Implantes Section */}
        <div>
          <div className="text-center mb-10">
            <h3 className="heading-md text-3xl mb-3">Implantes Dentários</h3>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              Recupere seu sorriso com implantes de alta qualidade e resultados duradouros.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ImplanteCard1 />
            <ImplanteCard2 />
            <ImplanteCard3 />
            <ImplanteCard4 />
            <ImplanteCard5 />
            <ImplanteAntesDepoisCard />
          </div>

          <div className="mt-8 text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Saiba mais
              <i className="bi-whatsapp"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
