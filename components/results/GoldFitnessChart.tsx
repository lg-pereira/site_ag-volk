import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Mai', fat: 185000 },
  { name: 'Jun', fat: 154000 },
  { name: 'Jul', fat: 192000 },
  { name: 'Ago', fat: 215000 },
  { name: 'Set', fat: 248000 },
  { name: 'Out', fat: 190250 },
];

export const GoldFitnessChart: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-bold mb-6">Escalabilidade Mensal (Faturamento)</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="fat" stroke="#d97706" strokeWidth={4} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
