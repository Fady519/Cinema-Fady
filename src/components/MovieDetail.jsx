
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import Row from '../components/Row';

const MovieDetail = () => {

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [cast, setCast] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const isTV = location.pathname.includes("/tv/");
  const type = isTV ? "tv" : "movie";
  const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {

    async function fetchDetails() {

      try {

        const res = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`);
        setData(res.data);
        
        const creditsRes = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}`);
        setCast(creditsRes.data.cast.slice(0, 10));

        const myList = JSON.parse(localStorage.getItem('myList') || '[]');
        const exists = myList.find(item => item.id === parseInt(id) && item.type === type);
        setIsFavorite(!!exists);

      }
       catch (error) {
        console.error("Error fetching details", error);
      }

    }

    fetchDetails();
    window.scrollTo(0, 0);

  }, [id, type]);



  const toggleMyList = () => {

    let myList = JSON.parse(localStorage.getItem('myList') || '[]');

    if (isFavorite) {
      myList = myList.filter(item => !(item.id === data.id && item.type === type));
    } 
    else {

      myList.push({
        id: data.id,
        title: data.title || data.name,
        poster_path: data.poster_path,
        backdrop_path: data.backdrop_path,
        vote_average: data.vote_average,
        type: type
      });
    }

    localStorage.setItem('myList', JSON.stringify(myList));
    setIsFavorite(!isFavorite);

  };

  if (!data) return <div className="min-h-screen bg-[#111] animate-pulse"></div>;

  return (

    <div className="min-h-screen bg-[#111] text-white overflow-x-hidden">
      
      <div className="relative min-h-[80vh] md:h-[85vh] w-full flex flex-col justify-center">
        
        <div className="absolute inset-0">

          <img 
            src={`${base_url}${data.backdrop_path}`} 
            className="w-full h-full object-cover opacity-30 md:opacity-40" 
            alt="" 
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/60 to-transparent"></div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-transparent to-transparent hidden md:block"></div>

        </div>

        
        <div className="relative z-10 pt-28 pb-10 px-6 md:px-16 flex flex-col md:flex-row items-center md:items-end gap-10">
         
          <img 
            src={`${base_url}${data.poster_path}`} 
            className="w-52 md:w-80 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 hidden sm:block" 
            alt="" 
          />
          
          <div className="flex-1 space-y-6 text-center md:text-left">

            <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight">
              {data.title || data.name}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm md:text-lg text-gray-300 font-medium">

              <span className="text-green-500 font-bold">{data.vote_average?.toFixed(1)} Rating</span>
              <span className="bg-white/10 px-2 py-1 rounded">{(data.release_date || data.first_air_date)?.split('-')[0]}</span>

              {data.runtime && <span>{data.runtime} min</span>}
              {data.number_of_seasons && <span>{data.number_of_seasons} Seasons</span>}

              <span className="border border-gray-500 px-2 py-0.5 text-xs rounded uppercase text-gray-400">HD</span>

            </div>

            <p className="max-w-3xl text-base md:text-xl text-gray-300 leading-relaxed line-clamp-4 md:line-clamp-none">
              {data.overview}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">

              <button 
                onClick={() => navigate(`/watch/${data.id}`)} 
                className="bg-white text-black px-10 py-3 rounded-md font-black hover:bg-white/80 transition active:scale-95 flex items-center gap-3"
              >

                <span className="text-xl">▶</span> Play Trailer

              </button>
              
              <button 
                onClick={toggleMyList}
                className={`${isFavorite ? 'bg-green-600' : 'bg-gray-500/40'} backdrop-blur-md px-8 py-3 rounded-md font-bold hover:bg-gray-500/60 transition active:scale-95 flex items-center gap-2 border border-white/10`}
              >

                <span className="text-xl">{isFavorite ? '✓' : '+'}</span>

                {isFavorite ? 'In My List' : 'Add to My List'}

              </button>

            </div>

          </div>

        </div>

      </div>

      
      <div className="px-6 md:px-16 py-12">

        <h2 className="text-2xl font-bold mb-8 text-white border-l-4 border-red-600 pl-4">Top Cast</h2>

        <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide">

          {cast.map(person => (
            <div key={person.id} className="min-w-[110px] text-center group">

              <div className="relative overflow-hidden rounded-full w-24 h-24 mx-auto border-2 border-gray-800 group-hover:border-red-600 transition duration-300">
                <img 
                  src={person.profile_path ? `${base_url}${person.profile_path}` : "https://via.placeholder.com/150"} 
                  className="w-full h-full object-cover transition transform group-hover:scale-110" 
                  alt={person.name} 
                />

              </div>

              <p className="mt-3 text-sm font-bold text-white/90 truncate">{person.name}</p>
              <p className="text-[11px] text-gray-500 uppercase truncate">{person.character}</p>

            </div>

          ))}

        </div>

      </div>

      <div className="pb-16">

        <Row 
          title={isTV ? "Similar Shows" : "More Like This"} 
          fetchUrl={`https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${API_KEY}`} 
        />

      </div>

    </div>

  );
  
};

export default MovieDetail;