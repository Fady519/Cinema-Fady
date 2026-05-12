import ExploreGrid from '../components/ExploreGrid';

const NewAndPopular = () => (
  <ExploreGrid 
    title="New & Popular" 
    fetchUrl={`https://api.themoviedb.org/3/movie/upcoming?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US`} 
    type="movie"
  />
);

export default NewAndPopular;