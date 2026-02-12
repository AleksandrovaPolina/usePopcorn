import type { IFavouriteMovie } from "../../types";
import { useAppContext } from "../../utils/ContextProvider";
import Details from "../Details/Details";
import Stars from "./Stars";

export default function Rating() {
  const {
    rating,
    setMovieDescription,
    setActiveMovie,
    favouriteMovies,
    setFavouriteMovies,
    movieDescription,
  } = useAppContext();

  function addToFavouriteHandler() {
    setMovieDescription(null);
    setActiveMovie(null);
    if (movieDescription) {
      const favouriteFilm: IFavouriteMovie = {
        imdbID: movieDescription.imdbID,
        poster: movieDescription.poster,
        title: movieDescription.title,
        rating: rating,
        imdbRating: movieDescription.imdbRating,
        runtime: movieDescription.runtime,
      };
      setFavouriteMovies([...favouriteMovies, favouriteFilm]);
    }
  }
  return (
    <section>
      <div className="rating">
        <Stars />
        {rating ? (
          <button className="btn-add" onClick={addToFavouriteHandler}>
            + Add to list
          </button>
        ) : (
          ""
        )}
      </div>
      <Details />
    </section>
  );
}

//  <p>
//    You rated with movie {rating} <span>⭐️</span>
//  </p>;
