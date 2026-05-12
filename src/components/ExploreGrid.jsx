import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ExploreGrid = ({ title, fetchUrl, type = "movie" }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genre, setGenre] = useState(""); 
  const navigate = useNavigate();
  const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
  const base_url = "https://image.tmdb.org/t/p/w500/";

  const genresList = type === "movie" ? [
    { id: "28", name: "Action" },
    { id: "35", name: "Comedy" },
    { id: "27", name: "Horror" },
    { id: "10749", name: "Romance" },
    { id: "878", name: "Sci-Fi" },
    { id: "53", name: "Thriller" },
  ] : [
    { id: "10759", name: "Action & Adventure" },
    { id: "35", name: "Comedy" },
    { id: "18", name: "Drama" },
    { id: "10765", name: "Sci-Fi & Fantasy" },
    { id: "9648", name: "Mystery" },
    { id: "16", name: "Animation" },
  ];

  useEffect(() => {

    const fetchData = async () => {

      setLoading(true);

      try {
        const url = genre ? `${fetchUrl}&with_genres=${genre}` : fetchUrl;
        const res = await axios.get(url);
        setItems(res.data.results);
        setLoading(false);
      }
       catch (err) {
        console.error(err);
        setLoading(false);
      }

    };

    fetchData();

  }, [fetchUrl, genre]);

  return (

    <div className="min-h-screen bg-[#111] pt-24 px-6 md:px-16 text-white">

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">

        <h1 className="text-3xl font-bold">{title}</h1>
        
        <select 
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="bg-black border border-gray-700 text-sm p-2 rounded focus:outline-none focus:border-red-600 cursor-pointer hover:border-gray-500 transition"
        >

          <option value="">All Genres</option>
          {genresList.map((g) => (
            <option key={g.id} value={g.id}>{g.name}</option>
          ))}

        </select>

      </div>

      {loading ? (

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              
              <div className="h-72 bg-gray-800/40 animate-pulse rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
              </div>
              
              <div className="h-4 bg-gray-800 animate-pulse rounded w-3/4"></div>
              <div className="h-3 bg-gray-800 animate-pulse rounded w-1/4"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {items.map((item) => (

            <div 
              key={item.id}
              onClick={() => navigate(`/${type}/${item.id}`)}
              className="relative group cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
            >

              <img 
                src={item.poster_path ? `${base_url}${item.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'} 
                className="rounded shadow-lg w-full h-auto border border-gray-800 group-hover:border-red-600 transition-colors"
                alt={item.title || item.name}
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 rounded">

                <p className="text-sm font-bold truncate">{item.title || item.name}</p>

                <div className="flex items-center justify-between mt-1">

                  <p className="text-xs text-yellow-500 font-bold">★ {item.vote_average?.toFixed(1)}</p>

                  <p className="text-[10px] text-gray-400">{(item.release_date || item.first_air_date)?.split('-')[0]}</p>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

      {!loading && items.length === 0 && (

        <div className="text-center py-20">

          <p className="text-gray-500 text-xl font-medium italic">No results found for this category.</p>
          
        </div>

      )}

    </div>

  );

};

export default ExploreGrid;