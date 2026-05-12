import ExploreGrid from '../components/ExploreGrid';

const Movies = () => (

  <ExploreGrid 
    title="Movies" 
    fetchUrl={`https://api.themoviedb.org/3/discover/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US&sort_by=popularity.desc`} 
    type="movie"
  />
  
);
export default Movies;