import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { LeadModalProvider } from './context/LeadModalContext';
import { LeadFormModal } from './components/LeadFormModal';
import { Home } from './pages/Home';

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
            {/* Novas rotas podem ser adicionadas aqui */}
          </Routes>
        </Layout>
      </Router>
    </LeadModalProvider>
  );
};

export default App;