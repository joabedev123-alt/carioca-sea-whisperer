import { Heart, Cpu, Award, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Atendimento Personalizado",
    description: "Cada paciente recebe um plano de tratamento exclusivo",
  },
  {
    icon: Cpu,
    title: "Tecnologia Moderna",
    description: "Equipamentos de última geração para diagnósticos precisos",
  },
  {
    icon: Award,
    title: "Profissional Qualificada",
    description: "Formação sólida e atualização constante",
  },
  {
    icon: Leaf,
    title: "Resultados Naturais",
    description: "Estética harmoniosa respeitando sua individualidade",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-premium">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 md:p-8 bg-card rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
