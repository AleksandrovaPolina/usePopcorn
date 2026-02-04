import { useAppContext } from "../../utils/ContextProvider"


export default function MovieCard() {
  const {movieDescription, setMovieDescription, setActiveMovie} = useAppContext();
  return (
    <header>
              <button className="btn-back" onClick={()=>{setMovieDescription(null); setActiveMovie(null)}}>&larr;</button>
              <img src={movieDescription?.poster} />
              <div className="details-overview">
                <h2>{movieDescription?.title}</h2>
                <p>{movieDescription?.released} &bull; {movieDescription?.runtime}</p>
                <p>{movieDescription?.genre}</p>
                <p>
                  <span>⭐️</span>
                  {movieDescription?.imdbRating} IMDb rating
                </p>
              </div>
    </header>
  )
}
