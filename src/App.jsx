import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Landing from './pages/Landing';
import SelfDeclaration from './pages/SelfDeclaration';
import CandidateDashboard from './pages/CandidateDashboard';
import AssessorDashboard from './pages/AssessorDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const isAssessor = location.pathname === '/assessor';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing />} />
            <Route path="/self-declaration" element={<SelfDeclaration />} />
            <Route path="/candidate" element={<CandidateDashboard />} />
            <Route path="/assessor" element={<AssessorDashboard />} />
          </Routes>
        </AnimatePresence>
      </main>
      {!isAssessor && <Footer />}
    </div>
  );
}

export default App;
