
const ImplanteAntesDepoisCard = () => {
    return (
        <div className="group bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="relative h-64 overflow-hidden">
                <img
                    src="/antes e depois/imagem01.jpeg"
                    alt="Implantes Antes e Depois"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium text-lg">Saiba mais</span>
                </div>
            </div>

        </div>
    );
};

export default ImplanteAntesDepoisCard;
