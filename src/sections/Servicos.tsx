import { useEffect, useRef } from 'react';
import { Clock, Check, Sparkles, Users, Zap, Gift } from 'lucide-react';

const servicos = [
  {
    icon: Zap,
    title: 'Desprogramação Neurobiológica',
    subtitle: 'Programa Completo',
    duration: '15 dias',
    price: 'R$ 497',
    description: 'O processo mais completo de transformação, combinando diagnóstico energético, limpeza profunda e reprogramação mental.',
    features: [
      'Diagnóstico completo via radiestesia',
      'Identificação de todos os bloqueios',
      'Limpeza energética profunda',
      'Áudios vibracionais personalizados',
      'Reprogramação mental completa',
      'Acompanhamento por 15 dias',
      'Proteção energética',
    ],
    highlighted: true,
    cta: 'Quero Me Transformar',
  },
  {
    icon: Sparkles,
    title: 'Limpeza Energética Profunda',
    subtitle: 'Sessão Individual',
    duration: 'Sessão única',
    price: 'R$ 197',
    description: 'Uma sessão intensa de limpeza para remover amarrações, contratos espirituais e restaurar seu equilíbrio energético.',
    features: [
      'Diagnóstico energético inicial',
      'Remoção de amarrações',
      'Corte de contratos espirituais',
      'Limpeza de interferências',
      'Harmonização dos chakras',
      'Proteção energética',
      'Relatório completo',
    ],
    highlighted: false,
    cta: 'Agendar Sessão',
  },
  {
    icon: Users,
    title: 'Reiki Coletivo Gratuito',
    subtitle: 'Toda Sexta-feira',
    duration: '20h - Online',
    price: 'GRÁTIS',
    description: 'Participe do nosso Reiki coletivo semanal, 100% gratuito, e sinta a energia de cura fluir através de você.',
    features: [
      'Toda sexta-feira às 20h',
      '100% online e gratuito',
      'A distância',
      'Harmonização energética',
      'Relaxamento profundo',
      'Comunidade acolhedora',
      'Sem necessidade de experiência',
    ],
    highlighted: false,
    cta: 'Participar Grátis',
  },
];

const Servicos = () => {
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
      id="servicos"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[5%] text-ana-primary opacity-5 text-[20rem] font-serif">
          ॐ
        </div>
        <div className="absolute bottom-20 right-[5%] text-ana-accent opacity-5 text-[15rem] font-serif">
          ☸
        </div>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="reveal opacity-0 inline-block font-montserrat text-sm text-ana-accent font-medium tracking-wider uppercase mb-4">
            Escolha seu Caminho
          </span>
          <h2 className="reveal opacity-0 font-cormorant text-4xl sm:text-5xl lg:text-6xl font-semibold text-ana-primary mb-6 animation-delay-200">
            Serviços
            <br />
            <span className="gradient-text">Transformadores</span>
          </h2>
          <p className="reveal opacity-0 font-montserrat text-lg text-ana-dark/70 animation-delay-400">
            Cada serviço é projetado para atender às suas necessidades específicas, 
            desde uma limpeza pontual até uma transformação completa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <div
              key={servico.title}
              className={`reveal opacity-0 relative rounded-3xl overflow-hidden ${
                servico.highlighted
                  ? 'gradient-bg text-white lg:scale-105 lg:-my-4 shadow-glow'
                  : 'bg-ana-tertiary text-ana-dark'
              }`}
              style={{ animationDelay: `${(index + 2) * 150}ms` }}
            >
              {/* Popular Badge */}
              {servico.highlighted && (
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="font-montserrat text-xs font-medium">MAIS POPULAR</span>
                </div>
              )}

              <div className="p-8 lg:p-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  servico.highlighted ? 'bg-white/20' : 'bg-white'
                }`}>
                  <servico.icon 
                    size={32} 
                    className={servico.highlighted ? 'text-white' : 'text-ana-primary'}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <p className={`font-montserrat text-sm mb-2 ${
                  servico.highlighted ? 'text-white/70' : 'text-ana-accent'
                }`}>
                  {servico.subtitle}
                </p>
                <h3 className={`font-cormorant text-2xl lg:text-3xl font-semibold mb-4 ${
                  servico.highlighted ? 'text-white' : 'text-ana-primary'
                }`}>
                  {servico.title}
                </h3>

                {/* Duration */}
                <div className={`flex items-center gap-2 mb-4 ${
                  servico.highlighted ? 'text-white/70' : 'text-ana-dark/60'
                }`}>
                  <Clock size={16} />
                  <span className="font-montserrat text-sm">{servico.duration}</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className={`font-cormorant text-4xl lg:text-5xl font-bold ${
                    servico.highlighted ? 'text-white' : 'text-ana-primary'
                  }`}>
                    {servico.price}
                  </span>
                </div>

                {/* Description */}
                <p className={`font-montserrat text-sm leading-relaxed mb-8 ${
                  servico.highlighted ? 'text-white/80' : 'text-ana-dark/70'
                }`}>
                  {servico.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {servico.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check 
                        size={18} 
                        className={`mt-0.5 flex-shrink-0 ${
                          servico.highlighted ? 'text-white' : 'text-ana-primary'
                        }`}
                      />
                      <span className={`font-montserrat text-sm ${
                        servico.highlighted ? 'text-white/90' : 'text-ana-dark/80'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-full font-montserrat font-medium text-center inline-flex items-center justify-center gap-2 transition-all duration-300 ${
                    servico.highlighted
                      ? 'bg-white text-ana-primary hover:bg-ana-tertiary'
                      : 'gradient-bg text-white hover:shadow-glow'
                  }`}
                >
                  {servico.price === 'GRÁTIS' ? <Gift size={18} /> : null}
                  {servico.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="reveal opacity-0 text-center mt-12 animation-delay-800">
          <p className="font-montserrat text-sm text-ana-dark/60">
            * Todos os serviços podem ser parcelados em até 12x no cartão.
            <br />
            Dúvidas?{' '}
            <a 
              href="https://wa.me/5500000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-ana-primary hover:underline"
            >
              Fale comigo no WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
