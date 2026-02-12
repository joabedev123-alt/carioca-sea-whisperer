import clinicaImage3 from "@/assets/implnate/clinicageral/WhatsApp Image 2026-01-26 at 16.41.05 (1).jpeg";

interface QualityImplantesImageProps {
    className?: string;
}

const QualityImplantesImage = ({ className }: QualityImplantesImageProps) => {
    return (
        <img
            src={clinicaImage3}
            alt="Implantes"
            className={className}
        />
    );
};

export default QualityImplantesImage;
