import React from 'react';
import { Button } from './Button';
import { Target, Lightbulb, BarChart3 } from 'lucide-react';
import { useLeadModal } from '../context/LeadModalContext';

export const Features: React.FC = () => {
  const { openModal } = useLeadModal();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <div>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-amber-600 uppercase bg-amber-100 rounded-full">
              O QUE FAZEMOS?
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Você faturar alto e vender muito é nossa missão!
            </h2>
            
            <div className="space-y-10 mt-10">
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                  <Target className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">NÃO EXISTE MILAGRE</h3>
                  <p className="text-slate-600 leading-relaxed">
                    O que realmente faz diferença é ter clareza: vamos entender para quem você quer vender, definir o melhor lugar para anunciar e como investir sem desperdiçar seu dinheiro.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                  <Lightbulb className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">NADA DE FÓRMULAS GENÉRICAS</h3>
                  <p className="text-slate-600 leading-relaxed">
                    O que nos move é o simples: olhar para o que torna seu negócio único e usar isso como base. Essa é a diferença entre anunciar por anunciar e ter campanhas que geram resultados tangíveis.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                  <BarChart3 className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">ESTRATÉGIA APLICADA</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Usamos métodos validados para transformar perfis em vitrines que atraem fãs para sua marca. Criamos campanhas pagas personalizadas que serão motores de vendas imparáveis.
                  </p>
                </div>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button variant="primary" onClick={openModal}>Saiba mais</Button>
              <Button variant="outline" onClick={openModal}>Quero esses benefícios</Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative sticky top-24">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl -z-10 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-50"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
              alt="Especialista Volk analisando estratégia" 
              className="rounded-2xl shadow-2xl w-full object-cover h-[600px]"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="font-serif italic text-lg mb-4 text-slate-200">"Não é sobre gastar mais, é sobre investir melhor."</p>
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-8 bg-amber-500"></div>
                <span className="text-sm font-bold text-amber-500 uppercase">Luiz Gustavo</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};