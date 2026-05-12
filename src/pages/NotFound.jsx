import { useNavigate } from 'react-router-dom';

const NotFound = () => {

  const navigate = useNavigate();

  return (

    <div className="h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4">

      <h1 className="text-9xl font-bold text-red-600">404</h1>
      <h2 className="text-3xl font-bold mt-4">Lost your way?</h2>
      <p className="text-gray-400 mt-4 max-w-md">
        Sorry, we can't find that page. You'll find lots to explore on the home page.
      </p>

      <button 
        onClick={() => navigate('/home')}
        className="mt-8 bg-white text-black px-8 py-3 rounded font-bold hover:bg-red-600 hover:text-white transition"
      >
        Cinema+ Home
      </button>

    </div>

  );
  
};

export default NotFound;