import { ServiceItem, FaqItem, SocialLink } from './types';

export const PHONE_NUMBER = "5535992704972";
export const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20com%20a%20Laura.`;
export const INSTAGRAM_LINK = "https://instagram.com/laurapaula_naildesing";

export const SERVICES: ServiceItem[] = [
  {
    id: 'plastica-pes',
    title: "Plástica dos Pés",
    description: "Um protocolo exclusivo que remove calosidades e queratose sem cortes, devolvendo a textura aveludada da pele na primeira sessão.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/spa_dos_pes.webp?v=1767003239?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 'spa-terapeutico',
    title: "SPA Terapêutico",
    description: "Imersão sensorial com óleos essenciais e massagem reflexológica. O equilíbrio perfeito entre saúde clínica e relaxamento profundo.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/spaterapeutico.webp?v=1766901525?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 'reconstrucao',
    title: "Reconstrução de Fissuras",
    description: "Tratamento indolor para fechar rachaduras profundas e regenerar o tecido, prevenindo infecções e eliminando o desconforto ao caminhar.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/Reconstrucao_de_Fissuras.webp?v=1766901699q=80&w=800&auto=format&fit=crop"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "O procedimento dói?",
    answer: "Absolutamente não. Nossos protocolos são minimamente invasivos e projetados para serem confortáveis, muitas vezes descritos como relaxantes por nossas clientes."
  },
  {
    question: "Quantas sessões são necessárias?",
    answer: "A maioria das pacientes nota resultados transformadores logo na primeira sessão (Efeito Cinderela). Para casos crônicos, montamos um plano de tratamento personalizado."
  },
  {
    question: "O que é o efeito rebote?",
    answer: "É quando o corpo entende a agressão da lixa comum como uma ameaça e produz AINDA MAIS pele grossa para se proteger. Nosso método remove a calosidade sem agredir, interrompendo esse ciclo."
  }
];