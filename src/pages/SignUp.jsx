import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthInput from '../components/AuthInput';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    setMsg({ text: '', type: '' });

    if (!name || !email || !password) {
      setMsg({ text: 'Please fill in all fields.', type: 'error' });
      return;
    }

    try {
      localStorage.setItem("saved_email", email);
      localStorage.setItem("saved_password", password);
      localStorage.setItem("saved_name", name);
      setMsg({ text: 'Account created! Redirecting to Sign In...', type: 'success' });
      setTimeout(() => { navigate('/signin'); }, 2000);
    } catch (err) {
      setMsg({ text: 'Something went wrong.', type: 'error' });
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-black">

      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-950 opacity-80"></div>

     
      <div className="relative z-20 w-full max-w-[450px] mb-3 px-2">
        <div className="bg-amber-400 text-black text-center py-2 px-4 rounded-md font-bold text-xs">
          🎓 Portfolio Project by Fady — Not affiliated with any streaming service
        </div>
      </div>

      <form onSubmit={handleSignUp} className="relative z-10 bg-black/80 p-10 md:p-16 rounded-md w-full max-w-[450px] border border-white/5 shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-8">Sign Up</h1>

        {msg.text && (
          <div className={`${msg.type === 'error' ? 'bg-[#e87c03]' : 'bg-green-600'} text-white text-sm p-3 rounded mb-6 transition-all duration-500`}>
            {msg.text}
          </div>
        )}

        <div className="space-y-4">
          <AuthInput type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          <AuthInput type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <AuthInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="w-full py-3 mt-8 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition active:scale-95">
          Sign Up
        </button>

        <p className="mt-8 text-[#737373] text-sm text-center">
          Already have an account?{' '}
          <Link to="/signin" className="text-white hover:underline ml-1 font-medium italic">
            Sign in now.
          </Link>
        </p>
      </form>

    </div>
  );
};

export default SignUp;