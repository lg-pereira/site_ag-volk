import React from 'react';
import { Link } from 'react-router-dom';

import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Zap, TrendingUp, BarChart3 } from 'lucide-react';

const PROJECTS = [
  {
    id: 'irmaos-frainer',
    title: 'Irmãos Frainer',
    category: 'Ecommerce Esquadrias',
    description: 'De R$ 39k para R$ 300k mensais: escala de 750% em 6 meses com ROI ultra-eficiente.',
    link: '/resultados/irmaos-frainer'
  },
  {
    id: 'gold-fitness',
    title: 'Gold Fitness',
    category: 'Ecommerce Fitness',
    description: 'Faturamento de R$ 1.1M em 6 meses com um ROAS impressionante de 79.7x.',
    link: '/resultados/gold-fitness'
  },
  {
    id: 'altus-fitness',
    title: 'Altus Fitness',
    category: 'Ecommerce Fitness',
    description: 'R$ 106k faturados no Q1 2026 com rentabilidade média de 25.9x.',
    link: '/resultados/altus-fitness'
  }
];

const METHODOLOGY = [
  { icon: Target, title: 'Segmentação Cirúrgica', description: 'Atraímos leads qualificados, reduzindo o custo por aquisição e aumentando a taxa de conversão.' },
  { icon: Zap, title: 'Escala Rápida', description: 'Identificamos as campanhas vencedoras e aceleramos o investimento para maximizar o lucro em dias.' },
  { icon: TrendingUp, title: 'Otimização Contínua', description: 'Ajustes diários baseados em dados reais para manter o ROI sempre no topo.' },
  { icon: BarChart3, title: 'Relatórios Transparentes', description: 'Você acompanha cada centavo investido e cada venda gerada com dados auditados.' }
];

export const ResultsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* HERO/ATTENTION & INTEREST */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Transformando cliques em <span className="text-amber-600">Lucro Real</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Nossa metodologia utiliza inteligência de dados, automação avançada e testes constantes para otimizar campanhas e gerar resultados mensuráveis. De negócios locais a gigantes do e-commerce, atingimos resultados extraordinários em tempo recorde através de tráfego pago inteligente.
          </p>
        </div>
        
        {/* METHODOLOGY/DESIRE */}
        <section className="mb-20">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10 tracking-tight">Nosso Método para Resultados Ultra-Específicos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200">
                <item.icon className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS/DESIRE */}
        <section className="mb-20">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10 tracking-tight">Cases que Comprovam Nossa Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <Link 
                key={project.id} 
                to={project.link} 
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-3">{project.category}</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h2>
                <p className="text-slate-600 mb-6 group-hover:text-slate-800">{project.description}</p>
                <span className="inline-flex items-center text-amber-600 font-bold group-hover:underline">Ver Case completo</span>
              </Link>
            ))}
          </div>
        </section>
        
        {/* ACTION */}
        <div className="bg-slate-900 rounded-3xl p-10 text-center text-white">
          <h3 className="text-3xl font-extrabold mb-4">Pronto para escalar seus resultados hoje?</h3>
          <p className="text-slate-400 text-xl mb-8 max-w-2xl mx-auto">Agende uma consultoria estratégica e vamos desenhar o plano de crescimento ideal para o seu negócio.</p>
          <a href="#contato" className="inline-block bg-amber-500 text-slate-900 font-bold text-lg px-10 py-5 rounded-full hover:bg-amber-400 transition-colors shadow-lg">Falar com Luiz Gustavo agora</a>
        </div>
      </div>
    </div>
  );
};
