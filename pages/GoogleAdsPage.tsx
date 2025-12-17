import React, { useEffect } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { MapPin, Search, ArrowRight, Target } from 'lucide-react';
import { useLeadModal } from '../context/LeadModalContext';

export const GoogleAdsPage: React.FC = () => {
  const { openModal } = useLeadModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <SectionTitle 
            title="DOMINE O MERCADO NA SUA REGIÃO" 
            subtitle="Apareça exatamente quando o seu cliente estiver procurando pelo seu serviço." 
            align="left" 
          />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Você precisa ser a primeira opção.</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Quando alguém precisa de um serviço urgente ou específico, o primeiro lugar onde ela vai é o <strong>Google</strong>. Se a sua empresa não estiver lá, no topo, você está entregando dinheiro de bandeja para o seu concorrente.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Na Agência Volk, não fazemos apenas "anúncios". Criamos uma estrutura de <strong>dominação local</strong> para garantir que você seja a autoridade máxima na sua cidade.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="bg-amber-100 p-2 rounded-lg text-amber-600 mt-1"><MapPin size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Google Maps Otimizado</h4>
                  <p className="text-sm text-slate-600">Fichas de negócio que aparecem em destaque no mapa da cidade.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-amber-100 p-2 rounded-lg text-amber-600 mt-1"><Search size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Rede de Pesquisa (Fundo de Funil)</h4>
                  <p className="text-sm text-slate-600">Capturamos o cliente no momento exato da intenção de compra ("comprar agora", "orçamento", "perto de mim").</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-amber-100 p-2 rounded-lg text-amber-600 mt-1"><Target size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Palavras-Chave Negativas</h4>
                  <p className="text-sm text-slate-600">Não gastamos seu dinheiro com curiosos. Filtramos termos ruins para focar apenas em quem compra.</p>
                </div>
              </li>
            </ul>

            <Button onClick={openModal}>
              Quero dominar minha cidade
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-slate-900/20 rounded-2xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Busca no Google em Tablet" 
              className="relative rounded-2xl shadow-2xl w-full object-cover z-10 bg-white"
            />
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Pare de perder cliques para a concorrência</h3>
          <p className="text-slate-600 mb-6">Agende uma análise gratuita da sua presença online hoje mesmo.</p>
          <Button variant="outline" onClick={openModal}>
            Falar com especialista
          </Button>
        </div>
      </div>
    </div>
  );
};