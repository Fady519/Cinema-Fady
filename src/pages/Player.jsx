import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import YouTube from 'react-youtube'; // تأكد إنك عملت npm install react-youtube

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [videoKey, setVideoKey] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";

useEffect(() => {
  async function fetchVideo() {
    try {
      
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`);
      
      if (res.data.results.length > 0) {
        
        let video = res.data.results.find(vid => vid.type === "Trailer");
        
        if (!video) video = res.data.results.find(vid => vid.type === "Teaser");
        
        if (!video) video = res.data.results[0];

        setVideoKey(video.key);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching video", error);
      setLoading(false);
    }
  }
  fetchVideo();
}, [id]);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
    },
  };

  if (loading) return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    
    <div className="h-screen bg-black relative">
      
      <button 
        onClick={() => navigate(-1)}
        className="absolute top-10 left-10 z-50 text-white flex items-center gap-2 bg-black/50 p-2 rounded-full hover:bg-red-600 transition-all"
      >
        <span className="text-3xl">←</span>
      </button>

      {videoKey ? (
        <YouTube videoId={videoKey} opts={opts} className="w-full h-full" />
      ) : (
        <div className="h-full flex flex-col items-center justify-center text-white">
          <p className="text-2xl font-bold">Sorry, Trailer Not Available 😔</p>
          <button onClick={() => navigate(-1)} className="mt-4 bg-red-600 px-6 py-2 rounded">Go Back</button>
        </div>
      )}
    </div>
  );
};

export default Player;