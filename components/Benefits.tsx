import React from 'react';
import { TrendingUp, MessageSquare, Percent } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-amber-600" />,
      title: "RESULTADO RÁPIDO E PREVISÍVEL",
      description: "Campanhas criadas de forma estratégica para gerar clientes diariamente — sem achismos.",
      subtext: "Gráfico subindo + mapa da região",
      color: "bg-blue-50"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-amber-600" />,
      title: "MENOS TRABALHO, MAIS VENDAS",
      description: "Seu atendimento automático com IA responde leads 24h, qualifica e encaminha vendas sem você precisar estar no celular.",
      subtext: "Atendimento automático",
      color: "bg-amber-50"
    },
    {
      icon: <Percent className="w-8 h-8 text-amber-600" />,
      title: "INVESTIMENTO QUE RETORNA",
      description: "Estratégias personalizadas reduzem o custo por cliente e aumentam seu faturamento real.",
      subtext: "ROI Otimizado",
      color: "bg-slate-50"
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle title="3 BENEFÍCIOS PRINCIPAIS" align="center" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`p-8 rounded-2xl ${benefit.color} border border-slate-100 hover:shadow-lg transition-all duration-300 group`}>
              <div className="bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-4 uppercase tracking-wide">
                {benefit.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};