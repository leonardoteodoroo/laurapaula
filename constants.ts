import { ServiceItem, FaqItem, SocialLink } from "./types";

export const PHONE_NUMBER = "5535992704972";
export const WHATSAPP_LINK =
  "https://wa.me/5535992704972?text=Ol%C3%A1%20Laura!%20Vi%20seu%20an%C3%BAncio%20e%20quero%20saber%20como%20ter%20esse%20resultado%20de%20p%C3%A9s%20lisos%20logo%20na%20primeira%20sess%C3%A3o.%20Pode%20me%20ajudar?";
export const INSTAGRAM_LINK = "https://instagram.com/laurapaula_naildesing";
export const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/UxktQALhbcDB4oxs8";
export const ADDRESS =
  "Rua Santa Luzia, 708, Jardim Coolapa, São Sebastião do Paraíso - MG, 37955-226";
export const EMAIL_CONTACT = "sac@semprenamoda.com.br";
export const SITE_URL = "https://laurapaula.semprenamoda.com.br";

export const SERVICES: ServiceItem[] = [
  {
    id: "plastica-pes",
    title: "Plástica dos Pés",
    description:
      "Um protocolo exclusivo que remove calosidades e queratose sem cortes, devolvendo a textura aveludada da pele na primeira sessão.",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/spa_dos_pes.webp?v=1767003239?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "spa-terapeutico",
    title: "SPA Terapêutico",
    description:
      "Imersão sensorial com óleos essenciais e massagem reflexológica. O equilíbrio perfeito entre saúde clínica e relaxamento profundo.",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/spaterapeutico.webp?v=1766901525?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "reconstrucao",
    title: "Reconstrução de Fissuras",
    description:
      "Tratamento indolor para fechar rachaduras profundas e regenerar o tecido, prevenindo infecções e eliminando o desconforto ao caminhar.",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/Reconstrucao_de_Fissuras.webp?v=1766901699q=80&w=800&auto=format&fit=crop",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Laura Paula atende em São Sebastião do Paraíso?",
    answer:
      "Sim! O Estúdio Laura Paula está localizado em São Sebastião do Paraíso - MG, oferecendo serviços especializados em manicure, pedicure e cuidados estéticos para os pés.",
  },
  {
    question: "Quais serviços de manicure e pedicure são oferecidos?",
    answer:
      "Oferecemos serviços completos de manicure e pedicure, além de especialidades como Plástica dos Pés, SPA Terapêutico e Reconstrução de Fissuras para tratamento de pés rachados e ressecados.",
  },
  {
    question: "O atendimento é com horário marcado?",
    answer:
      "Sim, para garantir o melhor atendimento e conforto, trabalhamos exclusivamente com horário marcado.",
  },
  {
    question: "Há tratamento para pés rachados e ressecados?",
    answer:
      "Sim! Somos especialistas em tratamento de fissuras e ressecamento dos pés através de protocolos como a Plástica dos Pés e a Reconstrução de Fissuras, devolvendo a saúde e maciez na primeira sessão.",
  },
  {
    question: "Onde fica o Estúdio Laura Paula?",
    answer:
      "Estamos localizados na Rua Santa Luzia, 708, Jardim Coolapa, São Sebastião do Paraíso - MG, CEP 37955-226.",
  },
  {
    question: "Como agendar pelo WhatsApp?",
    answer:
      "Você pode agendar seu horário diretamente pelo nosso WhatsApp clicando no botão de contato no site ou enviando uma mensagem.",
  },
  {
    question: "O procedimento dói?",
    answer:
      "Absolutamente não. Nossos protocolos são minimamente invasivos e projetados para serem confortáveis, muitas vezes descritos como relaxantes por nossas clientes.",
  },
  {
    question: "Quantas sessões são necessárias?",
    answer:
      "A maioria das pacientes nota resultados transformadores logo na primeira sessão (Efeito Cinderela). Para casos crônicos, montamos um plano de tratamento personalizado.",
  },
  {
    question: "O que é o efeito rebote?",
    answer:
      "É quando o corpo entende a agressão da lixa comum como uma ameaça e produz AINDA MAIS pele grossa para se proteger. Nosso método remove a calosidade sem agredir, interrompendo esse ciclo.",
  },
];
