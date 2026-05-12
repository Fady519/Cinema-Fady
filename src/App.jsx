import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const AppContent = () => {
  const location = useLocation();
  

  const authRoutes = ['/signin', '/signup', '/'];
  const isAuthPage = authRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">


      {!isAuthPage && <Navbar />}

      <main className="flex-grow">
        <AppRoutes />
      </main>

    
      {!isAuthPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      
      <ScrollToTop /> 
      
      
      <AppContent />
    </Router>
  );
}

export default App;