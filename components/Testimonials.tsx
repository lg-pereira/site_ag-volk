import React, { useState, useEffect } from 'react';
import { SectionTitle } from './SectionTitle';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      company: "Amaral Climatização",
      text: "Gostei muito da sua ajuda e conhecimento. Com essa parceria acredito que vou captar mais clientes e fortalecer a marca da empresa!",
      author: "Ricardo Amaral",
      role: "Proprietário",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      company: "Arquiteta Barbel",
      text: "Sobre a consultoria, achei jóia. Você tira dúvidas, dá ideias. Muito boa. Gostei! Me sinto mais segura para investir em anúncios agora.",
      author: "Ana Barbel",
      role: "Arquiteta",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      company: "Panificadora Central",
      text: "Agora os clientes encontram a padaria no Google. Uma cliente até perguntou se atendia porque viu no Google. O movimento aumentou consideravelmente.",
      author: "João Silva",
      role: "Gerente",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Rotação Automática
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5 segundos

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="O QUE NOSSOS CLIENTES DIZEM" 
          subtitle="Histórias reais de quem confiou na Volk." 
        />

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Carousel Area */}
          <div className="min-h-[300px] md:min-h-[250px] relative">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-lg relative"
              >
                <Quote className="absolute top-8 right-8 text-amber-200/50 w-16 h-16 transform rotate-12" />
                
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                  {/* Author Image */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber-500 rounded-full blur opacity-40"></div>
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].author} 
                        className="w-24 h-24 rounded-full object-cover ring-4 ring-white relative z-10"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center md:text-left flex-1">
                    <div className="flex justify-center md:justify-start text-amber-500 mb-4 gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>

                    <p className="text-xl md:text-2xl text-slate-700 italic font-medium leading-relaxed mb-6">
                      "{testimonials[currentIndex].text}"
                    </p>

                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{testimonials[currentIndex].company}</h4>
                      <p className="text-slate-500">
                        {testimonials[currentIndex].author} • <span className="text-amber-600 font-medium">{testimonials[currentIndex].role}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Depoimento Anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-amber-500' : 'w-2.5 bg-slate-200 hover:bg-amber-200'
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Próximo Depoimento"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};