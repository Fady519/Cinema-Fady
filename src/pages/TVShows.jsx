import ExploreGrid from '../components/ExploreGrid';

const TVShows = () => (

  <ExploreGrid 
    title="TV Shows" 
    fetchUrl={`https://api.themoviedb.org/3/discover/tv?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US&sort_by=vote_count.desc`} 
    type="tv"
  />

);

export default TVShows;