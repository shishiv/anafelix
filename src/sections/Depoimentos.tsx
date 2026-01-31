import { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const depoimentos = [
  {
    name: 'Ana Paula',
    role: 'Empresária',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    text: 'A desprogramação neurobiológica mudou minha vida completamente. Depois de anos presa em relacionamentos tóxicos e crenças limitantes sobre merecimento, finalmente me liberei. Hoje tenho um negócio próspero e um relacionamento saudável. Sou eternamente grata!',
    rating: 5,
  },
  {
    name: 'Carlos Eduardo',
    role: 'Médico',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    text: 'Como médico, sempre fui cético com terapias alternativas. Mas a abordagem da Ana, baseada em neurociência, me conquistou. A limpeza energética me ajudou a superar um bloqueio profissional que me impedia de avançar na carreira. Resultados extraordinários!',
    rating: 5,
  },
  {
    name: 'Mariana Silva',
    role: 'Professora',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    text: 'O Reiki coletivo gratuito todas as sextas-feiras é um presente divino. Sinto minha energia completamente renovada após cada sessão. A Ana tem um dom especial para transmitir paz e cura. Recomendo a todos que buscam equilíbrio espiritual.',
    rating: 5,
  },
];

const Depoimentos = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-ana-primary opacity-5 text-[12rem] font-serif">
          ❝
        </div>
        <div className="absolute bottom-10 right-10 text-ana-accent opacity-5 text-[12rem] font-serif">
          ❞
        </div>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="reveal opacity-0 inline-block font-montserrat text-sm text-ana-accent font-medium tracking-wider uppercase mb-4">
            Histórias de Transformação
          </span>
          <h2 className="reveal opacity-0 font-cormorant text-4xl sm:text-5xl lg:text-6xl font-semibold text-ana-primary mb-6 animation-delay-200">
            O Que Dizem
            <br />
            <span className="gradient-text">Meus Clientes</span>
          </h2>
          <p className="reveal opacity-0 font-montserrat text-lg text-ana-dark/70 animation-delay-400">
            Cada história é uma prova do poder transformador da limpeza energética 
            e da desprogramação neurobiológica.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="reveal opacity-0 max-w-4xl mx-auto animation-delay-600">
          <div className="relative">
            {/* Main Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-ana-secondary/30">
                <Quote size={80} strokeWidth={1} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(depoimentos[activeIndex].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className="text-ana-primary fill-ana-primary" 
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="font-cormorant text-xl lg:text-2xl text-ana-dark leading-relaxed mb-8 italic">
                  "{depoimentos[activeIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={depoimentos[activeIndex].image}
                    alt={depoimentos[activeIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-ana-secondary"
                  />
                  <div>
                    <p className="font-cormorant text-xl font-semibold text-ana-primary">
                      {depoimentos[activeIndex].name}
                    </p>
                    <p className="font-montserrat text-sm text-ana-dark/60">
                      {depoimentos[activeIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-ana-primary hover:bg-ana-primary hover:text-white transition-all duration-300"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {depoimentos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-ana-primary w-8'
                        : 'bg-ana-secondary hover:bg-ana-primary/50'
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-ana-primary hover:bg-ana-primary hover:text-white transition-all duration-300"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal opacity-0 grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 animation-delay-800">
          {[
            { value: '98%', label: 'Satisfação' },
            { value: '500+', label: 'Clientes Atendidos' },
            { value: '4.9', label: 'Avaliação Média' },
            { value: '15', label: 'Dias de Transformação' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/50 rounded-2xl"
            >
              <p className="font-cormorant text-4xl lg:text-5xl font-bold text-ana-primary mb-2">
                {stat.value}
              </p>
              <p className="font-montserrat text-sm text-ana-dark/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
