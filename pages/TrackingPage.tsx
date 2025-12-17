import React, { useEffect } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { BarChart3, PieChart, LineChart, ArrowRight } from 'lucide-react';
import { useLeadModal } from '../context/LeadModalContext';

export const TrackingPage: React.FC = () => {
  const { openModal } = useLeadModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="max-w-4xl mx-auto mb-16">
          <SectionTitle 
            title="TRAQUEAMENTO AVANÇADO DE DADOS" 
            subtitle="Mais clientes em menos tempo, investindo com inteligência." 
            align="left" 
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Chega de "Achismo" no seu Marketing.</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Investir em anúncios sem traqueamento é como dirigir de olhos vendados. Você pode até estar andando, mas não sabe se está indo para o abismo.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Na Agência Volk, implementamos uma <strong>infraestrutura de dados robusta</strong>. Sabemos exatamente qual anúncio trouxe o cliente, qual palavra-chave gerou a venda e quanto custou cada real que entrou no seu caixa.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full h-fit"><BarChart3 className="text-blue-600 w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Google Analytics 4 (GA4)</h4>
                  <p className="text-slate-600">Configuração profissional para entender a jornada completa do usuário no seu site.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                <div className="bg-green-100 p-3 rounded-full h-fit"><LineChart className="text-green-600 w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">API de Conversão</h4>
                  <p className="text-slate-600">Integração "Server-side" com Facebook e Google para burlar bloqueadores de anúncios e iOS14.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                <div className="bg-purple-100 p-3 rounded-full h-fit"><PieChart className="text-purple-600 w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Otimização de ROAS</h4>
                  <p className="text-slate-600">Focamos no Retorno Sobre Investimento. Cortamos o que não dá lucro e escalamos o que vende.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button onClick={openModal}>
                Quero parar de perder dinheiro
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-6 text-center">Dashboard de Performance</h4>
            {/* Abstract Chart UI */}
            <div className="space-y-4">
              <div className="flex items-end gap-2 h-40 justify-center pb-4 border-b border-slate-200">
                <div className="w-8 bg-slate-300 rounded-t h-[30%]"></div>
                <div className="w-8 bg-slate-300 rounded-t h-[45%]"></div>
                <div className="w-8 bg-slate-300 rounded-t h-[40%]"></div>
                <div className="w-8 bg-amber-300 rounded-t h-[60%]"></div>
                <div className="w-8 bg-amber-400 rounded-t h-[75%]"></div>
                <div className="w-8 bg-amber-500 rounded-t h-[90%] shadow-lg shadow-amber-500/30"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="text-xs text-slate-500 uppercase font-bold">Investido</p>
                  <p className="text-xl font-bold text-slate-900">R$ 2.500</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-green-100">
                  <p className="text-xs text-green-600 uppercase font-bold">Retorno</p>
                  <p className="text-xl font-bold text-green-600">R$ 18.350</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};