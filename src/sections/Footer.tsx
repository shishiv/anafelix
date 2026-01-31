import { Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-ana-dark text-white overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />

      {/* Main Footer Content */}
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-cormorant text-3xl font-semibold text-white">Ana</span>
              <span className="font-cormorant text-4xl font-bold text-white block -mt-1">Felix</span>
            </div>
            <p className="font-montserrat text-sm text-white/60 leading-relaxed mb-6">
              Terapeuta Holística especializada em limpeza energética e 
              desprogramação neurobiológica. Transformando vidas através 
              da harmonização do corpo, mente e espírito.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/anafelix_oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ana-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ana-primary transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="mailto:contato@anafelix.com.br"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ana-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold text-white mb-6">
              Serviços
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Desprogramação Neurobiológica', href: '#servicos' },
                { label: 'Limpeza Energética Profunda', href: '#servicos' },
                { label: 'Reiki Coletivo Gratuito', href: '#servicos' },
                { label: 'Radiestesia & Radiônica', href: '#servicos' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    className="font-montserrat text-sm text-white/60 hover:text-ana-secondary transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold text-white mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '#hero' },
                { label: 'Benefícios', href: '#beneficios' },
                { label: 'Como Funciona', href: '#como-funciona' },
                { label: 'Depoimentos', href: '#depoimentos' },
                { label: 'Contato', href: '#contato' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    className="font-montserrat text-sm text-white/60 hover:text-ana-secondary transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold text-white mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-ana-secondary mt-0.5 flex-shrink-0" />
                <span className="font-montserrat text-sm text-white/60">
                  Fronteira, MG - Brasil
                  <br />
                  Atendimento Online
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-ana-secondary flex-shrink-0" />
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-sm text-white/60 hover:text-ana-secondary transition-colors"
                >
                  (00) 00000-0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-ana-secondary flex-shrink-0" />
                <a
                  href="mailto:contato@anafelix.com.br"
                  className="font-montserrat text-sm text-white/60 hover:text-ana-secondary transition-colors"
                >
                  contato@anafelix.com.br
                </a>
              </li>
            </ul>

            {/* Reiki Schedule */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <p className="font-cormorant text-lg text-ana-secondary mb-1">
                Reiki Coletivo Gratuito
              </p>
              <p className="font-montserrat text-sm text-white/60">
                Toda sexta-feira às 20h
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-montserrat text-xs text-white/40 text-center sm:text-left">
              © {currentYear} Ana Felix - Terapeuta Holística. Todos os direitos reservados.
            </p>
            <p className="font-montserrat text-xs text-white/40">
              Desenvolvido por TriânguloTEC
            </p>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
