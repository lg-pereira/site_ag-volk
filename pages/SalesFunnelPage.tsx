import React, { useEffect } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { Instagram, Smartphone, Filter, ArrowRight } from 'lucide-react';
import { useLeadModal } from '../context/LeadModalContext';

export const SalesFunnelPage: React.FC = () => {
  const { openModal } = useLeadModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="max-w-4xl mx-auto mb-16">
          <SectionTitle 
            title="FUNIL DE VENDAS SIMPLES E DIRETO" 
            subtitle="Não tem site? Não tem problema. Use o poder das redes sociais." 
            align="left" 
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1 relative">
            {/* Visual Funnel Representation */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-2xl w-full max-w-sm mb-4 shadow-lg flex items-center gap-4 transform hover:scale-105 transition-transform duration-300">
                <Instagram size={32} />
                <div>
                  <h4 className="font-bold text-lg">1. Anúncio no Instagram</h4>
                  <p className="text-sm opacity-90">Atração visual e desejo.</p>
                </div>
              </div>
              
              <div className="h-8 w-1 bg-slate-300 mb-4"></div>

              <div className="bg-white border-2 border-slate-100 text-slate-800 p-6 rounded-2xl w-full max-w-sm mb-4 shadow-sm flex items-center gap-4">
                <Filter size={32} className="text-slate-400" />
                <div>
                  <h4 className="font-bold text-lg">2. Filtro Automático</h4>
                  <p className="text-sm text-slate-500">Qualificação rápida.</p>
                </div>
              </div>

              <div className="h-8 w-1 bg-slate-300 mb-4"></div>

              <div className="bg-[#25D366] text-white p-6 rounded-2xl w-full max-w-sm shadow-xl flex items-center gap-4 transform hover:scale-105 transition-transform duration-300">
                <Smartphone size={32} />
                <div>
                  <h4 className="font-bold text-lg">3. Venda no WhatsApp</h4>
                  <p className="text-sm opacity-90">Fechamento direto e pessoal.</p>
                </div>
              </div>
            </div>
            
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-50 rounded-full blur-3xl -z-10"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Descomplique. Venda mais.</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Muitas agências tentam vender sites complexos, landing pages caras e sistemas que você não sabe usar. Nós acreditamos no poder do <strong>simples bem feito</strong>.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Criamos um funil extremamente eficaz que conecta o anúncio no Instagram/Facebook diretamente ao seu WhatsApp. É o caminho mais curto entre o "ver" e o "comprar".
            </p>

            <h4 className="font-bold text-slate-900 text-lg mb-4">Por que funciona?</h4>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-slate-600">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                Menor barreira de entrada para o cliente.
              </li>
              <li className="flex items-center gap-2 text-slate-600">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                Contato humano gera mais confiança.
              </li>
              <li className="flex items-center gap-2 text-slate-600">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                Ideal para prestadores de serviço e delivery.
              </li>
            </ul>

            <Button onClick={openModal}>
              Quero implementar esse funil
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};