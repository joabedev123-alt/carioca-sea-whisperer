import { useEffect } from "react";

interface ImageLightboxProps {
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    title?: string;
}

const ImageLightbox = ({ images, currentIndex, onClose, onNext, onPrev, title }: ImageLightboxProps) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") onNext();
            if (e.key === "ArrowLeft") onPrev();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [onClose, onNext, onPrev]);

    return (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm animate-fade-in">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Fechar"
            >
                <i className="bi-x text-3xl"></i>
            </button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={onPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                        aria-label="Anterior"
                    >
                        <i className="bi-chevron-left text-2xl"></i>
                    </button>
                    <button
                        onClick={onNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                        aria-label="Próximo"
                    >
                        <i className="bi-chevron-right text-2xl"></i>
                    </button>
                </>
            )}

            {/* Image Container */}
            <div
                className="w-full h-full flex items-center justify-center p-4 md:p-8"
                onClick={onClose}
            >
                <div
                    className="relative max-w-6xl max-h-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={images[currentIndex]}
                        alt={title || `Imagem ${currentIndex + 1}`}
                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                    />

                    {/* Image Counter */}
                    {images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            {currentIndex + 1} / {images.length}
                        </div>
                    )}

                    {/* Title */}
                    {title && (
                        <div className="absolute top-4 left-4 right-4 text-center">
                            <h3 className="text-white text-xl md:text-2xl font-heading font-semibold drop-shadow-lg">
                                {title}
                            </h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageLightbox;
