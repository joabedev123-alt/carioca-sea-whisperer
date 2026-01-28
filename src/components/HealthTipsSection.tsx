const HealthTipsSection = () => {
    const tips = [
        {
            icon: "bi-clock-history",
            title: "Escove 2x por Dia",
            description: "Escove os dentes por pelo menos 2 minutos, duas vezes ao dia, de preferência após o café da manhã e antes de dormir.",
            color: "from-primary/10 to-primary/5"
        },
        {
            icon: "bi-arrow-repeat",
            title: "Use Fio Dental",
            description: "O fio dental remove resíduos que a escova não alcança. Use diariamente, de preferência antes de dormir.",
            color: "from-accent/10 to-accent/5"
        },
        {
            icon: "bi-cup-straw",
            title: "Evite Açúcar em Excesso",
            description: "O açúcar alimenta bactérias que causam cáries. Reduza o consumo e faça bochechos com água após doces.",
            color: "from-primary/10 to-accent/5"
        },
        {
            icon: "bi-calendar2-check",
            title: "Consultas Regulares",
            description: "Visite seu dentista a cada 6 meses para check-ups preventivos e limpezas profissionais.",
            color: "from-accent/10 to-primary/5"
        }
    ];

    return (
        <section id="dicas" className="section-padding bg-gradient-to-b from-secondary/20 via-background to-secondary/20">
            <div className="container-premium">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
                        Cuidados Diários
                    </span>
                    <h2 className="heading-lg text-foreground mb-6">
                        Dicas para um <span className="text-gradient-gold">Sorriso Saudável</span>
                    </h2>
                    <p className="body-md text-muted-foreground">
                        Pequenos hábitos que fazem grande diferença na saúde bucal
                    </p>
                </div>

                {/* Tips Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tips.map((tip, index) => (
                        <div
                            key={tip.title}
                            className="group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative h-full p-6 bg-white rounded-2xl border border-border/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                                {/* Icon */}
                                <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${tip.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <i className={`${tip.icon} text-3xl text-primary`}></i>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                                    {tip.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {tip.description}
                                </p>

                                {/* Decorative Element */}
                                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional CTA */}
                <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-primary/10 via-white to-accent/10 rounded-2xl border border-primary/20 text-center">
                    <i className="bi-lightbulb text-4xl text-primary mb-4 inline-block"></i>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-2">
                        Precisa de Orientações Personalizadas?
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4">
                        Nossa equipe está pronta para ajudar você a criar uma rotina de cuidados ideal
                    </p>
                    <a
                        href="https://wa.me/5522981471247?text=Olá!%20Gostaria%20de%20orientações%20sobre%20cuidados%20bucais."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 hover:shadow-[var(--shadow-teal)] hover:-translate-y-1 transition-all duration-300"
                    >
                        <i className="bi-chat-dots"></i>
                        Tirar Dúvidas pelo WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HealthTipsSection;
