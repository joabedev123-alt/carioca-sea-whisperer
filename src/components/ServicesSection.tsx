import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Clínica Geral",
    description: "Tratamentos preventivos e restauradores para manter sua saúde bucal em dia.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Implantes Dentários",
    description: "Recupere seu sorriso com implantes de alta qualidade e resultados duradouros.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Harmonização Facial",
    description: "Realce sua beleza natural com procedimentos estéticos personalizados.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Limpeza Profissional",
    description: "Remoção de tártaro e polimento para dentes mais limpos e saudáveis.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Clareamento Dental",
    description: "Dentes mais brancos e brilhantes com técnicas seguras e eficazes.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600&auto=format&fit=crop",
  },
];

const ServicesSection = () => {
  const whatsappLink = "https://wa.me/5522981471247?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços.";

  return (
    <section id="servicos" className="section-padding bg-secondary/20">
      <div className="container-premium">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
            Nossos Serviços
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Tratamentos especializados para o seu{" "}
            <span className="text-gradient-gold">sorriso perfeito</span>
          </h2>
          <p className="body-md text-muted-foreground">
            Oferecemos uma gama completa de procedimentos odontológicos e estéticos, 
            sempre com foco em resultados naturais e duradouros.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              key={service.title}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-premium overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
