import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-dark-graphite">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-off-white mb-4">
            Dúvidas Frequentes
          </h2>
          <div className="w-16 h-px bg-emerald-500 mx-auto opacity-50"></div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-2xl transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-transparent border border-white/5 hover:border-white/10'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => toggleAccordion(index)}
              >
                <span className={`text-lg font-medium transition-colors ${
                  openIndex === index ? 'text-emerald-400' : 'text-gray-200'
                }`}>
                  {faq.question}
                </span>
                <span className={`p-1 rounded-full border transition-all duration-300 ${
                    openIndex === index ? 'border-emerald-400 text-emerald-400 rotate-180' : 'border-gray-600 text-gray-400'
                }`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;