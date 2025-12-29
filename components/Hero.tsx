import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.shopify.com/s/files/1/0668/4275/5223/files/hero.webp?q=80&w=2400&auto=format&fit=crop"
          alt="Mulher com vergonha dos pés rachados procurando tratamento de podologia para fissuras e calcanhares ressecados."
          className="w-full h-full object-cover opacity-60"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-graphite via-dark-graphite/0 to-transparent" />
      </div>

      {/* Top Branding - Clarity for First Fold */}
      <div className="absolute top-0 left-0 right-0 p-6 z-20 flex justify-between items-center bg-gradient-to-b from-dark-graphite/80 to-transparent">
        <div className="flex flex-col">
          <span className="font-serif text-2xl text-off-white tracking-wide">Laura Paula</span>
          <span className="text-xs text-emerald-400 uppercase tracking-widest">Especialista em Rachaduras e Ressecamento</span>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-24 pb-10 flex flex-col items-center text-center">

        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-tight text-off-white mb-6 max-w-4xl opacity-0 animate-[fadeInUp_4s_ease-out_1.2s_forwards]">
          Quando foi a última vez que você se sentiu segura para <span className="italic text-emerald-500">usar uma sandália?</span>
        </h1>

        <div className="max-w-2xl mb-10 opacity-0 animate-[fadeInUp_4s_ease-out_2.4s_forwards]">
          <p className="font-sans text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-6">
            Você não deveria precisar esconder seus pés. Muito menos sentir vergonha deles... Mas quem sofre com rachaduras, fissuras e aquele calcanhar grosso que incomoda até no lençol… sabe como isso mexe com a autoestima.
          </p>
          <div className="w-16 h-px bg-emerald-500/50 mx-auto"></div>
        </div>

        <div className="opacity-0 animate-[fadeInUp_4s_ease-out_5s_forwards]">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-emerald-deep text-off-white rounded-full overflow-hidden transition-all duration-300 hover:bg-emerald-light shadow-[0_0_20px_rgba(45,90,39,0.5)] hover:shadow-[0_0_30px_rgba(45,90,39,0.7)]"
          >
            <span className="relative z-10 font-medium tracking-wide">FALE COMIGO AGORA PELO WHATSAPP</span>
            <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest">
            São Sebastião do Paraíso - MG
          </p>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-opacity duration-500 ${showScrollIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <span className="text-off-white/60 text-sm uppercase tracking-widest animate-pulse">Role para baixo</span>
        <ChevronDown className="w-8 h-8 text-emerald-500 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;