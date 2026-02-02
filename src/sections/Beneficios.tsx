import { useEffect, useRef } from 'react';
import { Brain, Sparkles, Target, RefreshCw, Scale, Heart } from 'lucide-react';

const beneficios = [
  {
    icon: Brain,
    title: 'Libere Bloqueios',
    description: 'Elimine crenças limitantes e padrões negativos que impedem seu crescimento.',
  },
  {
    icon: Sparkles,
    title: 'Harmonize Energias',
    description: 'Restaure o fluxo natural da sua energia vital e equilibre seus chakras.',
  },
  {
    icon: Target,
    title: 'Encontre Propósito',
    description: 'Alinhe sua trajetória com seus valores verdadeiros e descubra seu caminho.',
  },
  {
    icon: RefreshCw,
    title: 'Renasça Purificado',
    description: 'Experimente transformação profunda através da limpeza energética.',
  },
  {
    icon: Scale,
    title: 'Recupere o Equilíbrio',
    description: 'Restaure a harmonia entre corpo, mente e espírito.',
  },
  {
    icon: Heart,
    title: 'Reprograme sua Mente',
    description: 'Crie novos padrões mentais positivos com áudios vibracionais.',
  },
];

const Beneficios = () => {
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
      id="beneficios"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="reveal opacity-0 font-cormorant text-4xl sm:text-5xl lg:text-6xl font-semibold text-ana-primary mb-6">
            Por Que Escolher a
            <br />
            <span className="gradient-text">Limpeza Energética?</span>
          </h2>
          <p className="reveal opacity-0 font-montserrat text-lg text-ana-dark/70 animation-delay-200">
            Um processo que combina ciência e espiritualidade para 
            promover transformações duradouras na sua vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((beneficio, index) => (
            <div
              key={beneficio.title}
              className="reveal opacity-0 bg-white rounded-2xl p-6 hover:shadow-soft transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-ana-tertiary flex items-center justify-center mb-4">
                <beneficio.icon className="w-6 h-6 text-ana-primary" />
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-ana-primary mb-2">
                {beneficio.title}
              </h3>
              <p className="font-montserrat text-ana-dark/70 text-sm leading-relaxed">
                {beneficio.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
