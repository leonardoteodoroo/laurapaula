import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Authority: React.FC = () => {
  return (
    <section className="py-24 bg-[#141611] relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* Image Side */}
          <div className="w-full md:w-1/2 relative order-2 md:order-1">
            <div className="relative aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden shadow-2xl">
              {/* Using a placeholder that represents a professional specialist */}
              <img
                src="https://cdn.shopify.com/s/files/1/0668/4275/5223/files/A_EspecialistaLaura_Paula.webp?v=1766902278?q=80&w=1000&auto=format&fit=crop"
                alt="Laura Paula - Especialista em Podologia"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <MapPin size={16} />
                  <span className="text-xs uppercase tracking-widest">São Sebastião do Paraíso - MG</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <span className="text-emerald-500 font-medium tracking-widest uppercase text-xs mb-4 block">
              A Especialista
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-off-white mb-6">
              Laura Paula
            </h2>
            <h3 className="text-xl text-gray-300 font-light mb-6">
              Especialista em Rachaduras, Fissuras e Ressecamento Severo.
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              Atendo no meu estúdio em <strong className="text-white font-normal">São Sebastião do Paraíso - MG</strong> e trabalho exclusivamente com técnicas que tratam a causa, evitando o rebote das lixas comuns. É um atendimento individual, focado em resultado real e seguro.
            </p>

            <div className="relative p-8 bg-white/5 rounded-2xl border border-white/5 mb-10">
              <Quote className="absolute top-4 left-4 text-emerald-900/50" size={48} />
              <p className="relative z-10 font-serif italic text-gray-300 leading-relaxed text-lg">
                "Aquele incômodo áspero no lençol ou o medo de alguém notar seu pé descalço... eu sei como isso cansa. Meu trabalho é transformar essa frustração em alívio imediato. Vamos parar de esconder e começar a tratar do jeito certo?"
              </p>
              <p className="mt-4 text-right text-sm text-emerald-400 font-bold uppercase tracking-wider">— Laura Paula</p>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-emerald-500 text-emerald-400 rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-medium"
            >
              Conversar com a Especialista
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Authority;