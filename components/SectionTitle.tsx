import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center', light = false }) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = light ? 'text-white' : 'text-slate-900';
  const subtitleColor = light ? 'text-slate-300' : 'text-slate-600';
  const barColor = light ? 'bg-amber-500' : 'bg-amber-500';

  return (
    <div className={`mb-16 max-w-3xl ${alignment}`}>
      <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight mb-4 ${titleColor}`}>
        {title}
      </h2>
      <div className={`h-1.5 w-24 rounded-full ${barColor} mb-6 ${align === 'center' ? 'mx-auto' : ''}`}></div>
      {subtitle && (
        <p className={`text-lg md:text-xl ${subtitleColor} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};