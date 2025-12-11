import React from 'react';
import { Hero } from '../components/Hero';
import { Problem } from '../components/Problem';
import { Features } from '../components/Features';
import { Benefits } from '../components/Benefits';
import { Methodology } from '../components/Methodology';
import { SuccessCases } from '../components/SuccessCases';
import { Testimonials } from '../components/Testimonials';
import { WhyVolk } from '../components/WhyVolk';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Problem />
      <Features />
      <Benefits />
      <Methodology />
      <SuccessCases />
      <Testimonials />
      <WhyVolk />
    </main>
  );
};