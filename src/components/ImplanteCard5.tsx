import implantImage5 from "@/assets/implnate/WhatsApp Image 2026-01-26 at 16.44.58.jpeg";

const ImplanteCard5 = () => {
    return (
        <div className="group bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={implantImage5}
                    alt="Implantes Dentários 5"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium text-lg">Saiba mais</span>
                </div>
            </div>
            <div className="p-6 text-center">
                <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                    Implantes Dentários 5
                </h3>
            </div>
        </div>
    );
};

export default ImplanteCard5;
