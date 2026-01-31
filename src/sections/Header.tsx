import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Serviços', href: '#servicos' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
            className="flex flex-col items-start"
          >
            <span className={`font-cormorant text-2xl sm:text-3xl font-semibold transition-colors duration-300 ${
              scrolled ? 'text-ana-primary' : 'text-ana-primary'
            }`}>
              Ana
            </span>
            <span className={`font-cormorant text-3xl sm:text-4xl font-bold -mt-2 transition-colors duration-300 ${
              scrolled ? 'text-ana-primary' : 'text-ana-primary'
            }`}>
              Felix
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`font-montserrat text-sm font-medium transition-colors duration-300 hover:text-ana-primary ${
                  scrolled ? 'text-ana-dark/80' : 'text-ana-dark/80'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contato'); }}
              className="btn-primary text-sm py-3 px-6"
            >
              Agende sua Sessão
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-ana-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white/98 backdrop-blur-md rounded-2xl shadow-soft p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="font-montserrat text-ana-dark/80 hover:text-ana-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contato'); }}
              className="btn-primary text-sm py-3 mt-2"
            >
              Agende sua Sessão
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
