import { useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle, Instagram } from 'lucide-react';

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
      <div className="absolute inset-0 gradient-bg" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="reveal opacity-0 font-cormorant text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight mb-6">
            Pronto para
            <br />
            <span className="text-ana-secondary">Transformar Sua Vida?</span>
          </h2>

          <p className="reveal opacity-0 font-montserrat text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 animation-delay-200 leading-relaxed">
            Não espere mais para se libertar dos bloqueios que impedem sua felicidade.
          </p>

          <div className="reveal opacity-0 mb-8 animation-delay-400">
            <p className="font-cormorant text-2xl sm:text-3xl italic text-ana-secondary">
              "O momento da mudança é agora"
            </p>
          </div>

          <div className="reveal opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 animation-delay-400">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-ana-primary px-8 py-4 rounded-full font-montserrat font-medium hover:bg-ana-tertiary transition-all inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Agendar pelo WhatsApp
              <ArrowRight size={20} />
            </a>
            <a
              href="https://instagram.com/anafelix_oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-montserrat font-medium hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              <Instagram size={20} />
              Seguir no Instagram
            </a>
          </div>

          <div className="reveal opacity-0 mt-10 animation-delay-400">
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
