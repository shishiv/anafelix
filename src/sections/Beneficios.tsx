import { useEffect, useRef } from 'react';
import { Brain, Sparkles, Target, RefreshCw, Scale, Heart } from 'lucide-react';

const beneficios = [
  {
    icon: Brain,
    title: 'Libere Bloqueios',
    description: 'Elimine crenças limitantes e padrões negativos que impedem seu crescimento pessoal e profissional.',
  },
  {
    icon: Sparkles,
    title: 'Harmonize Energias',
    description: 'Restaure o fluxo natural da sua energia vital, equilibrando chakras e eliminando interferências externas.',
  },
  {
    icon: Target,
    title: 'Encontre Propósito',
    description: 'Alinhe sua trajetória com seus valores verdadeiros e descubra o sentido da sua jornada.',
  },
  {
    icon: RefreshCw,
    title: 'Renasça Purificado',
    description: 'Experimente uma transformação profunda através da limpeza energética em todos os níveis do seu ser.',
  },
  {
    icon: Scale,
    title: 'Recupere o Equilíbrio',
    description: 'Restaure a harmonia entre corpo, mente e espírito para uma vida mais plena e consciente.',
  },
  {
    icon: Heart,
    title: 'Reprograme sua Mente',
    description: 'Utilize áudios vibracionais personalizados para criar novos padrões mentais positivos.',
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
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 text-ana-primary opacity-5 text-[15rem] font-serif">
          ☸
        </div>
        <div className="absolute bottom-20 left-10 text-ana-accent opacity-5 text-[10rem] font-serif">
          ॐ
        </div>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="reveal opacity-0 inline-block font-montserrat text-sm text-ana-accent font-medium tracking-wider uppercase mb-4">
            Transformação Completa
          </span>
          <h2 className="reveal opacity-0 font-cormorant text-4xl sm:text-5xl lg:text-6xl font-semibold text-ana-primary mb-6 animation-delay-200">
            Por Que Escolher a
            <br />
            <span className="gradient-text">Limpeza Energética?</span>
          </h2>
          <p className="reveal opacity-0 font-montserrat text-lg text-ana-dark/70 animation-delay-400">
            Um processo estruturado que combina ciência e espiritualidade para 
            promover transformações profundas e duradouras na sua vida.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {beneficios.map((beneficio, index) => (
            <div
              key={beneficio.title}
              className="reveal opacity-0 group relative bg-white rounded-3xl p-8 card-hover overflow-hidden"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-ana-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-ana-tertiary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-ana-primary/10 transition-all duration-300">
                  <beneficio.icon 
                    size={32} 
                    className="text-ana-primary group-hover:text-ana-accent transition-colors duration-300" 
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="font-cormorant text-2xl font-semibold text-ana-primary mb-3">
                  {beneficio.title}
                </h3>

                {/* Description */}
                <p className="font-montserrat text-ana-dark/70 leading-relaxed">
                  {beneficio.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-ana-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
