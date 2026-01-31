import { useEffect, useRef } from 'react';
import { Search, Sparkles, Headphones, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico Energético',
    description: 'Através da radiestesia, identificamos bloqueios, interferências e padrões negativos que estão afetando sua energia e bem-estar. Um mapeamento completo do seu campo energético.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Limpeza & Correção',
    description: 'Utilizando radiônica e técnicas holísticas, realizamos a limpeza profunda de amarrações, contratos espirituais, magias e qualquer interferência externa negativa.',
  },
  {
    number: '03',
    icon: Headphones,
    title: 'Reprogramação Mental',
    description: 'Receba áudios vibracionais personalizados com frequências específicas para reprogramar sua mente subconsciente e criar novos padrões positivos.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Integração & Acompanhamento',
    description: 'Acompanhe sua evolução com suporte contínuo. Integre as mudanças no seu dia a dia e mantenha sua energia protegida e harmonizada.',
  },
];

const ComoFunciona = () => {
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
      id="como-funciona"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[600px] border border-ana-primary/5 rounded-full animate-spin-slow" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[400px] h-[400px] border border-ana-accent/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        </div>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="reveal opacity-0 inline-block font-montserrat text-sm text-ana-accent font-medium tracking-wider uppercase mb-4">
            Processo Transformador
          </span>
          <h2 className="reveal opacity-0 font-cormorant text-4xl sm:text-5xl lg:text-6xl font-semibold text-ana-primary mb-6 animation-delay-200">
            Como Funciona a
            <br />
            <span className="gradient-text">Desprogramação</span>
          </h2>
          <p className="reveal opacity-0 font-montserrat text-lg text-ana-dark/70 animation-delay-400">
            Um método estruturado em 4 etapas que combina radiestesia, radiônica 
            e reprogramação mental para resultados profundos e duradouros.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`reveal opacity-0 relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${(index + 2) * 150}ms` }}
            >
              {/* Number & Line */}
              <div className="hidden lg:flex flex-col items-center">
                <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-white font-cormorant text-3xl font-bold shadow-glow">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-24 bg-gradient-to-b from-ana-primary to-ana-secondary mt-4" />
                )}
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-ana-tertiary rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-soft transition-all duration-500">
                {/* Mobile Number */}
                <div className="lg:hidden w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white font-cormorant text-xl font-bold mb-6">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon 
                    size={28} 
                    className="text-ana-primary" 
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="font-cormorant text-2xl lg:text-3xl font-semibold text-ana-primary mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-montserrat text-ana-dark/70 leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-ana-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden lg:block flex-1" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal opacity-0 text-center mt-16 animation-delay-800">
          <p className="font-cormorant text-2xl italic text-ana-accent mb-6">
            "O processo completo dura apenas 15 dias"
          </p>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary inline-flex"
          >
            Começar Minha Transformação
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
