import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";

// Implantes Images
import implantImage1 from "@/assets/implnate/WhatsApp Image 2026-01-26 at 16.44.25 (1).jpeg";
import implantImage2 from "@/assets/implnate/WhatsApp Image 2026-01-26 at 16.44.25 (2).jpeg";
import implantImage3 from "@/assets/implnate/WhatsApp Image 2026-01-26 at 16.44.25 (3).jpeg";
import implantImage4 from "@/assets/implnate/WhatsApp Image 2026-01-26 at 16.44.26.jpeg";
import implantImage5 from "@/assets/implnate/WhatsApp Image 2026-01-26 at 16.44.58.jpeg";

// Clínica Geral Images
import clinicaImage1 from "@/assets/implnate/clinicageral/WhatsApp Image 2026-01-26 at 16.40.53.jpeg";
import clinicaImage2 from "@/assets/implnate/clinicageral/WhatsApp Image 2026-01-26 at 16.41.04.jpeg";
import clinicaImage3 from "@/assets/implnate/clinicageral/WhatsApp Image 2026-01-26 at 16.41.05 (1).jpeg";
import clinicaImage4 from "@/assets/implnate/clinicageral/WhatsApp Image 2026-01-26 at 16.41.05.jpeg";
import clinicaImage5 from "@/assets/implnate/clinicageral/WhatsApp Image 2026-01-26 at 16.41.06 (1).jpeg";

// Harmonização Facial Videos
import harmoniaVideo1 from "@/assets/armonização facial/WhatsApp Video 2026-01-26 at 16.42.49.mp4";
import harmoniaVideo2 from "@/assets/armonização facial/WhatsApp Video 2026-01-26 at 16.42.55.mp4";
import harmoniaVideo3 from "@/assets/armonização facial/WhatsApp Video 2026-01-26 at 16.42.58.mp4";
import harmoniaVideo4 from "@/assets/armonização facial/WhatsApp Video 2026-01-26 at 16.43.01.mp4";

const services = [
  {
    title: "Clínica Geral",
    description: "Tratamentos preventivos e restauradores para manter sua saúde bucal em dia.",
    images: [
      clinicaImage1, clinicaImage2, clinicaImage3, clinicaImage4, clinicaImage5
    ],
  },
  {
    title: "Implantes Dentários",
    description: "Recupere seu sorriso com implantes de alta qualidade e resultados duradouros.",
    images: [
      implantImage1, implantImage2, implantImage3, implantImage4, implantImage5
    ],
  },
  {
    title: "Harmonização Facial",
    description: "Realce sua beleza natural com procedimentos estéticos personalizados.",
    videos: [
      harmoniaVideo1, harmoniaVideo2, harmoniaVideo3, harmoniaVideo4
    ],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (emblaApi && (service.images || service.videos)) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [emblaApi, service.images, service.videos]);

  const handleImageClick = (e: React.MouseEvent, imageIndex: number) => {
    e.preventDefault();
    e.stopPropagation();
    if (service.images) {
      setLightboxIndex(imageIndex);
      setLightboxOpen(true);
    }
  };

  const handleNext = () => {
    if (service.images) {
      setLightboxIndex((prev) => (prev + 1) % service.images.length);
    }
  };

  const handlePrev = () => {
    if (service.images) {
      setLightboxIndex((prev) => (prev - 1 + service.images.length) % service.images.length);
    }
  };

  const whatsappLink = "https://wa.me/5522981471247?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços.";

  return (
    <>
      <div
        className="group card-premium overflow-hidden flex flex-col h-full"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="relative w-full h-64 md:h-80 bg-gray-100 flex items-center justify-center overflow-hidden">
          {service.images || service.videos ? (
            <div className="overflow-hidden w-full h-full" ref={emblaRef}>
              <div className="flex h-full">
                {service.images
                  ? service.images.map((img, i) => (
                    <div
                      key={i}
                      className="flex-[0_0_100%] min-w-0 h-full flex items-center justify-center bg-gray-50 overflow-hidden relative"
                    >
                      <img
                        src={img}
                        alt={`${service.title} ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Floating Zoom Button */}
                      <button
                        onClick={(e) => handleImageClick(e, i)}
                        className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                        aria-label="Ampliar imagem"
                      >
                        <i className="bi-arrows-fullscreen text-xl text-primary"></i>
                      </button>
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none" />
                    </div>
                  ))
                  : service.videos?.map((video, i) => (
                    <div key={i} className="flex-[0_0_100%] min-w-0 h-full flex items-center justify-center bg-black overflow-hidden relative">
                      <video
                        src={video}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        autoPlay
                        muted
                        loop
                        playsInline
                        id={`video-${index}-${i}`}
                      />
                      {/* Floating Fullscreen Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const videoElement = document.getElementById(`video-${index}-${i}`) as HTMLVideoElement;
                          if (videoElement) {
                            if (videoElement.requestFullscreen) {
                              videoElement.requestFullscreen();
                            }
                          }
                        }}
                        className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                        aria-label="Tela cheia"
                      >
                        <i className="bi-arrows-fullscreen text-xl text-primary"></i>
                      </button>
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none" />
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            // This else branch is for services without images or videos, which is not currently in the `services` array.
            // If a service had a single `image` property instead of `images` or `videos`, this would render.
            <div className="w-full h-full overflow-hidden">
              {/* Assuming a fallback image or placeholder if neither images nor videos are present */}
              <img
                src={""} // Placeholder for service.image, as it's not defined in the current service structure
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          )}
        </div>

        <div className="p-6 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {service.description}
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
          >
            Saiba mais
            <i className="bi-arrow-right"></i>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && service.images && (
        <ImageLightbox
          images={service.images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
          title={service.title}
        />
      )}
    </>
  );
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary/20">
      <div className="container-premium">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-2">
            Nossos Serviços
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Tratamentos especializados para o seu{" "}
            <span className="text-gradient-gold">sorriso perfeito</span>
          </h2>
          <p className="body-md text-muted-foreground">
            Oferecemos uma gama completa de procedimentos odontológicos e estéticos,
            sempre com foco em resultados naturais e duradouros.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
