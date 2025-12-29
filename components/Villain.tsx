import React from 'react';
import { ShieldAlert, RefreshCw, XCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Villain: React.FC = () => {
  const [isGrayscale, setIsGrayscale] = React.useState(false);
  const imageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay so the user sees it colorful for a moment
          setTimeout(() => {
            setIsGrayscale(true);
          }, 300);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Trigger when 50% is visible
    );

    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-32 bg-dark-graphite relative overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Section 1: The Frustration */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-1/2">
            <span className="text-emerald-500 font-medium tracking-widest uppercase text-xs mb-4 block">
              Identificou?
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-off-white mb-6">
              O mais frustrante não é o pé rachado… é a sensação de que <span className="italic text-red-400">nada resolve.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              E, no fundo, talvez você já tenha até tentado de tudo. E nada funciona por muito tempo.
              <span className="block mt-4 text-3xl md:text-4xl font-serif text-red-400 italic">
                E eu sei que isso cansa.
              </span>
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Lixa e Pedra Pomes",
                "Creme “milagroso”",
                "Receitinha caseira",
                "Hidratação que dura 2 dias"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5">
                  <XCircle className="text-red-400 flex-shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-emerald-400 text-sm italic border-l-2 border-emerald-500 pl-4">
              Existe um motivo claro para isso acontecer — e ele não tem nada a ver com você “cuidar errado”.
            </p>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div
              ref={imageRef}
              className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0668/4275/5223/files/11.jpg?v=1766899626&q=80&w=1000&auto=format&fit=crop"
                alt="Pés com ressecamento"
                className={`w-full h-full object-cover transition-all duration-[1300ms] ease-in-out ${isGrayscale
                  ? 'opacity-85 grayscale hover:grayscale-0'
                  : 'opacity-100 grayscale-0'
                  }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-graphite via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <a href={WHATSAPP_LINK} className="w-full block text-center bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 rounded-lg hover:bg-emerald-900/50 transition-colors uppercase tracking-widest text-xs font-bold">
                  Quero a Solução
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: The Rebound Effect */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/5">

          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl text-off-white mb-6">
              Por que seus pés continuam <span className="italic text-emerald-400">rachando?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Quase ninguém te conta isso, mas… <strong className="text-white">quando você lixa, sua pele entende que está sendo agredida.</strong>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              E aí ela reage criando ainda mais espessura para se defender. Ou seja:
              <br />
              <span className="block mt-4 text-center p-4 bg-dark-graphite/50 rounded-xl text-emerald-300 font-medium">
                Você lixa → fica lisinho por alguns dias → volta pior.
              </span>
            </p>

            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-red-900/20 rounded-full text-red-400 mt-1">
                <ShieldAlert size={24} />
              </div>
              <div>
                <h3 className="text-xl font-medium text-off-white mb-2">Isso tem nome: Efeito Rebote.</h3>
                <p className="text-sm text-gray-400">
                  Não é descuido. Não é falta de hidratação. Não é “coisa da idade”. É só seu corpo tentando se proteger... E é justamente isso que eu trato.
                </p>
              </div>
            </div>

            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 text-emerald-400 border-b border-emerald-400 pb-1 hover:text-white hover:border-white transition-all">
              QUERO O TRATAMENTO CERTO <RefreshCw size={16} />
            </a>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border border-emerald-900/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-emerald-800/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center p-6 bg-dark-graphite rounded-full shadow-2xl">
                <div>
                  <p className="font-serif text-5xl text-off-white mb-2">Pare</p>
                  <p className="text-xs uppercase tracking-widest text-red-400">de lixar agora</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Villain;