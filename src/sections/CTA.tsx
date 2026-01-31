import { useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle, Instagram, Sparkles } from 'lucide-react';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-white opacity-5 text-[20rem] font-serif">
          ॐ
        </div>
        <div className="absolute bottom-10 right-10 text-white opacity-5 text-[15rem] font-serif">
          ☸
        </div>
        
        {/* Floating circles */}
        <div className="absolute top-1/4 left-[20%] w-32 h-32 border border-white/10 rounded-full animate-float" />
        <div className="absolute bottom-1/4 right-[20%] w-24 h-24 border border-white/10 rounded-full animate-float-slow" />
        
        {/* Sparkles */}
        <div className="absolute top-[30%] right-[15%] animate-pulse-gentle">
          <Sparkles size={32} className="text-white/20" />
        </div>
        <div className="absolute bottom-[30%] left-[15%] animate-pulse-gentle animation-delay-400">
          <Sparkles size={24} className="text-white/20" />
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="reveal opacity-0 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Sparkles size={16} className="text-white" />
            <span className="font-montserrat text-sm text-white font-medium">
              Vagas Limitadas
            </span>
          </div>

          {/* Headline */}
          <h2 className="reveal opacity-0 font-cormorant text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight mb-6 animation-delay-200">
            Pronto para
            <br />
            <span className="text-ana-secondary">Transformar Sua Vida?</span>
          </h2>

          {/* Subtitle */}
          <p className="reveal opacity-0 font-montserrat text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 animation-delay-400 leading-relaxed">
            Não espere mais para se libertar dos bloqueios que impedem sua felicidade. 
            Dê o primeiro passo hoje mesmo e comece sua jornada de transformação.
          </p>

          {/* Quote */}
          <div className="reveal opacity-0 mb-10 animation-delay-600">
            <p className="font-cormorant text-2xl sm:text-3xl italic text-ana-secondary">
              "O momento da mudança é agora"
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="reveal opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 animation-delay-800">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-ana-primary px-8 py-4 rounded-full font-montserrat font-medium hover:bg-ana-tertiary hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Agendar pelo WhatsApp
              <ArrowRight size={20} />
            </a>
            <a
              href="https://instagram.com/anafelix_oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-montserrat font-medium hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Instagram size={20} />
              Seguir no Instagram
            </a>
          </div>

          {/* Trust Message */}
          <div className="reveal opacity-0 mt-12 animation-delay-800">
            <p className="font-montserrat text-sm text-white/60">
              Resposta em até 24h • Atendimento online • 100% confidencial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
