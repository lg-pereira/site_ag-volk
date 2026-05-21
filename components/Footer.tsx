import React from 'react';
import { Button } from './Button';
import { CalendarCheck, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { useLeadModal } from '../context/LeadModalContext';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { openModal } = useLeadModal();

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      
      {/* Final CTA Section */}
      <div className="bg-gradient-to-br from-amber-500 to-amber-600 py-24 px-4 relative overflow-hidden">
         {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md leading-tight">
            PRONTO PARA COMEÇAR A VENDER PRA VALER?
          </h2>
          <p className="text-xl text-amber-50 font-medium mb-12 max-w-2xl mx-auto">
            Enquanto você se decide, seus concorrentes já estão anunciando — e vendendo muito.
          </p>
          <Button 
            variant="dark" 
            onClick={openModal}
            className="text-lg px-12 py-5 bg-slate-900 text-white hover:bg-slate-800 shadow-2xl transform hover:scale-105 ring-4 ring-amber-400/30"
          >
            Agendar consultoria
            <CalendarCheck className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Footer Info Section */}
      <div className="pt-20 pb-10 bg-slate-900">
        <div className="container mx-auto px-4 md:px-8 grid gap-8 md:grid-cols-[2fr_1fr_1.5fr] md:gap-12 mb-10">
          
          {/* Branding Column */}
          <div className="flex flex-col pr-0 md:pr-5">
            <Link to="/" className="block mb-4 no-underline">
              <p className="font-extrabold text-2xl text-white m-0 tracking-tighter">AGÊNCIA <span className="text-amber-500">VOLK</span></p>
            </Link>
            
            <p className="text-sm leading-relaxed mb-6 text-slate-400 max-w-sm">
              Consultoria de Marketing Digital e Gestão de Tráfego Pago focada em resultados reais para o seu negócio local e e-commerce.
            </p>

            <div className="text-xs space-y-1 text-slate-500">
              <p>CNPJ: 35.567.389/0001-45</p>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col">
            <h3 className="font-bold text-white uppercase text-base mb-6 tracking-wide border-l-2 border-amber-500 pl-3">
              Navegação Rápida
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 text-sm hover:text-amber-500 transition-colors block">Home</Link></li>
              <li><Link to="/servicos" className="text-slate-400 text-sm hover:text-amber-500 transition-colors block">Serviços</Link></li>
              <li><Link to="/metodo" className="text-slate-400 text-sm hover:text-amber-500 transition-colors block">O Método</Link></li>
              <li><Link to="/resultados" className="text-slate-400 text-sm hover:text-amber-500 transition-colors block">Portfólio</Link></li>
              <li><Link to="/politica-privacidade" className="text-slate-400 text-sm hover:text-amber-500 transition-colors block">Política de Privacidade</Link></li>
              <li><Link to="/termos-uso" className="text-slate-400 text-sm hover:text-amber-500 transition-colors block">Termos de Uso</Link></li>
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="flex flex-col" id="contato">
            <h3 className="font-bold text-white uppercase text-base mb-6 tracking-wide border-l-2 border-amber-500 pl-3">
              Fale com Luiz Gustavo
            </h3>

            <div className="flex items-center gap-3 mb-4 group">
              <span className="text-amber-500 bg-amber-500/10 p-2 rounded-lg group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors"><Phone size={18} /></span>
              <a href="tel:+5547991038285" className="text-slate-400 text-sm hover:text-amber-500 transition-colors font-medium">(47) 99103-8285</a>
            </div>
            
            <div className="flex items-center gap-3 mb-6 group">
              <span className="text-amber-500 bg-amber-500/10 p-2 rounded-lg group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors"><Mail size={18} /></span>
              <a href="mailto:atendimento@consultorluizg.com.br" className="text-slate-400 text-sm hover:text-amber-500 transition-colors break-all font-medium">atendimento@consultorluizg.com.br</a>
            </div>

            <h3 className="font-bold text-white uppercase text-xs mb-4 text-slate-500">
              Siga-nos
            </h3>
            <div className="flex gap-4" role="group" aria-label="Links para Redes Sociais">
              <a 
                href="https://wa.me/5547991038285" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:bg-green-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="WhatsApp da Agência Volk"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="https://instagram.com/consultorluizg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:bg-pink-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram da Agência Volk"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/consultorluizg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook da Agência Volk"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 border-t border-slate-800 pt-8 text-center">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Consultor Luiz Gustavo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};