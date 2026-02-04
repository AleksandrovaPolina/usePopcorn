import Box from "../Box/Box";
import FavouriteFilmList from "../FavouriteFilmList/FavouriteFilmList";
import ListMovies from "../ListMovies/ListMovies";
import MovieCard from "../MovieCard/MovieCard";
import Navbar from "../Navbar/Navbar";
import Rating from "../Rating/Rating";
import Statistics from "../Statistics/Statistics";
import { useAppContext } from "../../utils/ContextProvider";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

function App() {
  const {
    searchLoading,
    searchMovieError,
    descriptionLoading,
    movieDescriptionError,
    movieDescription,
  } = useAppContext();
  console.log(searchMovieError);
  return (
    <>
      <Navbar />
      <main className="main">
        <Box>
          {searchLoading ? (
            <div className="spinner-wrapper">
              <Spinner />
            </div>
          ) : searchMovieError ? (
            <Error>{searchMovieError}</Error>
          ) : (
            <ListMovies />
          )}
        </Box>
        <Box>
          {descriptionLoading ? (
            <div className="spinner-wrapper">
              <Spinner />
            </div>
          ) : movieDescriptionError ? (
            <Error>{movieDescriptionError}</Error>
          ) : movieDescription ? (
            <div className="details">
              <MovieCard />
              <Rating />
            </div>
          ) : (
            <>
              <Statistics />
              <FavouriteFilmList />
            </>
          )}
        </Box>
      </main>
    </>
  );
}

export default App;
