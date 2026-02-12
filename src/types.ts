import type { IMovieDescription } from "./components/ListItem/types";
interface IMovie {
  poster: string;
  title: string;
  year: string;
  imdbID: string;
}

interface IFavouriteMovie extends Pick<
  IMovieDescription,
  "poster" | "title" | "imdbID" | "runtime" | "imdbRating"
> {
  rating: number;
}

export type { IMovie, IFavouriteMovie };
