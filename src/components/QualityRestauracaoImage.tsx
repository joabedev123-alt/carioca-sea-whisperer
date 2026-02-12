import clinicaImage2 from "@/assets/implnate/clinicageral/WhatsApp Image 2026-01-26 at 16.41.04.jpeg";

interface QualityRestauracaoImageProps {
    className?: string;
}

const QualityRestauracaoImage = ({ className }: QualityRestauracaoImageProps) => {
    return (
        <img
            src={clinicaImage2}
            alt="Restauração Dental"
            className={className}
        />
    );
};

export default QualityRestauracaoImage;
