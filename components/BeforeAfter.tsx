import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GripVertical } from 'lucide-react';

const CASES = [
    {
        id: 1,
        title: "Reconstrução de Fissuras",
        description: "De gretas profundas que causavam dor ao caminhar, para uma pele totalmente íntegra e regenerada.",
        before: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/ressecamento_severo_nos_calcanhares.webp?v=1766991656&q=80&w=1000&auto=format&fit=crop",
        after: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/Reconstrucao_de_Fissuras.webp?v=1766901699&q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Plástica dos Pés (Efeito Rebote)",
        description: "Remoção da camada grossa e amarelada (queratose) sem cortes. O toque aveludado que volta já na primeira sessão.",
        before: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/spa_dos_pes_um_procedimento_que_trata_rachaduras_e_ressecamentos_voce_que_se_indentifica_com_e.webp?v=1766991004&q=80&w=1000&auto=format&fit=crop",
        after: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/spa_dos_pes_um_procedimento_que_trata_rachaduras_e_ressecamentos_voce_que_se_indentifica_com_e.webp?v=1766991004&q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Ressecamento Severo (Toque de Seda)",
        description: "Aquele aspecto 'esbranquiçado' e áspero transformado em uma hidratação profunda que dura de verdade.",
        before: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/Antes_e_Depois_de_um_tratamento_profundo_para_pes_ressecados_e_com_rachaduras_Olha_essa_tra.webp?v=1766990687&q=80&w=1000&auto=format&fit=crop",
        after: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/Antes_e_Depois_de_um_tratamento_profundo_para_pes_ressecados_e_com_rachaduras_Olha_essa_tra_1.webp?v=1766990687&q=80&w=1000&auto=format&fit=crop"
    }
];

