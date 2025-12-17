import React, { useEffect } from 'react';
import { SectionTitle } from '../components/SectionTitle';

export const TermsOfUse: React.FC = () => {
  // Garante que a página abra no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <SectionTitle title="TERMOS DE USO" subtitle="Regras e condições para utilização do nosso site." align="left" />
        
        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">1. Aceitação dos Termos</h3>
            <p>
              Ao acessar e utilizar o site da <strong>Agência Volk</strong>, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site ou serviços.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">2. Serviços Oferecidos</h3>
            <p>
              A Agência Volk oferece serviços de consultoria em marketing digital e gestão de tráfego pago. O conteúdo deste site é para fins informativos e promocionais sobre estes serviços. A contratação efetiva dos serviços será regida por um contrato de prestação de serviços específico, acordado separadamente entre as partes.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">3. Propriedade Intelectual</h3>
            <p>
              Todo o conteúdo presente neste site, incluindo textos, gráficos, logotipos, ícones, imagens e software, é propriedade exclusiva da Agência Volk ou de seus licenciadores e está protegido pelas leis de direitos autorais e propriedade intelectual do Brasil. É proibida a reprodução, distribuição ou modificação do conteúdo sem autorização prévia por escrito.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">4. Uso Permitido</h3>
            <p>
              Você concorda em utilizar nosso site apenas para fins legais e de maneira que não infrinja os direitos de terceiros ou restrinja o uso e aproveitamento do site por qualquer outra pessoa. Comportamentos proibidos incluem assediar ou causar desconforto a qualquer usuário, transmitir conteúdo obsceno ou ofensivo.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">5. Limitação de Responsabilidade</h3>
            <p className="mb-4">
              A Agência Volk envida seus melhores esforços para manter as informações do site precisas e atualizadas. No entanto:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Não garantimos que o site estará disponível ininterruptamente ou livre de erros.</li>
              <li>Os resultados de campanhas de tráfego pago podem variar de acordo com o nicho de mercado, investimento e outros fatores externos. Cases de sucesso apresentados são exemplos reais, mas não garantem resultados futuros idênticos.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">6. Links para Terceiros</h3>
            <p>
              Nosso site pode conter links para sites de terceiros (como redes sociais). Não possuímos controle sobre o conteúdo ou práticas de privacidade desses sites e não assumimos responsabilidade por eles.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">7. Alterações nos Termos</h3>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. O uso continuado do site após as alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">8. Lei Aplicável</h3>
            <p>
              Estes termos são regidos e interpretados de acordo com as leis da República Federativa do Brasil. Fica eleito o foro da comarca da sede da empresa para dirimir quaisquer litígios oriundos destes termos.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};