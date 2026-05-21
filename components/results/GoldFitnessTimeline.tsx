import React from 'react';

const timelineData = [
    { date: 'Maio 2025', status: 'O Início', value: 'R$ 185.000', desc: 'Lançamento campanha [START]', dot: 'bg-slate-300' },
    { date: 'Junho 2025', status: 'Tração', value: 'R$ 154.000', desc: 'Atração de novas oportunidades', dot: 'bg-orange-400' },
    { date: 'Julho 2025', status: 'Escala', value: 'R$ 192.000', desc: 'Início operação unificada', dot: 'bg-orange-500' },
    { date: 'Agosto 2025', status: 'Autoridade', value: 'R$ 215.000', desc: 'Otimização de públicos', dot: 'bg-orange-500' },
    { date: 'Setembro 2025', status: 'Recorde', value: 'R$ 248.000', desc: 'Pico de faturamento', dot: 'bg-orange-600', special: true },
];

export const GoldFitnessTimeline: React.FC = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-extrabold text-center text-slate-800 mb-12">A Linha da Evolução</h2>
      
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
  );
};
