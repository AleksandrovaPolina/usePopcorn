import useDebounce from "../../utils/useDebounce";
import { useGetMovies } from "./model";

export default function Search() {
  const getMoviesWrapper = useGetMovies();
  // type OutputMovies = ReturnType<typeof useGetMovies>;
  type OutputMovies = ReturnType<typeof getMoviesWrapper>;

  const changeHandler = useDebounce<string, OutputMovies>(
    getMoviesWrapper,
    1000,
  );

  return (
    <input
      className="search"
      onChange={changeHandler}
      type="text"
      placeholder="Search movies..."
    />
  );
}
