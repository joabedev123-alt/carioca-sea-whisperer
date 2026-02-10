import { useState, useEffect } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 50);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#resultados", label: "Resultados" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#localizacao", label: "Localização" },
  ];

  const whatsappLink = "https://wa.me/5522981471247?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isAtTop
          ? "bg-transparent py-5"
          : "py-3 bg-white/95 backdrop-blur-md shadow-sm"
        }`}
    >
      <div className="container-premium flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src="/fiveicon01.png" alt="Dra. Sidilene Rodrigues Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <div className="flex flex-col">
            <span className="font-heading text-lg md:text-2xl font-semibold text-foreground leading-tight">
              Dra. Sidilene Rodrigues
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground font-body tracking-wider">
              Cirurgiã-Dentista • CRO-RJ 52953
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#25D366] text-white rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#128C7E] hover:shadow-lg transition-all duration-300"
          >
            <i className="bi-whatsapp text-base"></i>
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2  text-foreground hover:bg-primary/10 rounded-full transition-colors"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <i className="bi-x text-2xl"></i>
          ) : (
            <i className="bi-list text-2xl"></i>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-border shadow-lg transition-all duration-300 origin-top ${isMobileMenuOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"
          }`}
      >
        <nav className="container-premium py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="px-4 pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-3 bg-[#25D366] text-white rounded-full text-center font-medium flex items-center justify-center gap-2 mt-2 hover:bg-[#128C7E] transition-all duration-300"
            >
              <i className="bi-whatsapp text-base"></i>
              Agendar Consulta
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
