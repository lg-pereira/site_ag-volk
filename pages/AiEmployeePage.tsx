import React, { useEffect } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { MessageSquare, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLeadModal } from '../context/LeadModalContext';

export const AiEmployeePage: React.FC = () => {
  const { openModal } = useLeadModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="max-w-4xl mx-auto mb-16">
          <SectionTitle 
            title="SEU FUNCIONÁRIO DE INTELIGÊNCIA ARTIFICIAL" 
            subtitle="Atendimento impecável 24 horas por dia, 7 dias por semana." 
            align="left" 
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Visual Representation */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden order-2 lg:order-1">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-[80px] opacity-20"></div>
            
            <div className="space-y-4 font-mono text-sm relative z-10">
              <div className="bg-slate-800 p-3 rounded-tr-xl rounded-tl-xl rounded-br-xl w-3/4 animate-pulse">
                <p className="text-slate-300 text-xs mb-1">Cliente • 23:14</p>
                <p>Olá, gostaria de saber o valor do serviço...</p>
              </div>
              <div className="bg-amber-600 p-3 rounded-tr-xl rounded-tl-xl rounded-bl-xl w-3/4 ml-auto text-white shadow-lg">
                <p className="text-amber-100 text-xs mb-1">IA Volk • 23:14</p>
                <p>Olá! Tudo bem? Claro, para te passar o orçamento exato, preciso saber: qual o tamanho da área que você deseja reformar?</p>
              </div>
              <div className="bg-slate-800 p-3 rounded-tr-xl rounded-tl-xl rounded-br-xl w-3/4">
                <p className="text-slate-300 text-xs mb-1">Cliente • 23:15</p>
                <p>São aproximadamente 50m².</p>
              </div>
              <div className="bg-amber-600 p-3 rounded-tr-xl rounded-tl-xl rounded-bl-xl w-3/4 ml-auto text-white shadow-lg">
                <p className="text-amber-100 text-xs mb-1">IA Volk • 23:15</p>
                <p>Perfeito! Para 50m², temos um pacote especial. Gostaria de agendar uma visita técnica gratuita para amanhã?</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-700 text-center">
              <p className="text-amber-400 font-bold flex items-center justify-center gap-2">
                <Clock size={16} /> Respondendo em tempo real
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Pare de perder vendas porque demorou para responder.</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Sabemos que você não pode ficar no WhatsApp o tempo todo. Mas o seu cliente quer resposta <strong>agora</strong>. Se você demora 1 hora para responder, ele já fechou com o concorrente.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nosso <strong>Funcionário de IA</strong> é treinado especificamente para o seu negócio. Ele age como um secretário perfeito: cordial, eficiente e focado em vendas.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <MessageSquare className="text-amber-500 w-8 h-8 mb-3" />
                <h4 className="font-bold text-slate-900 mb-1">Filtro de Curiosos</h4>
                <p className="text-sm text-slate-600">A IA qualifica o lead. Só chega para você quem realmente tem potencial de compra.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <ShieldCheck className="text-amber-500 w-8 h-8 mb-3" />
                <h4 className="font-bold text-slate-900 mb-1">Consistência</h4>
                <p className="text-sm text-slate-600">Trata todo cliente com excelência, sem dias ruins, sem esquecer de responder.</p>
              </div>
            </div>

            <Button onClick={openModal}>
              Quero automatizar meu atendimento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};