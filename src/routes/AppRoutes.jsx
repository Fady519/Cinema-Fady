import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import Help from '../pages/Help';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import MovieDetail from '../components/MovieDetail';
import Player from '../pages/Player';
import Search from '../pages/Search';
import Account from '../pages/Account';
import MyList from '../pages/MyList';
import NotFound from '../pages/NotFound';

import Movies from '../pages/Movies';
import TVShows from '../pages/TVShows';
import NewAndPopular from '../pages/NewAndPopular';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("userToken") === "true";
  return isAuthenticated ? children : <Navigate to="/signin" />;
};


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      
      
      <Route path="/movies" element={<ProtectedRoute><Movies /></ProtectedRoute>} />
      <Route path="/tv-shows" element={<ProtectedRoute><TVShows /></ProtectedRoute>} />
      <Route path="/latest" element={<ProtectedRoute><NewAndPopular /></ProtectedRoute>} />
      
      <Route path="/search" element={<ProtectedRoute><Search /></ProtectedRoute>} />

     
      <Route path="/movie/:id" element={<ProtectedRoute><MovieDetail /></ProtectedRoute>} />
      <Route path="/tv/:id" element={<ProtectedRoute><MovieDetail /></ProtectedRoute>} />

      <Route path="/watch/:id" element={<ProtectedRoute><Player /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Account /></ProtectedRoute>} />
      <Route path="/help" element={<ProtectedRoute><Help /></ProtectedRoute>} />
      <Route path="/my-list" element={<ProtectedRoute><MyList /></ProtectedRoute>} />
      
      <Route path="/*" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;