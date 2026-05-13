import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Row from '../components/Row';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
  const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchCinemaOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,     
  };


  useEffect(() => {

    async function fetchData() {

      const request = await axios.get(requests.fetchTrending);
      
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;

    }

    fetchData();

  }, []);

  const truncate = (string, n) => {

    return string?.length > n ? string.substr(0, n - 1) + '...' : string;

  };

  if (!movie) return (

    <div className="relative min-h-screen bg-[#111] overflow-hidden">
      <Navbar /> 
      
      
      <div className="relative h-[85vh] w-full bg-gray-900 animate-pulse">
        
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer"></div>
        
        
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 w-full h-[15rem] bg-gradient-to-t from-[#111] to-transparent"></div>

        
        <div className="relative z-10 ml-8 md:ml-16 h-full flex flex-col justify-center space-y-6 max-w-2xl">
          
          <div className="h-12 md:h-16 bg-gray-800 rounded-md w-3/4 shadow-lg"></div>
          
          
          <div className="flex gap-3">

            <div className="h-10 bg-gray-800 rounded-md w-32"></div>
            <div className="h-10 bg-gray-700/50 rounded-md w-32"></div>

          </div>
          
          
          <div className="space-y-2">
            <div className="h-4 bg-gray-800 rounded w-full"></div>
            <div className="h-4 bg-gray-800 rounded w-5/6"></div>
            <div className="h-4 bg-gray-800 rounded w-4/6"></div>
          </div>

        </div>

      </div>

      
      <div className="relative z-20 px-4 md:px-8 -mt-24 space-y-10">

        {[...Array(2)].map((_, i) => (

          <div key={i} className="space-y-4">

            <div className="h-6 bg-gray-800 rounded w-40 ml-2 animate-pulse"></div>

            <div className="flex gap-4 overflow-hidden">

              {[...Array(6)].map((_, j) => (
                <div key={j} className="min-w-[160px] md:min-w-[200px] h-28 md:h-32 bg-gray-800/50 rounded-lg animate-pulse"></div>
              ))}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

  return (

    <div className="relative min-h-screen bg-[#111] overflow-x-hidden">

      <Navbar />

      <header

        className="relative h-[85vh] text-white flex flex-col justify-center"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-[15rem] bg-gradient-to-t from-[#111] to-transparent"></div>

        <div className="relative z-10 ml-8 md:ml-16 max-w-2xl space-y-5">

          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            {movie?.title || movie?.name || movie?.original_name}

          </h1>

          <div className="flex gap-3">

            <button
              onClick={() => navigate(`/watch/${movie?.id}`)} 
              className="cursor-pointer text-black font-bold rounded-md px-8 py-2 bg-white hover:bg-[#e6e6e6] transition-all"
            >
              Play
            </button>


            <button
              onClick={() => navigate(`/movie/${movie?.id}`)} 
              className="cursor-pointer text-white font-bold rounded-md px-8 py-2 bg-[rgba(109,109,110,0.7)] hover:bg-[#ff1e1e] transition-all"
            >
              More Info
            </button>


          </div>

          <p className="text-sm md:text-lg leading-[1.3] font-medium drop-shadow-md max-w-[45rem]">
            {truncate(movie?.overview, 150)}
          </p>

        </div>

      </header>

      
      <div className="relative z-20 px-4 md:px-8 -mt-24 pb-10">

        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Popular Series" fetchUrl={requests.fetchCinemaOriginals} isLargeRow />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        
      </div>

      
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-gray-800 mx-10">
        © 2026 Cinema+ Project - Built by Fady
      </footer>

    </div>

  );

};

export default Home;