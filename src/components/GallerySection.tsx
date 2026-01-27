const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=600&auto=format&fit=crop",
    alt: "Consultório moderno",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400&auto=format&fit=crop",
    alt: "Atendimento odontológico",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=400&auto=format&fit=crop",
    alt: "Equipamentos de ponta",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop",
    alt: "Procedimento dental",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=400&auto=format&fit=crop",
    alt: "Ambiente acolhedor",
    span: "",
  },
];

const GallerySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
            Nossa Clínica
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Ambiente pensado para o seu{" "}
            <span className="text-gradient-gold">conforto</span>
          </h2>
          <p className="body-md text-muted-foreground">
            Conheça nossa estrutura moderna e acolhedora, projetada para proporcionar 
            a melhor experiência em cada atendimento.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group ${image.span} aspect-square`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-primary-foreground text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
