import { MapPin, Award, Stethoscope } from "lucide-react";
import professionalImage from "@/assets/sobre01/WhatsApp Image 2026-01-26 at 16.38.33 (1).jpeg";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative max-w-xs md:max-w-sm w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={professionalImage}
                  alt="Dra. Sidilene Gonçalves - Cirurgiã-Dentista"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>

              {/* Floating Credential Card */}
              <div className="absolute bottom-0 right-0 md:-bottom-4 md:-right-4 bg-card p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl z-20 max-w-[12rem] md:max-w-none">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center">
                    <Award className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-xs md:text-sm">CRO-RJ 52953</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground">Registro Profissional</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-full blur-xl -z-10" />
              <div className="absolute top-1/2 -right-6 w-12 h-12 bg-primary/20 rounded-full blur-lg -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Sobre a Profissional
            </span>

            <h2 className="heading-lg text-foreground mb-6">
              Dra. Sidilene Gonçalves
            </h2>

            <div className="space-y-6 text-muted-foreground body-md">
              <p>
                Cirurgiã-dentista apaixonada pela arte de transformar sorrisos, a Dra. Sidilene
                combina técnica refinada com um olhar atento às necessidades individuais de cada paciente.
              </p>
              <p>
                Especializada em oferecer tratamentos odontológicos modernos, seguros e personalizados,
                seu foco está na estética, saúde bucal e bem-estar, sempre buscando resultados naturais
                e harmoniosos.
              </p>
              <p>
                Com atendimento humanizado e uso de tecnologia de ponta, cada consulta é uma
                experiência de cuidado e excelência.
              </p>
            </div>

            {/* Info Cards */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Atendimentos</p>
                  <p className="text-muted-foreground text-sm">Rio de Janeiro e Belo Horizonte</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Especialidades</p>
                  <p className="text-muted-foreground text-sm">Estética, Implantes, Harmonização</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
