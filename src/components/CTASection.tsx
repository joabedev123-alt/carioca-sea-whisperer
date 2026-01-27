import { Phone, MessageCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const CTASection = () => {
  const whatsappLink = "https://wa.me/5522981471247?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

  return (
    <section className="section-padding bg-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-premium relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-lg text-primary-foreground mb-6">
            Cuide do seu sorriso com quem entende de{" "}
            <span className="text-accent">estética e saúde</span>
          </h2>
          <p className="body-lg text-primary-foreground/70 mb-10">
            Agende sua avaliação e descubra como podemos transformar
            seu sorriso com tratamentos modernos e personalizados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-10 py-5 rounded-full text-lg font-medium flex items-center justify-center gap-3 group hover:bg-[#25D366] transition-colors duration-300"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Fale com um especialista
            </a>
            <a
              href="tel:+5522981471247"
              className="px-10 py-5 rounded-full text-lg font-medium border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              (22) 98147-1247
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
