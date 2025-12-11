import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Button } from './Button';
import { ArrowUpRight } from 'lucide-react';
import { useLeadModal } from '../context/LeadModalContext';

export const SuccessCases: React.FC = () => {
  const { openModal } = useLeadModal();

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle 
          title="CASES DE SUCESSO" 
          subtitle="Resultados reais falam por si. Não prometemos — nós provamos."
          light={true}
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Metric 1 */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl text-center group hover:bg-slate-800 transition-all duration-300">
            <div className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-4 group-hover:scale-105 transition-transform">
              500%
            </div>
            <div className="h-px w-16 bg-slate-600 mx-auto mb-4"></div>
            <p className="text-lg text-slate-300">Meio milhão de faturamento em apenas 60 dias.</p>
          </div>

          {/* Metric 2 */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl text-center group hover:bg-slate-800 transition-all duration-300">
            <div className="text-6xl md:text-7xl font-extrabold text-white mb-4 group-hover:scale-105 transition-transform">
              -83%
            </div>
            <div className="h-px w-16 bg-slate-600 mx-auto mb-4"></div>
            <p className="text-lg text-slate-300">Redução drástica no custo por conversão (CPA).</p>
          </div>

          {/* Metric 3 */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl text-center group hover:bg-slate-800 transition-all duration-300">
            <div className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4 group-hover:scale-105 transition-transform">
              869%
            </div>
            <div className="h-px w-16 bg-slate-600 mx-auto mb-4"></div>
            <p className="text-lg text-slate-300">Crescimento de mais de 8x no alcance no Instagram.</p>
          </div>
        </div>

        <div className="text-center">
          <Button variant="primary" onClick={openModal}>
            Quero esses resultados
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="mt-4 text-sm text-slate-400">Junte-se a empresários que quebraram a estagnação.</p>
        </div>
      </div>
    </section>
  );
};