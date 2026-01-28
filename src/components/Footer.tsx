const Footer = () => {
  const whatsappLink = "https://wa.me/5522981471247?text=Olá!%20Gostaria%20de%20mais%20informações.";

  return (
    <footer id="contato" className="bg-gradient-to-b from-foreground to-foreground/95 pt-16 pb-8">
      <div className="container-premium">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/fiveicon01.png" alt="Logo" className="w-12 h-12" />
              <h3 className="font-heading text-2xl font-semibold text-white">
                Dra. Sidilene Gonçalves
              </h3>
            </div>
            <p className="text-white/70 mb-4 max-w-md leading-relaxed">
              Cirurgiã-Dentista dedicada a transformar sorrisos com excelência,
              tecnologia e cuidado humanizado.
            </p>
            <p className="text-white/90 text-sm font-medium flex items-center gap-2">
              <i className="bi-shield-check text-primary"></i>
              CRO-RJ 52953
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <i className="bi-instagram text-xl text-white"></i>
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <i className="bi-facebook text-xl text-white"></i>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-5">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
                >
                  <i className="bi-whatsapp text-lg group-hover:scale-110 transition-transform"></i>
                  (22) 98147-1247
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@drasidilene.com.br"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
                >
                  <i className="bi-envelope text-lg group-hover:scale-110 transition-transform"></i>
                  contato@drasidilene.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-5">
              Atendimentos
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/70">
                <i className="bi-geo-alt-fill text-lg mt-0.5 flex-shrink-0 text-primary"></i>
                <span>Rio de Janeiro, RJ</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <i className="bi-geo-alt-fill text-lg mt-0.5 flex-shrink-0 text-primary"></i>
                <span>Belo Horizonte, MG</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Dra. Sidilene Gonçalves. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-primary text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/50 hover:text-primary text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
