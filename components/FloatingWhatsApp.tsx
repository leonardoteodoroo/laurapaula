import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-emerald-deep text-white rounded-full shadow-lg hover:bg-emerald-light transition-all duration-300 hover:scale-110 group"
      aria-label="Falar no WhatsApp"
    >
      <span className="absolute w-full h-full rounded-full bg-emerald-deep opacity-75 animate-ping"></span>
      <MessageCircle size={32} className="relative z-10" />
    </a>
  );
};

export default FloatingWhatsApp;