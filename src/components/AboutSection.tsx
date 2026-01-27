import { MapPin, Award, Stethoscope } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
                alt="Dra. Sidilene Gonçalves - Cirurgiã-Dentista"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </div>

            {/* Floating Credential Card */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-card p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-lg">CRO-RJ 52953</p>
                  <p className="text-sm text-muted-foreground">Registro Profissional</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-primary/20 rounded-full blur-lg" />
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
