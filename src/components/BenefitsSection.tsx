const benefits = [
  {
    icon: "bi-heart-pulse",
    title: "Atendimento Personalizado",
    description: "Cada paciente recebe um plano de tratamento exclusivo e adaptado às suas necessidades",
  },
  {
    icon: "bi-cpu-fill",
    title: "Tecnologia Moderna",
    description: "Equipamentos de última geração para diagnósticos precisos e tratamentos eficazes",
  },
  {
    icon: "bi-award-fill",
    title: "Profissional Qualificada",
    description: "Formação sólida com atualização constante nas melhores técnicas",
  },
  {
    icon: "bi-check2-circle",
    title: "Resultados Naturais",
    description: "Estética harmoniosa que respeita sua individualidade e características",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-premium">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full p-6 md:p-8 bg-white rounded-2xl border border-border/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 text-center">
                {/* Icon Circle */}
                <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className={`${benefit.icon} text-3xl text-primary`}></i>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
