

import clinicaImage2 from "@/assets/implnate/clinicageral/WhatsApp Image 2026-01-26 at 16.41.04.jpeg";
import clinicaImage3 from "@/assets/implnate/clinicageral/WhatsApp Image 2026-01-26 at 16.41.05 (1).jpeg";

const qualityItems = [
    {
        image: clinicaImage2,
        title: "Restauração Dental",
        category: "Estética",
        description: "Recuperação da função e beleza"
    },
    {
        image: clinicaImage3,
        title: "Harmonização",
        category: "Estética",
        description: "Equilíbrio facial e dental"
    }
];

const QualitySection = () => {
    return (
        <section className="section-padding bg-secondary/30">
            <div className="container-premium">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
                        Padrão de Qualidade
                    </span>
                    <h2 className="heading-lg text-foreground mb-6">
                        Excelência em cada <span className="text-gradient-gold">Detalhe</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {qualityItems.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden w-full max-w-sm"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 right-3">
                                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full uppercase tracking-wide shadow-sm">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QualitySection;
