import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { LeadModalProvider } from './context/LeadModalContext';
import { LeadFormModal } from './components/LeadFormModal';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { GoogleAdsPage } from './pages/GoogleAdsPage';
import { AiEmployeePage } from './pages/AiEmployeePage';
import { TrackingPage } from './pages/TrackingPage';
import { SalesFunnelPage } from './pages/SalesFunnelPage';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      {children}
      <Footer />
      <WhatsAppFloat />
      <LeadFormModal />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LeadModalProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos-uso" element={<TermsOfUse />} />
            
            {/* Novas Rotas */}
            <Route path="/google-ads" element={<GoogleAdsPage />} />
            <Route path="/funcionario-ia" element={<AiEmployeePage />} />
            <Route path="/tracking-avancado" element={<TrackingPage />} />
            <Route path="/funil-vendas" element={<SalesFunnelPage />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </LeadModalProvider>
  );
};

export default App;