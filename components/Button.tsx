import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-300 transform rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1 shadow-lg";
  
  const variants = {
    primary: "bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/30 focus:ring-amber-500",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/30 focus:ring-slate-900",
    outline: "bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-50 focus:ring-slate-500",
    dark: "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
  };

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};