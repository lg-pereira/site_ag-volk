import React, { useState } from 'react';
import { X, MessageCircle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLeadModal } from '../context/LeadModalContext';

export const LeadFormModal: React.FC = () => {
  const { isModalOpen, closeModal } = useLeadModal();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const message = `Olá! Me chamo ${formData.firstName} ${formData.lastName}.
Email: ${formData.email}
Telefone: ${formData.phone}
    
Gostaria de solicitar uma consultoria de tráfego.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5547991038285?text=${encodedMessage}`;
    
    // Close modal and open WhatsApp
    closeModal();
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[9998]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[90%] max-w-lg h-fit max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl z-[9999] p-6 md:p-8 border border-slate-100"
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors p-1"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Vamos Alavancar suas Vendas?</h3>
              <p className="text-slate-600">
                Preencha seus dados abaixo para iniciar seu atendimento personalizado no WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                  <input
                    required
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Sobrenome</label>
                  <input
                    required
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="Seu sobrenome"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefone com DDD</label>
                <input
                  required
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail Corporativo</label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#1ebc57] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mt-4"
              >
                <span className="text-lg">Continuar no WhatsApp</span>
                <Send size={20} />
              </button>
              
              <p className="text-xs text-center text-slate-400 mt-4">
                Ao continuar, você concorda em receber nosso contato comercial.
              </p>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};