const BeforeAfter: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>();

    // Reset slider position when case changes
    useEffect(() => {
        setSliderPosition(50);
    }, [currentIndex]);

    // Intersection Observer to start animation when visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Auto-animation logic (Sine wave "demo" mode)
    useEffect(() => {
        if (!isVisible || hasInteracted || isDragging) {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            return;
        }

        const animate = () => {
            const time = Date.now() / 1000; // time in seconds
            // Oscillate between ~35% and ~65% (center 50 +/- 15)
            // Speed factor: 1.5 for a gentle pace
            const newPos = 50 + 15 * Math.sin(time * 2);
            setSliderPosition(newPos);
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [isVisible, hasInteracted, isDragging]);

    const handleMove = (clientX: number) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
            setSliderPosition(percentage);
        }
    };

    const stopInteraction = () => {
        setIsDragging(false);
    };

    const startInteraction = () => {
        setIsDragging(true);
        setHasInteracted(true); // Stop auto-animation forever
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (isDragging) handleMove(e.clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    // Global mouse up to catch drag end outside container
    useEffect(() => {
        window.addEventListener('mouseup', stopInteraction);
        window.addEventListener('touchend', stopInteraction);
        return () => {
            window.removeEventListener('mouseup', stopInteraction);
            window.removeEventListener('touchend', stopInteraction);
        };
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? CASES.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === CASES.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="py-24 bg-dark-graphite relative border-t border-white/5 select-none from-dark-graphite to-[#141611] bg-gradient-to-b">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-emerald-500 font-medium tracking-widest uppercase text-xs mb-4 block">
                        ALÍVIO QUE FICA
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-off-white mb-6">
                        Pé liso? <span className="italic text-emerald-600">Vida Nova!</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        Para você parar de esconder o calcanhar toda vez que alguém olha para baixo.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-5xl mx-auto">

                    <div className="overflow-hidden rounded-2xl bg-white/5 border border-white/5 p-4 md:p-8">
                        <div key={currentIndex} className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center animate-fade-in-up">

                            {/* Interactive Slider Area */}
                            <div
                                className="w-full aspect-[3/4] md:aspect-square relative rounded-lg overflow-hidden cursor-ew-resize group shadow-2xl"
                                ref={containerRef}
                                onMouseMove={onMouseMove}
                                onTouchMove={onTouchMove}
                                onMouseDown={startInteraction}
                                onTouchStart={startInteraction}
                                onMouseUp={stopInteraction}
                                onTouchEnd={stopInteraction}
                            >
                                {/* After Image (Background/Base) */}
                                <img
                                    src={CASES[currentIndex].after}
                                    alt="Depois"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    draggable={false}
                                    loading="lazy"
                                />
                                <div className="absolute top-4 right-4 bg-emerald-900/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-white uppercase tracking-wider z-10 border border-emerald-700/50 pointer-events-none">
                                    Depois
                                </div>

                                {/* Before Image (Overlay clipped) */}
                                <div
                                    className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-emerald-500"
                                    style={{ width: `${sliderPosition}%` }}
                                >
                                    <img
                                        src={CASES[currentIndex].before}
                                        alt="Antes"
                                        className="absolute inset-0 w-[100%] max-w-none h-full object-cover"
                                        // Note: w-[100%] relative to parent container, not self, to maintain aspect
                                        style={{ width: `${(100 / sliderPosition) * 100}%` }}
                                    // Actually, simpler approach for perfect alignment:
                                    // Since 'absolute inset-0' matches parent size, we need the inner img to be full width of PARENT.
                                    // We can use width: 100vw or calculated logic, but easiest is to calculate inverse width relative to clip or just fix width.
                                    // BETTER FIX: Let's use the width of the containerRef.
                                    />
                                    {/* Re-approach for image alignment: 
                                If the parent div is clipped to 50%, the child img must be 200% width to look 'normal' if using percentages? 
                                NO. The standard way: 
                                Parent (Before Wrapper): absolute top-0 left-0 h-full width-[slider%] overflow-hidden z-20.
                                Child (Before Img): absolute top-0 left-0 h-full w-[containerWidth] max-w-none. 
                                Since we can't easily get containerWidth in tailwind classes dynamically without calc(), 
                                we set the text-area img to match the container size.
                            */}
                                    <img
                                        src={CASES[currentIndex].before}
                                        alt="Antes"
                                        className="absolute top-0 left-0 h-full object-cover max-w-none"
                                        style={{ width: `${(100 / sliderPosition) * 100}%` }}
                                        draggable={false}
                                        loading="lazy"
                                    />
                                    <div className="absolute top-4 left-4 bg-red-900/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-white uppercase tracking-wider z-10 border border-red-700/50 pointer-events-none">
                                        Antes
                                    </div>
                                </div>

                                {/* Slider Handle */}
                                <div
                                    className="absolute top-0 bottom-0 w-1 bg-emerald-500 cursor-ew-resize z-30 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                    style={{ left: `${sliderPosition}%` }}
                                >
                                    <div className="absolute top-1/2 left-1/2 bg-emerald-500 w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20 animate-pulse-handle">
                                        <GripVertical size={16} className="text-white" />
                                    </div>
                                </div>

                            </div>

                            {/* Text Area */}
                            <div className="w-full text-left">
                                <h3 className="text-2xl font-serif text-off-white mb-4">
                                    {CASES[currentIndex].title}
                                </h3>
                                <div className="w-12 h-1 bg-emerald-600 mb-6"></div>
                                <p className="text-gray-300 leading-relaxed text-lg font-light">
                                    {CASES[currentIndex].description}
                                </p>

                                <div className="mt-8 flex items-center gap-2 text-sm text-gray-500 italic">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    Arraste a linha para comparar
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center gap-6 mt-8">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full border border-white/10 text-gray-400 hover:bg-emerald-900/20 hover:text-emerald-400 hover:border-emerald-500/50 transition-all active:scale-95"
                            aria-label="Caso anterior"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="flex gap-2">
                            {CASES.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex
                                        ? "bg-emerald-500 w-8"
                                        : "bg-white/10 hover:bg-white/30"
                                        }`}
                                    aria-label={`Ir para caso ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full border border-white/10 text-gray-400 hover:bg-emerald-900/20 hover:text-emerald-400 hover:border-emerald-500/50 transition-all active:scale-95"
                            aria-label="Próximo caso"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default BeforeAfter;
