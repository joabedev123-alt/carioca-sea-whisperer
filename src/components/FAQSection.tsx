import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o agendamento?",
    answer: "O agendamento é simples e rápido! Basta enviar uma mensagem pelo WhatsApp para (22) 98147-1247 informando seu nome e o tipo de atendimento desejado. Nossa equipe retornará em breve para confirmar o melhor horário.",
  },
  {
    question: "A clínica atende convênios?",
    answer: "Trabalhamos principalmente com atendimento particular, o que nos permite oferecer um serviço mais personalizado e com mais tempo dedicado a cada paciente. Entre em contato para saber mais sobre condições especiais de pagamento.",
  },
  {
    question: "Onde ficam as clínicas?",
    answer: "A Dra. Sidilene atende em duas localidades: Rio de Janeiro e Belo Horizonte. Entre em contato pelo WhatsApp para saber os endereços exatos e horários de atendimento em cada cidade.",
  },
  {
    question: "Quais procedimentos são realizados?",
    answer: "Oferecemos uma gama completa de serviços: clínica geral, implantes dentários, harmonização facial, limpeza profissional, clareamento dental, restaurações estéticas e muito mais. Cada tratamento é personalizado conforme suas necessidades.",
  },
  {
    question: "Qual o tempo de recuperação dos procedimentos estéticos?",
    answer: "O tempo de recuperação varia conforme o procedimento. Tratamentos como clareamento não exigem recuperação, enquanto procedimentos como implantes podem necessitar alguns dias. A Dra. Sidilene orientará você em cada etapa.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-premium">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
            Perguntas Frequentes
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Tire suas{" "}
            <span className="text-gradient-gold">dúvidas</span>
          </h2>
          <p className="body-md text-muted-foreground">
            Reunimos as principais perguntas para facilitar seu entendimento 
            sobre nossos serviços e atendimento.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border-none shadow-[var(--shadow-soft)] data-[state=open]:shadow-[var(--shadow-card)] transition-shadow duration-300"
              >
                <AccordionTrigger className="py-5 text-left font-heading text-lg font-medium text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
