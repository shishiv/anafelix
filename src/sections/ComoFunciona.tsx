import { useEffect, useRef } from 'react';
import { Search, Sparkles, Headphones, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico Energético',
    description: 'Através da radiestesia, identificamos bloqueios e interferências no seu campo energético.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Limpeza & Correção',
    description: 'Realizamos a limpeza profunda de amarrações, contratos espirituais e interferências.',
  },
  {
    number: '03',
    icon: Headphones,
    title: 'Reprogramação Mental',
    description: 'Receba áudios vibracionais personalizados para reprogramar sua mente subconsciente.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Integração & Acompanhamento',
    description: 'Acompanhe sua evolução com suporte contínuo e mantenha sua energia protegida.',
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
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="reveal opacity-0 font-cormorant text-4xl sm:text-5xl lg:text-6xl font-semibold text-ana-primary mb-6">
            Como Funciona a
            <br />
            <span className="gradient-text">Desprogramação</span>
          </h2>
          <p className="reveal opacity-0 font-montserrat text-lg text-ana-dark/70 animation-delay-200">
            Um método estruturado em 4 etapas para resultados profundos e duradouros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="reveal opacity-0 bg-ana-tertiary rounded-2xl p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-cormorant font-bold">
                  {step.number}
                </div>
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-ana-primary" />
                </div>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-ana-primary mb-2">
                {step.title}
              </h3>
              <p className="font-montserrat text-ana-dark/70 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal opacity-0 text-center mt-12 animation-delay-400">
          <p className="font-cormorant text-xl italic text-ana-accent mb-6">
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
