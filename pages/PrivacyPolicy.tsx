import React, { useEffect } from 'react';
import { SectionTitle } from '../components/SectionTitle';

export const PrivacyPolicy: React.FC = () => {
  // Garante que a página abra no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <SectionTitle title="POLÍTICA DE PRIVACIDADE" subtitle="Sua privacidade é nossa prioridade." align="left" />
        
        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">1. Introdução</h3>
            <p>
              A <strong>Agência Volk</strong> ("nós", "nosso") está comprometida em proteger a privacidade e os dados pessoais de seus usuários e clientes. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações ao utilizar nosso site e serviços de gestão de tráfego.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">2. Dados que Coletamos</h3>
            <p className="mb-2">Podemos coletar os seguintes tipos de informações:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Informações Pessoais:</strong> Nome, e-mail, telefone e informações sobre seu negócio quando você preenche nossos formulários de contato ou solicita uma consultoria.</li>
              <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas e tempo de permanência, coletados automaticamente através de cookies e tecnologias semelhantes.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">3. Como Usamos seus Dados</h3>
            <p className="mb-2">Utilizamos suas informações para:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Entrar em contato para agendar consultorias ou responder dúvidas.</li>
              <li>Fornecer e melhorar nossos serviços de gestão de tráfego pago.</li>
              <li>Enviar comunicações de marketing, newsletters ou ofertas que acreditamos ser do seu interesse (você pode optar por não receber a qualquer momento).</li>
              <li>Personalizar sua experiência no site através de remarketing (Google Ads, Meta Ads).</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">4. Cookies e Tecnologias de Rastreamento</h3>
            <p>
              Utilizamos cookies para analisar o tráfego do site e melhorar a performance de nossas campanhas publicitárias. Ao continuar navegando em nosso site, você concorda com o uso de cookies. Você pode gerenciar as preferências de cookies diretamente nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">5. Compartilhamento de Dados</h3>
            <p>
              Não vendemos, alugamos ou comercializamos suas informações pessoais. Podemos compartilhar dados apenas com:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Prestadores de serviços terceirizados que nos ajudam a operar o site (ex: plataformas de e-mail marketing).</li>
              <li>Autoridades legais, se exigido por lei.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">6. Seus Direitos (LGPD)</h3>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais armazenados por nós. Para exercer esses direitos, entre em contato através do e-mail fornecido abaixo.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">7. Contato</h3>
            <p>
              Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:<br />
              <strong>E-mail:</strong> atendimento@consultorluizg.com.br
            </p>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};