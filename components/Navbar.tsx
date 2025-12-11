import React from 'react';
import { useLeadModal } from '../context/LeadModalContext';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const { openModal } = useLeadModal();
  
  return (
    <nav className="absolute w-full z-50 top-0 left-0 py-6">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black text-slate-900 tracking-tighter hover:opacity-80 transition-opacity">
          VOLK<span className="text-amber-500">.</span>
        </Link>
        <button 
          onClick={openModal}
          className="hidden md:block bg-white/10 backdrop-blur-md border border-slate-200/50 text-slate-900 font-semibold px-6 py-2 rounded-full hover:bg-white hover:shadow-md transition-all text-sm"
        >
          Fale Conosco
        </button>
      </div>
    </nav>
  );
};