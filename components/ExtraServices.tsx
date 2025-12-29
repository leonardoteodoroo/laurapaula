
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const ExtraServices: React.FC = () => {
    const extras = [
        {
            title: "Manicure e Pedicure",
            subtitle: "Mãos que comunicam confiança e pés que finalmente descansam.",
            image: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/E_essas_unhas_naturaisss_Brasil..._1.webp?v=1766995977?q=80&w=1000&auto=format&fit=crop" // Placeholder manicure
        },
        {
            title: "SPA Labial",
            subtitle: "O fim daquela sensação de boca ressecada que repuxa o dia todo.",
            image: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/spa_labial.jpg?v=1767003843?v=1767002943q=80&w=1000&auto=format&fit=crop" // Placeholder lips
        },
        {
            title: "Massagem Corporal",
            subtitle: "Para quando o peso da semana parece estar todo carregado nos seus ombros.",
            image: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/massagens_laura_puala.webp?v=1767004461?q=80&w=1000&auto=format&fit=crop" // Placeholder massage
        }
    ];

    return (
        <section className="py-20 bg-[#0F110C] border-t border-white/5 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 mb-16">
                <div className="text-center">
                    <span className="text-emerald-500 font-medium tracking-widest uppercase text-xs mb-4 block">
                        UM TEMPO SÓ SEU
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-off-white">
                        Onde o mundo lá fora para por um <span className="italic text-emerald-400">Instante</span>
                    </h2>
                </div>
            </div>

            <div className="flex overflow-x-auto gap-6 px-4 pb-12 snap-x snap-mandatory no-scrollbar md:container md:mx-auto md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-12 mb-12">
                {extras.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 w-[85vw] md:w-auto snap-center group relative rounded-2xl overflow-hidden aspect-[3/4]"
                    >
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-graphite via-dark-graphite/50 to-transparent" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                            <h3 className="font-serif text-2xl text-off-white mb-3 flex items-center justify-between">
                                {item.title}
                                <ArrowUpRight className="opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-emerald-400" />
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                                {item.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center">
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-900/30 border border-emerald-500/30 rounded-lg text-emerald-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 uppercase tracking-widest text-xs font-bold"
                    >
                        Quero Agendar Esses Cuidados
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ExtraServices;

