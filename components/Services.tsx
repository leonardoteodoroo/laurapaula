import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES, WHATSAPP_LINK } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-dark-graphite relative">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-off-white mb-4">
          O <span className="italic text-emerald-600">FIM DA BRIGA</span> com as rachaduras.
        </h2>
        <p className="text-gray-400 max-w-xl">
          O cuidado que vai além de um simples hidratante de farmácia.
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto gap-6 px-4 pb-12 snap-x snap-mandatory no-scrollbar md:container md:mx-auto md:grid md:grid-cols-3 md:overflow-visible">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="flex-shrink-0 w-[85vw] md:w-auto snap-center group relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4]"
          >
            {/* Image */}
            <img
              src={service.imageUrl}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-graphite via-dark-graphite/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
              <h3 className="font-serif text-2xl text-off-white mb-3 flex items-center justify-between">
                {service.title}
                <ArrowUpRight className="opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-emerald-400" />
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                {service.description}
              </p>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-emerald-400 text-xs tracking-widest uppercase border-b border-transparent hover:border-emerald-400 transition-colors"
              >
                Saber mais
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;