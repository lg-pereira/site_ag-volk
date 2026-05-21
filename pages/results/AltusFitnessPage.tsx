import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { DollarSign, Award, TrendingUp, Users, ArrowUp } from 'lucide-react';

const data = [
  { name: 'Jan', fat: 27277 },
  { name: 'Fev', fat: 31920 },
  { name: 'Mar', fat: 47484 },
];

const timelineData = [
  { date: 'Janeiro 2026', status: 'Início', value: 'R$ 27.277,00', desc: 'Foco inicial em testes de criativos.', dot: 'bg-blue-500' },
  { date: 'Fevereiro 2026', status: 'Tração', value: 'R$ 31.920,00', desc: 'Investimento focado na expansão.', dot: 'bg-blue-400' },
  { date: 'Março 2026', status: 'Melhor Mês', value: 'R$ 47.484,40', desc: 'Pico de conversão e faturamento.', dot: 'bg-green-500', special: true },
];

export const AltusFitnessPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-12 pb-20">                
        <header className="text-center space-y-4">
          <h1 className="text-xs font-black text-amber-600 uppercase tracking-widest">
            RESULTADOS OBTIDOS ECOMMERCE FITNESS 
          </h1>
          <p className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Primeiro trimestre de 2026 - <span className="italic text-amber-600">Ramo Fitness</span>
          </p>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            Analisamos detalhadamente a performance de tráfego pago (Meta Ads) e o impacto direto nas vendas.
          </p>
        </header>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'FATURAMENTO Q1', value: 'R$ 106.681', icon: DollarSign },
            { label: 'INVESTIMENTO ADS', value: 'R$ 4.113', icon: Award },
            { label: 'ROAS CONSOLIDADO', value: '25.9x', icon: TrendingUp },
            { label: 'CONVERSAS', value: '323', icon: Users },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg shadow-slate-100">
                <item.icon className="w-5 h-5 mb-3 text-amber-600" />
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-wider">{item.label}</p>
                <h3 className="text-sm md:text-2xl font-black text-slate-900">{item.value}</h3>
            </div>
          ))}
        </section>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-100">
          <h3 className="text-lg font-bold mb-6">Crescimento de Faturamento Mensal</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="fat" stroke="#d97706" strokeWidth={4} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <section className="space-y-8">
            <h2 className="text-2xl font-extrabold text-center text-slate-800 mb-12">Linha do Tempo Q1 2026</h2>
            <div className="relative space-y-12 py-10">
                <div className="hidden md:block absolute left-1/2 w-0.5 h-full bg-slate-200 -translate-x-1/2 top-0"></div>
                {timelineData.map((item, i) => (
                  <div key={i} className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                      <div className={`absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full border-4 border-white ${item.dot} ${item.special ? 'shadow-[0_0_15px_rgba(234,88,12,0.5)]' : ''} -translate-x-1/2 z-10`}></div>
                      <div className={`md:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ${item.special ? '!bg-amber-600 !text-white !border-amber-700' : ''}`}>
                          <div className="flex justify-between items-start mb-2">
                              <span className={`text-xs font-black uppercase ${item.special ? 'text-amber-200' : 'text-slate-400'}`}>{item.date}</span>
                              <span className={`text-xs font-bold ${item.special ? 'text-white' : 'text-amber-600'}`}>{item.status}</span>
                          </div>
                          <p className="text-xl font-bold">{item.value}</p>
                          <p className={`text-xs mt-1 ${item.special ? 'text-amber-100' : 'text-slate-500'}`}>{item.desc}</p>
                      </div>
                  </div>
              ))}
            </div>
        </section>
      </div>
    </div>
  );
};
