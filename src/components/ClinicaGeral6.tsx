import clinicaImage6 from "@/assets/implnate/clinicageral/imagem01.jpeg";

const ClinicaGeral6 = () => {
    return (
        <div className="group bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="relative aspect-[3/4] overflow-hidden">
                <img
                    src={clinicaImage6}
                    alt="Clínica Geral 6"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium text-lg">Saiba mais</span>
                </div>
            </div>

        </div>
    );
};

export default ClinicaGeral6;
