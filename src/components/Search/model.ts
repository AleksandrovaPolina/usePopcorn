import { AxiosError } from "axios";
import { getMovies } from "./api";
import { transformMovieData } from "./mappers";
import { useAppContext } from "../../utils/ContextProvider";

export function useGetMovies() {
  const { setSearchMovieError, setSearchLoading, setMovies, setMovieDescription } = useAppContext();
  async function getMoviesWrapper(value: string) {
    try {
      if(!value){
      setMovies([]);
      setMovieDescription(null);
    }else{
        setSearchLoading(true);
        const data = await getMovies(value);
        const movies = transformMovieData(data);
        setSearchLoading(false);
        setMovies(movies)
    }
    } catch (error) {
      setSearchLoading(false);
      if (error instanceof AxiosError || error instanceof Error) {
        setSearchMovieError(error.message);
        setMovies([]);
        setMovieDescription(null);
      }
    }
  }
  return getMoviesWrapper;
}