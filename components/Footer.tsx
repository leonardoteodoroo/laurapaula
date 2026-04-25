import React from "react";
import { Instagram, MessageCircle, MapPin } from "lucide-react";
import {
  WHATSAPP_LINK,
  INSTAGRAM_LINK,
  GOOGLE_MAPS_LINK,
  ADDRESS,
} from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-[#0a0c08] border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="mb-10 relative group">
          {/* Subtle Glow Behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <img
            src="https://cdn.shopify.com/s/files/1/0668/4275/5223/files/logo_laura_paula.webp?v=1763281302"
            alt="Laura Paula - Especialista em Pés"
            className="w-56 relative z-10 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500 grayscale hover:grayscale-0"
            loading="lazy"
          />
        </div>

        <div className="mb-8">
          <h3 className="font-serif text-4xl md:text-5xl text-off-white">
            Laura Paula
          </h3>
          <p className="text-emerald-500 text-sm uppercase tracking-[0.3em] mt-3">
            Especialista em Pés
          </p>
        </div>

        <p className="text-gray-400 max-w-lg mb-12 font-light text-lg">
          Devolvendo a saúde e a confiança para seus pés em São Sebastião do
          Paraíso - MG.
        </p>

        <div className="flex flex-col md:flex-row justify-center flex-wrap gap-6 mb-16 max-w-4xl">
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-gray-500 hover:text-emerald-400 transition-colors px-6 py-3 rounded-full border border-white/10 hover:border-emerald-400/50"
          >
            <Instagram size={24} />
            <span className="text-base">@laurapaula_naildesing</span>
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-gray-500 hover:text-emerald-400 transition-colors px-6 py-3 rounded-full border border-white/10 hover:border-emerald-400/50"
          >
            <MessageCircle size={24} />
            <span className="text-base">(35) 99270-4972</span>
          </a>
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-gray-500 hover:text-emerald-400 transition-colors px-6 py-3 rounded-full border border-white/10 hover:border-emerald-400/50"
          >
            <MapPin size={24} className="flex-shrink-0" />
            <address className="text-sm not-italic text-left">
              {ADDRESS}
            </address>
          </a>
        </div>

        <div className="w-full h-px bg-white/5 mb-8"></div>

        <p className="text-gray-600 text-sm mb-6">
          &copy; {new Date().getFullYear()} Laura Paula. Todos os direitos
          reservados.
        </p>

        <div className="w-full flex justify-start">
          <a
            href="https://instagram.com/leonardoteodoro.of"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[8px] uppercase tracking-widest text-[#C5A059]/60 hover:text-[#C5A059] transition-colors duration-300"
          >
            Site by Leonardo Teodoro
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
