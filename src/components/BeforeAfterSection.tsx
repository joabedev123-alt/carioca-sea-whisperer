import { useState } from "react";
// Importar imagens reais dos tratamentos


const BeforeAfterSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const transformations = [
        {
            image: "/fotos0202/WhatsApp Image 2026-01-26 at 17.13.00.jpeg",
            category: "implantes",
            title: "Implante Dentário",
            description: "Recuperação completa com implantes de alta qualidade"
        },
        {
            image: "/fotos0202/WhatsApp Image 2026-01-26 at 17.13.01 (1).jpeg",
            category: "implantes",
            title: "Reabilitação Oral",
            description: "Restauração funcional e estética"
        },
        {
            image: "/fotos0202/WhatsApp Image 2026-01-26 at 17.13.01.jpeg",
            category: "implantes",
            title: "Prótese sobre Implante",
            description: "Resultado natural e duradouro"
        },
        {
            image: "/fotos0303/01.jpeg",
            category: "implantes",
            title: "Implante Dentário",
            description: "Transformação completa do sorriso"
        },
        {
            image: "/fotos0303/02.jpeg",
            category: "implantes",
            title: "Reabilitação Oral",
            description: "Recuperação funcional e estética"
        },
        {
            image: "/fotos0303/03.jpeg",
            category: "implantes",
            title: "Implante Unitário",
            description: "Resultado natural e imperceptível"
        },
        {
            image: "/fotos0303/04.jpeg",
            category: "implantes",
            title: "Prótese Fixa",
            description: "Sorriso renovado com segurança"
        },
        {
            image: "/fotos0303/05.jpeg",
            category: "implantes",
            title: "Protocolo Cerâmico",
            description: "Estética e função restabelecidas"
        },
        {
            image: "/fotos0303/06.jpeg",
            category: "implantes",
            title: "Carga Imediata",
            description: "Sorriso novo em pouco tempo"
        },



    ];

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

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {transformations.map((transformation, index) => (
                        <div
                            key={index}
                            className="animate-fade-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="group relative h-auto bg-white rounded-2xl border border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                                {/* Image */}
                                <div className="relative overflow-hidden bg-white">
                                    <img
                                        src={transformation.image}
                                        alt={transformation.title}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 max-h-[300px] md:max-h-[400px]"
                                    />
                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-2xl transition-all duration-500 pointer-events-none" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterSection;