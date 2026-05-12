import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';




const MyList = () => {

  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const base_url = "https://image.tmdb.org/t/p/w500/";

  
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('myList') || '[]');
    setList(savedList);
    window.scrollTo(0, 0);
  }, []);

  
  const removeFromList = (id, e) => {
    e.preventDefault(); 
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
    localStorage.setItem('myList', JSON.stringify(updatedList));
  };

  return (

    <div className="min-h-screen bg-[#111] text-white pt-28 px-8 md:px-16 pb-20">

      <div className="flex items-center justify-between mb-10">

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight border-l-4 border-red-600 pl-4">
          My List
        </h1>

        <p className="text-gray-400 text-sm">
          {list.length} {list.length === 1 ? 'Title' : 'Titles'} Saved
        </p>

      </div>
      
      {list.length === 0 ? (

        <div className="flex flex-col items-center justify-center h-[50vh] text-center space-y-6">

          <div className="bg-gray-800/30 p-10 rounded-full">
             <span className="text-6xl opacity-20">🎬</span>
          </div>

          <div className="space-y-2">

            <p className="text-xl text-gray-400 font-medium">Your list is currently empty.</p>
            <p className="text-gray-500 text-sm">Add movies and shows to keep track of what you want to watch.</p>

          </div>

          <button 
            onClick={() => navigate('/home')}
            className="bg-white text-black px-10 py-3 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            Browse Everything
          </button>

        </div>
        
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-10">
          {list.map((movie) => (

            <div key={movie.id} className="relative group">
              <Link 
                to={`/movie/${movie.id}`} 
                className="block relative overflow-hidden rounded-md transition-transform duration-500 group-hover:scale-110 group-hover:z-50 shadow-lg"
              >

                <img 
                  src={movie.poster_path ? `${base_url}${movie.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"} 
                  alt={movie.title}
                  className="w-full h-auto object-cover"
                />
                
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="font-bold text-xs truncate mb-1">{movie.title}</p>

                  <div className="flex items-center justify-between">

                    <span className="text-green-500 text-[10px] font-bold">★ {movie.vote_average?.toFixed(1)}</span>

                    <button 
                      onClick={(e) => removeFromList(movie.id, e)}
                      className="text-white hover:text-red-500 text-xs transition"
                    >
                      Remove

                    </button>

                  </div>

                </div>

              </Link>

            </div>

          ))}

        </div>

      )}
      
    </div>
  );
};

export default MyList;