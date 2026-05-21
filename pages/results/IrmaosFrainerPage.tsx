import React from 'react';

export const IrmaosFrainerPage: React.FC = () => {
  return (
    <div className="font-jakarta py-10 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12 px-6">
        {/* HEADER */}
        <header className="text-center space-y-4 pt-12">
          <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold tracking-widest uppercase">
            Análise de Performance Semestral
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            A Jornada para <span className="bg-gradient-to-br from-amber-600 to-orange-600 bg-clip-text text-transparent">500 mil em 30 dias</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A evolução de uma operação que escalou 750% em 6 meses (Outubro/2025 a Abril/2026).
          </p>
        </header>

        {/* DASHBOARD CONSOLIDADO */}
        <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Faturamento Total Semestre</h2>
              <div className="text-5xl md:text-6xl font-black mb-4">R$ 1.289.678</div>
              <p className="text-slate-400 leading-relaxed">
                Em 6 meses, saímos de uma operação iniciante para uma potência no e-commerce. 
                A eficiência no tráfego pago e nas redes sociais permitiu um crescimento com margem, mantendo o ticket médio em <span className="text-white font-bold">R$ 3.248</span>.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Vendas', value: '397' },
                { label: 'Visitas', value: '60.2k' },
                { label: 'Conv. Carrinho', value: '19.4%' },
                { label: 'Ticket Médio', value: 'R$ 3.2k' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <p className="text-orange-500 text-xs font-bold uppercase mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LINHA DO TEMPO */}
        <section className="space-y-8">
            <h2 className="text-2xl font-extrabold text-center text-slate-800 mb-12">A Linha da Evolução</h2>
            
            <div className="relative space-y-12 py-10">
                {/* Timeline base line */}
                <div className="hidden md:block absolute left-1/2 w-0.5 h-full bg-slate-200 -translate-x-1/2 top-0"></div>

                {[
                    { date: 'Outubro 2025', status: 'O Início', value: 'R$ 39.532', desc: '14 Vendas | Primeiros testes de público.', dot: 'bg-slate-300' },
                    { date: 'Novembro 2025', status: '+270% 🚀', value: 'R$ 146.448', desc: '47 Vendas | Escala inicial e Black Friday.', dot: 'bg-orange-400' },
                    { date: 'Janeiro 2026', status: 'Novo Patamar', value: 'R$ 246.242', desc: '64 Vendas | Consolidação Estratégica.', dot: 'bg-orange-500' },
                    { date: 'Abril 2026', status: 'RECORDE', value: 'R$ 296.831', desc: '82 Vendas | Máxima eficiência.', dot: 'bg-orange-600', special: true },
                ].map((item, i) => (
                    <div key={i} className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        <div className={`absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full border-4 border-white ${item.dot} ${item.special ? 'shadow-[0_0_15px_rgba(234,88,12,0.5)]' : ''} -translate-x-1/2 z-10`}></div>
                        <div className={`md:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ${item.special ? '!bg-orange-600 !text-white !border-orange-700' : ''}`}>
                            <div className="flex justify-between items-start mb-2">
                                <span className={`text-xs font-black uppercase ${item.special ? 'text-orange-200' : 'text-slate-400'}`}>{item.date}</span>
                                <span className={`text-xs font-bold ${item.special ? 'text-white' : 'text-orange-600'}`}>{item.status}</span>
                            </div>
                            <p className="text-xl font-bold">{item.value}</p>
                            <p className={`text-xs mt-1 ${item.special ? 'text-orange-100' : 'text-slate-500'}`}>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* RODAPÉ */}
        <footer className="text-center py-10 space-y-2">
            <p className="font-bold text-slate-800">Gestão de Marketing e Performance</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest italic">A Irmãos Frainer não é só mais uma loja, é uma referência no mercado de Esquadrias.</p>
            <p className="text-[10px] text-slate-300 mt-4">Dados processados em Maio de 2026</p>
        </footer>
      </div>
    </div>
  );
};
