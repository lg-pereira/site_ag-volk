import React from 'react';
import { motion } from 'framer-motion';
import { Target, Bot, BarChart3, Check } from 'lucide-react';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

const SERVICES: ServiceItem[] = [
  {
    icon: <Target className="w-8 h-8 text-slate-900" />,
    title: 'Gestão de Anúncios',
    description: 'Campanhas de alta performance no Google, Meta (Instagram/Facebook) e TikTok. Buscamos compradores qualificados, não apenas curiosos.',
    features: ['Segmentação de Público', 'Remarketing Estratégico', 'Otimização de ROAS'],
  },
  {
    icon: <Bot className="w-8 h-8 text-slate-900" />,
    title: 'Automação com IA',
    description: 'Atenda, qualifique e recupere clientes 24h por dia. Transforme conversas em vendas sem sobrecarregar sua equipe humana.',
    features: ['Chatbots de Vendas', 'Qualificação de Leads', 'Recuperação de Carrinho'],
    recommended: true,
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-slate-900" />,
    title: 'Traqueamento Avançado',
    description: 'O fim do "achismo". Configuramos uma infraestrutura de dados robusta para rastrear cada centavo investido.',
    features: ['API de Conversões', 'Google Analytics 4 (GA4)', 'Dashboards em Tempo Real'],
  },
];

export const Methodology: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-extrabold text-3xl md:text-5xl text-slate-900 mb-6"
          >
            O Ecossistema de Performance
          </motion.h2>
          <motion.div 
            initial={{ scale: 0 }} 
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="h-1.5 w-24 rounded-full bg-amber-500 mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Três pilares tecnológicos integrados para garantir que seu negócio venda todos os dias.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group ${
                service.recommended 
                  ? 'border-amber-500 border-t-4 bg-amber-50/30 shadow-lg ring-1 ring-amber-100' 
                  : 'border-slate-100 border-t-4 border-t-transparent hover:border-t-amber-500'
              }`}
            >
              {service.recommended && (
                <span className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Recomendado
                </span>
              )}

              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors duration-300 border border-slate-100">
                {service.icon}
              </div>

              <h3 className="font-bold text-xl text-slate-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                {service.description}
              </p>

              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <div className="mt-0.5 rounded-full bg-amber-100 p-0.5">
                      <Check size={14} className="text-amber-600 flex-shrink-0" strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};