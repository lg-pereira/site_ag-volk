import React from 'react';
import { SectionTitle } from './SectionTitle';
import { AlertCircle } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-slate-900/20 z-10"></div>
              <img 
                src="https://picsum.photos/seed/frustrated/800/600" 
                alt="Empresário preocupado com vendas" 
                className="w-full h-full object-cover grayscale-[30%]"
              />
            </div>
            {/* Alert Box */}
            <div className="absolute -bottom-6 -right-6 bg-red-50 p-6 rounded-xl shadow-lg border border-red-100 max-w-xs hidden md:block z-20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-8 h-8 text-red-500 shrink-0" />
                <p className="text-red-900 text-sm font-medium">"Gasto em anúncio e não tenho retorno..."</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Muitos empresários vivem dizendo: <span className="text-red-600">“não consigo vender”</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Você já sentiu que seu Instagram não vende? Ou pior: que você gasta dinheiro em anúncios e o retorno simplesmente não aparece no caixa?
              </p>
              <p className="font-medium text-slate-800 border-l-4 border-amber-500 pl-4">
                Outros nem sabem de onde o cliente vem — o que torna impossível prever vendas e crescer com segurança.
              </p>
              <p>
                A verdade é simples: <strong className="text-slate-900">não existe milagre, mas existe estratégia.</strong> E sem ela, você continua perdendo dinheiro todos os dias.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};