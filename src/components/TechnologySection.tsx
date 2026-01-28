const TechnologySection = () => {
    const technologies = [
        {
            icon: "bi-cpu",
            title: "Scanner Intraoral 3D",
            description: "Tecnologia de ponta para moldagens digitais precisas e confortáveis, eliminando a necessidade de moldeiras tradicionais."
        },
        {
            icon: "bi-camera-fill",
            title: "Radiografia Digital",
            description: "Imagens de alta qualidade com menor exposição à radiação, permitindo diagnósticos mais precisos e seguros."
        },
        {
            icon: "bi-clipboard2-data",
            title: "Planejamento Digital",
            description: "Software avançado para simular resultados e planejar tratamentos com máxima previsibilidade e precisão."
        },
        {
            icon: "bi-gem",
            title: "Materiais Premium",
            description: "Utilizamos apenas materiais certificados e de primeira linha, garantindo durabilidade e biocompatibilidade."
        },
        {
            icon: "bi-tools",
            title: "Implantes de Última Geração",
            description: "Sistemas de implantes importados com tecnologia de osseointegração avançada para resultados superiores."
        },
        {
            icon: "bi-shield-check",
            title: "Protocolos de Biossegurança",
            description: "Equipamentos esterilizados e ambiente clínico seguindo as mais rigorosas normas de higiene e segurança."
        }
    ];

    return (
        <section id="tecnologia" className="section-padding bg-background">
            <div className="container-premium">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
                        Tecnologia de Ponta
                    </span>
                    <h2 className="heading-lg text-foreground mb-6">
                        Equipamentos Modernos para <span className="text-gradient-gold">Resultados Excepcionais</span>
                    </h2>
                    <p className="body-md text-muted-foreground">
                        Investimos continuamente em tecnologia para oferecer tratamentos mais rápidos, confortáveis e eficazes
                    </p>
                </div>

                {/* Technologies Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {technologies.map((tech, index) => (
                        <div
                            key={tech.title}
                            className="group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative h-full p-6 md:p-8 bg-gradient-to-br from-white to-secondary/30 rounded-2xl border border-border/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-2 transition-all duration-500">
                                {/* Icon */}
                                <div className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                    <i className={`${tech.icon} text-3xl text-primary`}></i>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {tech.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                    {tech.description}
                                </p>

                                {/* Decorative Element */}
                                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-tl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl border border-primary/10 text-center">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                        <i className="bi-award text-4xl text-primary"></i>
                        <div className="text-center md:text-left">
                            <h4 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-1">
                                Certificações e Qualidade Garantida
                            </h4>
                            <p className="text-sm md:text-base text-muted-foreground">
                                Todos os equipamentos e materiais possuem certificação ANVISA e seguem normas internacionais de qualidade
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;
