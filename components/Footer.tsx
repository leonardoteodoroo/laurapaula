import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, INSTAGRAM_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-[#0a0c08] border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        
        <div className="mb-6">
            <h3 className="font-serif text-3xl text-off-white">Laura Paula</h3>
            <p className="text-emerald-500 text-xs uppercase tracking-[0.3em] mt-1">Especialista em Pés</p>
        </div>
        
        <p className="text-gray-400 max-w-md mb-8 font-light">
            Devolvendo a saúde e a confiança para seus pés em São Sebastião do Paraíso - MG.
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
            <a 
                href={INSTAGRAM_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-emerald-400 transition-colors px-4 py-2 rounded-full border border-white/10 hover:border-emerald-400/50"
            >
                <Instagram size={20} />
                <span className="text-sm">@laurapaula_naildesing</span>
            </a>
            <a 
                href={WHATSAPP_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-emerald-400 transition-colors px-4 py-2 rounded-full border border-white/10 hover:border-emerald-400/50"
            >
                <MessageCircle size={20} />
                <span className="text-sm">(35) 99270-4972</span>
            </a>
        </div>

        <div className="w-full h-px bg-white/5 mb-8"></div>

        <p className="text-gray-700 text-xs">
          &copy; {new Date().getFullYear()} Laura Paula. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;