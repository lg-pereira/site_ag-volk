import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { useLeadModal } from '../context/LeadModalContext';

export const Hero: React.FC = () => {
  const { openModal } = useLeadModal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-24 pb-24 md:pt-36 md:pb-32">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-6 border border-amber-200">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
              </span>
              Gestão de Tráfego Especializada
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Pare agora mesmo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">PERDER DINHEIRO</span>: transforme cliques em VENDAS agora!
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              Na Agência Volk, criamos campanhas que trabalham para você: estratégia clara, anúncios inteligentes e resultados que aparecem no caixa — sem mistério, sem esqueminhas e sem promessas vazias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button onClick={openModal}>
                Quero conhecer
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" onClick={openModal}>
                Saiba mais
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply z-10"></div>
              {/* Using a professional business portrait */}
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                alt="Gestor de Tráfego Luiz Gustavo" 
                className="w-full h-auto object-cover md:max-h-[600px]"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Faturamento Gerado</p>
                  <p className="text-xl md:text-2xl font-bold text-slate-900">R$ 500k+</p>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-900/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};