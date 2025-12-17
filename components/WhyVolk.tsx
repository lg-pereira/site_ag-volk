import React from 'react';
import { SectionTitle } from './SectionTitle';
import { MapPin, MessageSquare, Clock, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const WhyVolk: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <MapPin className="w-6 h-6 text-amber-600" />,
      title: "Dominar o mercado na sua região",
      description: "Seja a marca mais conhecida da sua cidade com campanhas altamente direcionadas.",
      path: "/google-ads"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-amber-600" />,
      title: "Atendimento impecável",
      description: "Seu funcionário de IA — o secretário perfeito! Faz o filtro inicial 24/7, coleta informações e organiza tudo.",
      path: "/funcionario-ia"
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      title: "Mais clientes em menos tempo",
      description: "Aumente seu faturamento investindo no tipo certo de anúncio para seu público comprador.",
      path: "/tracking-avancado"
    },
    {
      icon: <Filter className="w-6 h-6 text-amber-600" />,
      title: "Funil de venda simples",
      description: "Use o poder do Instagram e do WhatsApp para criar um funil direto, descomplicado e extremamente eficaz.",
      path: "/funil-vendas"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="POR QUE A VOLK?" 
          subtitle="Foco total no que realmente importa para o seu negócio." 
        />

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6 items-start p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center border border-amber-200">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 mb-3 leading-relaxed">{benefit.description}</p>
                <button 
                  onClick={() => navigate(benefit.path)}
                  className="text-amber-600 font-semibold text-sm hover:text-amber-700 inline-flex items-center group cursor-pointer"
                >
                  Saiba mais 
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};