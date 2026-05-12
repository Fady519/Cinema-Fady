import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Search = () => {

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search).get('q');
  const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
  const base_url = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {

    if (query) {
      setLoading(true);
      const fetchSearch = async () => {
        try {

          const res = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}&language=en-US`);

          const filtered = res.data.results.filter(item => item.media_type !== 'person' && item.poster_path);
          setResults(filtered);
          setLoading(false);
        }
        catch (err) {
          console.error(err);
          setLoading(false);
        }

      };

      fetchSearch();

    }
  }, [query]);

  return (

    <div className="min-h-screen bg-[#111] pt-32 px-6 md:px-16 text-white">

      <h2 className="text-2xl mb-8 text-gray-400">

        Results for: <span className="text-white font-bold italic">"{query}"</span>
      </h2>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {[...Array(12)].map((_, i) => (

            <div key={i} className="flex flex-col gap-3">

              <div className="h-72 bg-gray-800/40 animate-pulse rounded-lg relative overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer"></div>
              </div>

              <div className="h-4 bg-gray-800 animate-pulse rounded w-3/4"></div>

            </div>

          ))}

        </div>
      ) : (

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">

          {results.length > 0 ? results.map((item) => (


            <div
              key={item.id}
              onClick={() => {
                navigate(`/${item.media_type}/${item.id}`);

                window.dispatchEvent(new Event("clearSearch"));
              }}
              className="group relative cursor-pointer transform transition duration-300 hover:scale-105 active:scale-95"
            >

              <img
                src={`${base_url}${item.poster_path}`}
                className="rounded shadow-lg w-full h-auto object-cover border border-gray-800 group-hover:border-red-600 transition-colors"
                alt={item.title || item.name}
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 rounded">
                <p className="text-sm font-bold truncate">{item.title || item.name}</p>

                <div className="flex items-center justify-between mt-1">

                  <p className="text-xs text-yellow-500 font-bold">★ {item.vote_average?.toFixed(1)}</p>

                  <span className="text-[10px] bg-red-600 px-1 rounded uppercase">
                    {item.media_type === 'tv' ? 'TV' : 'Movie'}
                  </span>

                </div>

              </div>

            </div>

          )) : (

            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 text-xl font-medium">No results found matching "{query}".</p>
            </div>

          )}

        </div>

      )}

    </div>

  );
};

export default Search;