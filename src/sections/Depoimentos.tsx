import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

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


      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="reveal opacity-0 font-cormorant text-4xl sm:text-5xl lg:text-6xl font-semibold text-ana-primary mb-4">
            O Que Dizem
            <br />
            <span className="gradient-text">Meus Clientes</span>
          </h2>
          <p className="reveal opacity-0 font-montserrat text-lg text-ana-dark/70 animation-delay-200">
            Histórias reais de transformação e cura.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="reveal opacity-0 max-w-4xl mx-auto animation-delay-600">
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-soft">
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(depoimentos[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-ana-primary fill-ana-primary" />
                  ))}
                </div>

                <p className="font-cormorant text-xl text-ana-dark leading-relaxed mb-6 italic">
                  "{depoimentos[activeIndex].text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={depoimentos[activeIndex].image}
                    alt={depoimentos[activeIndex].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-cormorant text-lg font-semibold text-ana-primary">
                      {depoimentos[activeIndex].name}
                    </p>
                    <p className="font-montserrat text-xs text-ana-dark/60">
                      {depoimentos[activeIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-ana-primary hover:bg-ana-primary hover:text-white transition-all"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {depoimentos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex ? 'bg-ana-primary w-6' : 'bg-ana-secondary'
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-ana-primary hover:bg-ana-primary hover:text-white transition-all"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Depoimentos;
