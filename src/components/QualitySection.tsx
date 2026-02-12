

import QualityRestauracaoCard from "./QualityRestauracaoCard";
import QualityImplantesCard from "./QualityImplantesCard";

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
                    <QualityRestauracaoCard />
                    <QualityImplantesCard />
                </div>
            </div>
        </section>
    );
};


export default QualitySection;
