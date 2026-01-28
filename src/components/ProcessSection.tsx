const ProcessSection = () => {
    const steps = [
        {
            icon: "bi-calendar-check",
            title: "Agendamento",
            description: "Entre em contato via WhatsApp ou telefone para agendar sua primeira consulta de forma rápida e prática.",
            number: "01"
        },
        {
            icon: "bi-clipboard2-pulse",
            title: "Avaliação Completa",
            description: "Realizamos uma avaliação minuciosa com tecnologia moderna para entender suas necessidades e objetivos.",
            number: "02"
        },
        {
            icon: "bi-lightbulb",
            title: "Plano Personalizado",
            description: "Criamos um plano de tratamento exclusivo, adaptado ao seu perfil e com total transparência de custos.",
            number: "03"
        },
        {
            icon: "bi-gear-fill",
            title: "Tratamento",
            description: "Executamos os procedimentos com precisão, conforto e utilizando materiais e equipamentos de última geração.",
            number: "04"
        },
        {
            icon: "bi-shield-check",
            title: "Acompanhamento",
            description: "Mantemos contato contínuo para garantir resultados duradouros e sua total satisfação com o sorriso.",
            number: "05"
        }
    ];

    return (
        <section id="processo" className="section-padding bg-secondary/30">
            <div className="container-premium">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
                        Como Funciona
                    </span>
                    <h2 className="heading-lg text-foreground mb-6">
                        Sua Jornada para um <span className="text-gradient-gold">Sorriso Perfeito</span>
                    </h2>
                    <p className="body-md text-muted-foreground">
                        Um processo transparente, humanizado e focado no seu bem-estar
                    </p>
                </div>

                {/* Process Timeline */}
                <div className="relative">
                    {/* Desktop: Vertical Line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary transform -translate-x-1/2" />

                    {/* Steps */}
                    <div className="space-y-12 lg:space-y-20">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {/* Content Card */}
                                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 transition-all duration-500 group">
                                        {/* Step Number - Mobile */}
                                        <div className="lg:hidden inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white font-heading font-bold text-xl mb-4 shadow-[var(--shadow-teal)]">
                                            {step.number}
                                        </div>

                                        <div className={`flex items-start gap-4 ${index % 2 === 0 ? "lg:flex-row-reverse lg:text-right" : ""}`}>
                                            {/* Icon */}
                                            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <i className={`${step.icon} text-2xl text-primary`}></i>
                                            </div>

                                            {/* Text */}
                                            <div className="flex-1">
                                                <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-2">
                                                    {step.title}
                                                </h3>
                                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Circle - Desktop Only */}
                                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 items-center justify-center text-white font-heading font-bold text-xl shadow-[var(--shadow-teal)] z-10 border-4 border-background">
                                    {step.number}
                                </div>

                                {/* Spacer for layout */}
                                <div className="hidden lg:block w-5/12" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a
                        href="https://wa.me/5522981471247?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white rounded-full font-medium text-lg hover:shadow-[var(--shadow-teal)] hover:-translate-y-1 transition-all duration-300"
                    >
                        <i className="bi-whatsapp text-xl"></i>
                        Agende sua Avaliação Gratuita
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
