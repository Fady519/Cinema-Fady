import { HashRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';

// عملنا Component داخلي عشان نقدر نستخدم useLocation جوا الـ Router
function AppContent() {
  const location = useLocation();
  
  // بنحدد المسارات اللي مش عايزين النافبار تظهر فيها
  const hideNavbarPaths = ['/', '/signin', '/signup'];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname.toLowerCase());

  return (
    <div className="min-h-screen bg-cinema-black text-white">
      {/* مش هتظهر لو إحنا في صفحة الساين إن أو الساين أب */}
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