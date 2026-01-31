import { useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="reveal opacity-0 font-cormorant text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-ana-primary leading-tight mb-6">
            Liberte-se das
            <br />
            <span className="gradient-text">Crenças que Bloqueiam</span>
            <br />
            Sua Vida
          </h1>

          <p className="reveal opacity-0 font-montserrat text-lg sm:text-xl text-ana-dark/70 max-w-2xl mx-auto mb-8 animation-delay-200 leading-relaxed">
            Descubra o poder da <strong className="text-ana-primary">Desprogramação Neurobiológica</strong> para 
            eliminar bloqueios emocionais, harmonizar suas energias e reconectar-se com seu propósito verdadeiro.
          </p>

          <div className="reveal opacity-0 mb-10 animation-delay-400">
            <p className="font-cormorant text-2xl sm:text-3xl italic text-ana-accent">
              "Esvaziar para preencher"
            </p>
          </div>

          <div className="reveal opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 animation-delay-600">
            <button 
              onClick={() => scrollToSection('#servicos')}
              className="btn-primary w-full sm:w-auto"
            >
              Conhecer Serviços
              <ArrowRight size={20} />
            </button>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              Falar com Ana
            </a>
          </div>

          <div className="reveal opacity-0 mt-16 flex flex-wrap items-center justify-center gap-8 animation-delay-600">
            <div className="text-center">
              <p className="font-cormorant text-4xl font-bold text-ana-primary">500+</p>
              <p className="font-montserrat text-sm text-ana-dark/60">Vidas Transformadas</p>
            </div>
            <div className="w-px h-12 bg-ana-secondary hidden sm:block" />
            <div className="text-center">
              <p className="font-cormorant text-4xl font-bold text-ana-primary">10+</p>
              <p className="font-montserrat text-sm text-ana-dark/60">Anos de Experiência</p>
            </div>
            <div className="w-px h-12 bg-ana-secondary hidden sm:block" />
            <div className="text-center">
              <p className="font-cormorant text-4xl font-bold text-ana-primary">100%</p>
              <p className="font-montserrat text-sm text-ana-dark/60">Reiki Gratuito</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
