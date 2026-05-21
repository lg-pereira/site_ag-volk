import React from 'react';
import { GoldFitnessTimeline } from '../../components/results/GoldFitnessTimeline';
import { GoldFitnessChart } from '../../components/results/GoldFitnessChart';
import { Award, DollarSign, TrendingUp, Users } from 'lucide-react';

export const GoldFitnessPage: React.FC = () => {
  return (
      <div className="min-h-screen bg-slate-50 text-slate-900">

        <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-12">                
            <header className="text-center space-y-4">
              <h1 className="text-xs font-black text-amber-600 uppercase tracking-widest">
                RESULTADOS OBTIDOS ECOMMERCE FITNESS 
              </h1>
              <p className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
                A Escalabilidade de uma <span className="italic text-amber-600">Operação Organizada</span>
              </p>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
                Veja uma análise detalhada da jornada de escala de tráfego pago no Meta Ads integrada ao faturamento real. Como transformamos R$ 14.850 de investimento em mais de R$ 1.1 milhão faturados.
              </p>
            </header>

            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'FATURAMENTO GERADO', value: 'R$ 1.184.250', icon: DollarSign },
                { label: 'INVESTIMENTO ADS', value: 'R$ 14.850', icon: Award },
                { label: 'ROAS CONSOLIDADO', value: '79.7x', icon: TrendingUp },
                { label: 'OPORTUNIDADES', value: '4.312', icon: Users },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg shadow-slate-100">
                    <item.icon className="w-5 h-5 mb-3 text-amber-600" />
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-wider">{item.label}</p>
                    <h3 className="text-sm md:text-2xl font-black text-slate-900">{item.value}</h3>
                </div>
              ))}
            </section>

        <GoldFitnessChart />
        <GoldFitnessTimeline />
      </div>
    </div>
  );
};
