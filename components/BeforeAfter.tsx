import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GripVertical } from 'lucide-react';

const CASES = [
    {
        id: 1,
        title: "Reconstrução de Fissuras",
        description: "De gretas profundas que causavam dor ao caminhar, para uma pele totalmente íntegra e regenerada.",
        before: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/11.jpg?v=1766899626&q=80&w=1000&auto=format&fit=crop",
        after: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/Reconstrucao_de_Fissuras.webp?v=1766901699&q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Plástica dos Pés (Efeito Rebote)",
        description: "Remoção da camada grossa e amarelada (queratose) sem cortes. O toque aveludado que volta já na primeira sessão.",
        before: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/11.jpg?v=1766899626&q=80&w=1000&auto=format&fit=crop",
        after: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/Reconstrucao_de_Fissuras.webp?v=1766901699&q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Ressecamento Severo (Toque de Seda)",
        description: "Aquele aspecto 'esbranquiçado' e áspero transformado em uma hidratação profunda que dura de verdade.",
        before: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/11.jpg?v=1766899626&q=80&w=1000&auto=format&fit=crop",
        after: "https://cdn.shopify.com/s/files/1/0668/4275/5223/files/Reconstrucao_de_Fissuras.webp?v=1766901699&q=80&w=1000&auto=format&fit=crop"
    }
];

const BeforeAfter: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Reset slider position when case changes
    useEffect(() => {
        setSliderPosition(50);
    }, [currentIndex]);

    const handleMove = (clientX: number) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
            setSliderPosition(percentage);
        }
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (isDragging) handleMove(e.clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    const onMouseDown = () => setIsDragging(true);
    const onMouseUp = () => setIsDragging(false);

    // Global mouse up to catch drag end outside container
    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
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
                        Resultados Reais
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-off-white mb-6">
                        Não é mágica, é <span className="italic text-emerald-600">Ciência</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        Veja a transformação de quem confiou no método e recuperou a saúde dos pés.
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
                                onMouseDown={onMouseDown}
                                onMouseUp={onMouseUp}
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
