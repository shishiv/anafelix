import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

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
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Om Symbol Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-serif text-ana-primary opacity-3 select-none">
          ॐ
        </div>
        
        {/* Floating Lotus */}
        <div className="absolute top-20 right-[10%] animate-float-slow opacity-15">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <ellipse cx="40" cy="55" rx="20" ry="30" fill="#8B7355"/>
            <ellipse cx="25" cy="50" rx="15" ry="25" fill="#A0826D"/>
            <ellipse cx="55" cy="50" rx="15" ry="25" fill="#A0826D"/>
          </svg>
        </div>
        
        {/* Floating Leaves */}
        <div className="absolute bottom-32 left-[8%] animate-float opacity-10">
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
            <path d="M30 5 Q32 25 30 45 Q28 25 30 5" stroke="#8B7355" strokeWidth="2" fill="none"/>
            <path d="M30 45 Q32 65 30 80 Q28 65 30 45" stroke="#8B7355" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute top-1/3 left-[15%] w-32 h-32 border border-ana-primary/10 rounded-full animate-pulse-gentle" />
        <div className="absolute bottom-1/4 right-[20%] w-24 h-24 border border-ana-accent/10 rounded-full animate-pulse-gentle animation-delay-400" />
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 opacity-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60V120H0V60Z" fill="#8B7355"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="reveal opacity-0 inline-flex items-center gap-2 bg-ana-secondary/30 px-4 py-2 rounded-full mb-8">
            <Sparkles size={16} className="text-ana-primary" />
            <span className="font-montserrat text-sm text-ana-primary font-medium">
              Terapeuta Holística Especializada em Limpeza Energética
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="reveal opacity-0 font-cormorant text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-ana-primary leading-tight mb-6 animation-delay-200">
            Liberte-se das
            <br />
            <span className="gradient-text">Crenças que Bloqueiam</span>
            <br />
            Sua Vida
          </h1>

          {/* Subtitle */}
          <p className="reveal opacity-0 font-montserrat text-lg sm:text-xl text-ana-dark/70 max-w-2xl mx-auto mb-8 animation-delay-400 leading-relaxed">
            Descubra o poder da <strong className="text-ana-primary">Desprogramação Neurobiológica</strong> para 
            eliminar bloqueios emocionais, harmonizar suas energias e reconectar-se com seu propósito verdadeiro.
          </p>

          {/* Quote */}
          <div className="reveal opacity-0 mb-10 animation-delay-600">
            <p className="font-cormorant text-2xl sm:text-3xl italic text-ana-accent">
              "Esvaziar para preencher"
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="reveal opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 animation-delay-800">
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

          {/* Trust Indicators */}
          <div className="reveal opacity-0 mt-16 flex flex-wrap items-center justify-center gap-8 animation-delay-800">
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
