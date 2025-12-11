import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5547991038285" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center hover:shadow-[#25D366]/40 border-2 border-white"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} className="text-white fill-current" />
    </a>
  );
};