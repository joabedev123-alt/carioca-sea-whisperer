import QualityImplantesImage from "./QualityImplantesImage";

const QualityImplantesCard = () => {
    return (
        <div className="group bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden w-full max-w-sm">
            <div className="relative h-48 overflow-hidden">
                <QualityImplantesImage
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full uppercase tracking-wide shadow-sm">
                        CIRURGIA
                    </span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Implantes
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    Reabilitação oral completa
                </p>
            </div>
        </div>
    );
};

export default QualityImplantesCard;
