const LocationSection = () => {
    const locations = [
        {
            city: "Rio de Janeiro",
            state: "RJ",
            icon: "bi-geo-alt-fill",
            address: "Consultas mediante agendamento",
            phone: "(22) 98147-1247",
            whatsapp: "5522981471247",
            color: "from-primary to-primary/80"
        },
        {
            city: "Belo Horizonte",
            state: "MG",
            icon: "bi-geo-alt-fill",
            address: "Consultas mediante agendamento",
            phone: "(22) 98147-1247",
            whatsapp: "5522981471247",
            color: "from-accent to-accent/80"
        }
    ];

    return (
        <section id="localizacao" className="section-padding bg-secondary/30">
            <div className="container-premium">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
                        Onde Estamos
                    </span>
                    <h2 className="heading-lg text-foreground mb-6">
                        Atendimento em <span className="text-gradient-gold">RJ e BH</span>
                    </h2>
                    <p className="body-md text-muted-foreground">
                        Agende sua consulta e transforme seu sorriso com a Dra. Sidilene Gonçalves
                    </p>
                </div>

                {/* Locations Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {locations.map((location, index) => (
                        <div
                            key={location.city}
                            className="group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative h-full p-8 bg-white rounded-3xl border border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                                {/* Header with Gradient */}
                                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${location.color}`} />

                                {/* Icon & City */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${location.color} flex items-center justify-center shadow-lg`}>
                                        <i className={`${location.icon} text-3xl text-white`}></i>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-heading font-bold text-foreground">
                                            {location.city}
                                        </h3>
                                        <p className="text-sm text-muted-foreground uppercase tracking-wider">
                                            {location.state}
                                        </p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

                                {/* Info */}
                                <div className="space-y-4">
                                    {/* Address */}
                                    <div className="flex items-start gap-3">
                                        <i className="bi-pin-map text-xl text-primary flex-shrink-0 mt-0.5"></i>
                                        <div>
                                            <p className="text-sm font-medium text-foreground mb-1">Endereço</p>
                                            <p className="text-sm text-muted-foreground">{location.address}</p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-3">
                                        <i className="bi-telephone text-xl text-primary flex-shrink-0 mt-0.5"></i>
                                        <div>
                                            <p className="text-sm font-medium text-foreground mb-1">Telefone</p>
                                            <a
                                                href={`tel:${location.phone.replace(/\D/g, '')}`}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {location.phone}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Hours */}
                                    <div className="flex items-start gap-3">
                                        <i className="bi-clock text-xl text-primary flex-shrink-0 mt-0.5"></i>
                                        <div>
                                            <p className="text-sm font-medium text-foreground mb-1">Horário</p>
                                            <p className="text-sm text-muted-foreground">Agendamento prévio</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="mt-6 pt-6 border-t border-border/50 flex gap-3">
                                    <a
                                        href={`https://wa.me/${location.whatsapp}?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20em%20${location.city}.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-3 bg-[#25D366] text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#128C7E] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        <i className="bi-whatsapp text-lg"></i>
                                        WhatsApp
                                    </a>
                                    <a
                                        href={`tel:${location.phone.replace(/\D/g, '')}`}
                                        className="flex-1 px-4 py-3 bg-primary text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-[var(--shadow-teal)] hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        <i className="bi-telephone text-lg"></i>
                                        Ligar
                                    </a>
                                </div>

                                {/* Background Decoration */}
                                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Professional Info */}
                <div className="mt-12 max-w-3xl mx-auto p-6 md:p-8 bg-gradient-to-r from-primary/5 via-white to-accent/5 rounded-2xl border border-primary/10 text-center">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                            <i className="bi-award text-3xl text-white"></i>
                        </div>
                        <div className="text-center md:text-left">
                            <h4 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-1">
                                Dra. Sidilene Gonçalves
                            </h4>
                            <p className="text-sm md:text-base text-muted-foreground">
                                Cirurgiã-Dentista • CRO-RJ 52953 • Atendimento Personalizado
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
