import React from 'react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        id: 1,
        name: "Maria R.",
        problem: "Incômodo no Lençol",
        text: "Eu já tinha me acostumado com aquele barulho do calcanhar raspando no lençol toda noite. Achei que era coisa da idade. Depois da primeira sessão com a Laura, o silêncio e a maciez foram um choque.",
        stars: 5,
    },
    {
        id: 2,
        name: "Ana Paula S.",
        problem: "Vergonha de Sandálias",
        text: "Eu tinha uma gaveta cheia de sandálias que não usava por vergonha. Gastava fortunas em cremes de farmácia e nada resolvia o aspecto caspento. Hoje eu não penso duas vezes antes de sair descalça.",
        stars: 5,
    },
    {
        id: 3,
        name: "Carla M.",
        problem: "Fim do Efeito Rebote",
        text: "Sempre achei que lixar era o caminho, mas meu pé só piorava. Quando entendi o que era o efeito rebote e fiz o protocolo da Laura, vi que estava jogando tempo fora.",
        stars: 5,
    }
];

const SocialProof: React.FC = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const sectionRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.28 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-dark-graphite relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-emerald-500 font-medium tracking-widest uppercase text-xs mb-4 block">
                        Quem já passou por aqui
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-off-white mb-6">
                        O que acontece quando você decide dar um basta no <span className="italic text-emerald-600">incômodo...</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        Resultados reais de quem decidiu tratar a causa e abandonar o ciclo das lixas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((item, index) => (
                        <div
                            key={item.id}
                            className={`bg-white/5 border border-white/5 p-8 rounded-2xl relative hover:border-emerald-900/50 hover:bg-white/[0.07] transition-all duration-300 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                            style={{ animationDelay: `${index * 500}ms` }}
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-emerald-900/40 group-hover:text-emerald-500/20 transition-colors">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.00691 13.7931 9.99291 11.8596 11.5399 10.4571C12.0528 11.4168 13.0449 12 14.1566 12H15.8286C15.2285 7.85043 14.2888 6.00298 12.5699 4.38096C11.8384 3.69055 10.8242 3.19565 9.77443 3.03714C5.03964 2.32223 2.14959 7.02988 2.66224 11.8009C2.86311 13.6706 3.68284 15.3406 4.90806 16.6343C6.44297 18.2548 8.16912 18.9959 10.5134 19.1672C11.396 19.2317 12.0729 19.9208 12.0729 20.806V21H14.017ZM23.017 21L23.017 18C23.017 16.8954 22.1216 16 21.017 16H18C18.0069 13.7931 18.9929 11.8596 20.5399 10.4571C21.0528 11.4168 22.0449 12 23.1566 12H24.8286C24.2285 7.85043 23.2888 6.00298 21.5699 4.38096C20.8384 3.69055 19.8242 3.19565 18.7744 3.03714C14.0396 2.32223 11.1496 7.02988 11.6622 11.8009C11.8631 13.6706 12.6828 15.3406 13.9081 16.6343C15.443 18.2548 17.1691 18.9959 19.5134 19.1672C20.396 19.2317 21.0729 19.9208 21.0729 20.806V21H23.017Z" />
                                </svg>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(item.stars)].map((_, i) => (
                                    <Star key={i} size={16} className="text-emerald-500 fill-emerald-500" />
                                ))}
                            </div>

                            <p className="text-gray-300 leading-relaxed italic mb-6 relative z-10">
                                "{item.text}"
                            </p>

                            <div className="pt-6 border-t border-white/5">
                                <h4 className="text-off-white font-serif text-lg">{item.name}</h4>
                                <p className="text-xs text-emerald-400 uppercase tracking-wider mt-1">{item.problem}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-sm">
                        Nota média de <strong className="text-off-white">5.0/5.0</strong> baseada em avaliações de pacientes.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
