import { HashRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';


function AppContent() {
  const location = useLocation();
  
 
  const hideNavbarPaths = ['/', '/signin', '/signup'];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname.toLowerCase());

  return (
    <div className="min-h-screen bg-cinema-black text-white">
      
      {!shouldHideNavbar && <Navbar />} 
      
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;