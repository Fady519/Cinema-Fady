import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthInput from '../components/AuthInput';

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();
    setError('');

    
    const registeredEmail = localStorage.getItem("saved_email");
    const registeredPassword = localStorage.getItem("saved_password");
    const registeredName = localStorage.getItem("saved_name");

    
    if (email === registeredEmail && password === registeredPassword) {

      localStorage.setItem("userToken", "true"); 
      localStorage.setItem("userName", registeredName);
      navigate('/home');

    } 
    else if (!registeredEmail) {
      setError("No account found. Please Sign Up first!");
    }
     else {
      setError('Wrong email or password. Try again!');
    }

  };

  return (

    <div className="min-h-screen relative flex items-center justify-center bg-black">

      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bca1-07e3f8eb1468/a2041926-4d2a-43d9-952b-7b567e615e44/EG-en-20220502-popsignuptwoweeks-perspective_alpha_website_small.jpg')" }}></div>

      <div className="absolute inset-0 bg-black/60"></div>

      <form onSubmit={handleLogin} className="relative z-10 bg-black/80 p-10 md:p-16 rounded-md w-full max-w-[450px] border border-white/5 shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-8">Sign In</h1>

        
        {error && (
          <div className="flex items-center gap-2 bg-[#e87c03] text-white p-4 rounded-md mb-6 border-l-4 border-white animate-bounce">

            <span>⚠️</span>

            <p className="text-sm font-medium">{error}</p>

          </div>

        )}

        <div className="space-y-4">

          <AuthInput type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <AuthInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        </div>

        <button type="submit" className="w-full py-3 mt-8 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition active:scale-95">
          Sign In
        </button>

        <p className="mt-8 text-[#737373] text-sm text-center">
          New to Cinema+? <Link to="/signup" className="text-white hover:underline ml-1 font-medium italic">Sign up now.</Link>
        </p>

      </form>
      
    </div>
  );
};

export default SignIn;