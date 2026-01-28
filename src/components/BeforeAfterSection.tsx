import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
// Importar imagens reais dos tratamentos
import implantImage1 from "@/assets/implnate/WhatsApp Image 2026-01-26 at 16.44.25 (1).jpeg";
import implantImage2 from "@/assets/implnate/WhatsApp Image 2026-01-26 at 16.44.25 (2).jpeg";
import implantImage3 from "@/assets/implnate/WhatsApp Image 2026-01-26 at 16.44.25 (3).jpeg";
import clinicaImage1 from "@/assets/implnate/clinicageral/WhatsApp Image 2026-01-26 at 16.40.53.jpeg";
import clinicaImage2 from "@/assets/implnate/clinicageral/WhatsApp Image 2026-01-26 at 16.41.04.jpeg";
import clinicaImage3 from "@/assets/implnate/clinicageral/WhatsApp Image 2026-01-26 at 16.41.05 (1).jpeg";

const BeforeAfterSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

    const transformations = [
        {
            image: implantImage1,
            category: "implantes",
            title: "Implante Dentário",
            description: "Recuperação completa com implantes de alta qualidade"
        },
        {
            image: implantImage2,
            category: "implantes",
            title: "Reabilitação Oral",
            description: "Restauração funcional e estética"
        },
        {
            image: implantImage3,
            category: "implantes",
            title: "Prótese sobre Implante",
            description: "Resultado natural e duradouro"
        },
        {
            image: clinicaImage1,
            category: "estetica",
            title: "Tratamento Estético",
            description: "Sorriso harmônico e natural"
        },
        {
            image: clinicaImage2,
            category: "estetica",
            title: "Restauração Dental",
            description: "Recuperação da função e beleza"
        },
        {
            image: clinicaImage3,
            category: "estetica",
            title: "Harmonização",
            description: "Equilíbrio facial e dental"
        }
    ];

    const categories = [
        { id: "all", label: "Todos", icon: "bi-grid-3x3" },
        { id: "implantes", label: "Implantes", icon: "bi-gem" },
        { id: "estetica", label: "Estética", icon: "bi-stars" }
    ];

    const filteredTransformations = activeCategory === "all"
        ? transformations
        : transformations.filter(t => t.category === activeCategory);

    return (
        <section id="resultados" className="section-padding bg-background">
            <div className="container-premium">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
                        Resultados Reais
                    </span>
                    <h2 className="heading-lg text-foreground mb-6">
                        Transformações que <span className="text-gradient-gold">Mudam Vidas</span>
                    </h2>
                    <p className="body-md text-muted-foreground">
                        Veja alguns dos tratamentos realizados com dedicação e técnica refinada
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${activeCategory === category.id
                                    ? "bg-primary text-white shadow-[var(--shadow-teal)]"
                                    : "bg-white border border-border text-foreground hover:border-primary hover:text-primary"
                                }`}
                        >
                            <i className={`${category.icon} text-lg`}></i>
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-6">
                        {filteredTransformations.map((transformation, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="group relative h-full bg-white rounded-2xl border border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                                    {/* Image */}
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <img
                                            src={transformation.image}
                                            alt={transformation.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Badge */}
                                        <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground shadow-lg">
                                            <i className={`${categories.find(c => c.id === transformation.category)?.icon} mr-1`}></i>
                                            {categories.find(c => c.id === transformation.category)?.label}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {transformation.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {transformation.description}
                                        </p>
                                    </div>

                                    {/* Hover Effect Border */}
                                    <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-2xl transition-all duration-500 pointer-events-none" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-block p-8 bg-gradient-to-r from-primary/5 via-white to-accent/5 rounded-3xl border border-primary/10">
                        <i className="bi-award text-5xl text-primary mb-4 inline-block"></i>
                        <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-3">
                            Pronto para Transformar Seu Sorriso?
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-2xl">
                            Cada sorriso é único. Agende uma avaliação personalizada e descubra o melhor tratamento para você.
                        </p>
                        <a
                            href="https://wa.me/5522981471247?text=Olá!%20Vi%20os%20resultados%20e%20gostaria%20de%20agendar%20uma%20avaliação."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white rounded-full font-medium text-lg hover:shadow-[var(--shadow-teal)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <i className="bi-whatsapp text-xl"></i>
                            Agendar Avaliação Gratuita
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterSection;
