import { useAppContext } from "../../utils/ContextProvider";
import ListItem from "../ListItem/ListItem";

export default function ListMovies() {
  const { movies } = useAppContext();

  return (
    <ul className="list list-movies">
      {movies.map((item, index) => (
        <ListItem
          key={index}
          poster={item.poster}
          title={item.title}
          year={item.year}
          imdbID={item.imdbID}
          id={index}
        />
      ))}
    </ul>
  );
}
