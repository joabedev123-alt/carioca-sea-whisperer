import { MessageCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/5522981471247?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contato via WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 text-white" />

      {/* Pulse Animation */}
      <span className="absolute w-full h-full rounded-full bg-[hsl(142,70%,45%)] animate-ping opacity-30" />

      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-4 py-2 bg-card text-foreground text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale com um especialista
      </span>
    </a>
  );
};

export default WhatsAppButton;
