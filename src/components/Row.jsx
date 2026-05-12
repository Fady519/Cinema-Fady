import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const rowRef = useRef(null);
  const navigate = useNavigate();
  const base_url = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {

    async function fetchData() {

      if (page === 1) setLoading(true);

      try {
        const request = await axios.get(`${fetchUrl}&page=${page}`);
        setMovies((prev) => [...prev, ...request.data.results]);
        setLoading(false);
      } 
      catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }

    }

    fetchData();

  }, [fetchUrl, page]);

  const handleScroll = () => {

    if (rowRef.current) {

      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 100) {
        setPage((prevPage) => prevPage + 1);
      }

    }
  };

  return (


    <div className="ml-5 text-white my-10 relative z-20">

      <h2 className="text-3xl font-bold mb-6 ml-2 text-gray-100 tracking-wide">
        {title}
      </h2>


      {loading && page === 1 ? (

        <div className="flex overflow-hidden p-4 space-x-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className={`bg-gray-800 animate-pulse rounded-xl 
                ${isLargeRow ? 'h-[400px] min-w-[260px]' : 'h-[200px] min-w-[350px]'}`}
            />
          ))}
        </div>

      ) : (

        <div
          ref={rowRef}
          onScroll={handleScroll}
          className="flex overflow-y-hidden overflow-x-scroll p-4 scrollbar-hide space-x-6 scroll-smooth"
        >

          {movies.map((movie) => (

            (movie.poster_path || movie.backdrop_path) && (

              <div
                key={`${movie.id}-${Math.random()}`}
                onClick={() => navigate(`/movie/${movie.id}`)}
                className="group flex flex-col gap-3 cursor-pointer transition-transform duration-300 hover:scale-105"
              >

                <div
                  className={`relative overflow-hidden rounded-xl shadow-lg border border-gray-800 group-hover:border-red-600 transition-colors
                  ${isLargeRow ? 'h-[400px] w-[260px]' : 'h-[200px] w-[350px]'}`}
                >

                  <img
                    className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.title}
                  />

                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-500 border border-yellow-500/50">
                    ⭐ {movie.vote_average?.toFixed(1)}
                  </div>

                </div>

                <div className="px-1 space-y-1 max-w-[250px]">

                  <h3 className="text-lg font-semibold truncate group-hover:text-red-500 transition-colors">
                    {movie.title || movie.name}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-gray-400 font-medium">

                    <span>
                      {(movie.release_date || movie.first_air_date)?.split('-')[0]}
                    </span>

                    <span className="border border-gray-600 px-1 text-[10px] rounded uppercase">
                      HD
                    </span>

                  </div>

                </div>

              </div>
            )

          ))}

        </div>
      )}

    </div>

  );
};

export default Row;