const StatsSection = () => {
    const stats = [
        {
            icon: "bi-people-fill",
            number: "+1.500",
            label: "Pacientes Atendidos",
            description: "Sorrisos transformados com carinho"
        },
        {
            icon: "bi-award-fill",
            number: "+10",
            label: "Anos de Experiência",
            description: "Dedicação à odontologia de excelência"
        },
        {
            icon: "bi-emoji-smile-fill",
            number: "98%",
            label: "Satisfação",
            description: "Índice de aprovação dos pacientes"
        },
        {
            icon: "bi-heart-pulse-fill",
            number: "+3.000",
            label: "Procedimentos",
            description: "Realizados com precisão e cuidado"
        }
    ];

    return (
        <section className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background">
            <div className="container-premium">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
                        Resultados que Falam
                    </span>
                    <h2 className="heading-lg text-foreground mb-4">
                        Números que <span className="text-gradient-gold">Inspiram Confiança</span>
                    </h2>
                    <p className="body-md text-muted-foreground">
                        Nossa dedicação refletida em cada sorriso transformado
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="group relative"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Card */}
                            <div className="relative p-6 md:p-8 bg-white rounded-2xl border border-border/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 text-center">
                                {/* Icon */}
                                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <i className={`${stat.icon} text-2xl md:text-3xl text-primary`}></i>
                                </div>

                                {/* Number */}
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-2">
                                    {stat.number}
                                </h3>

                                {/* Label */}
                                <p className="text-sm md:text-base font-semibold text-foreground mb-1">
                                    {stat.label}
                                </p>

                                {/* Description */}
                                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                                    {stat.description}
                                </p>

                                {/* Decorative element */}
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Background Glow */}
                            <div className="absolute -inset-2 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
