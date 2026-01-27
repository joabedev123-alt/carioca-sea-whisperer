import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Fernanda",
    role: "Paciente desde 2021",
    content: "A Dra. Sidilene transformou meu sorriso! Atendimento impecável, ambiente super acolhedor e resultado natural. Super recomendo!",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    role: "Paciente desde 2022",
    content: "Fiz meus implantes com ela e não poderia estar mais satisfeito. Profissional competente, atenciosa e muito humana.",
    rating: 5,
  },
  {
    name: "Ana Beatriz",
    role: "Paciente desde 2020",
    content: "A harmonização ficou perfeita! Resultado super natural. A Dra. Sidilene entendeu exatamente o que eu queria.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Paciente desde 2023",
    content: "Excelente profissional! Consultório moderno, equipe atenciosa e tratamento de primeira qualidade.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding bg-secondary/30">
      <div className="container-premium">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
            Depoimentos
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            O que nossos pacientes{" "}
            <span className="text-gradient-gold">dizem</span>
          </h2>
          <p className="body-md text-muted-foreground">
            A satisfação dos nossos pacientes é a nossa maior conquista. 
            Veja o que eles têm a dizer sobre a experiência.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-card rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-500 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-accent" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
