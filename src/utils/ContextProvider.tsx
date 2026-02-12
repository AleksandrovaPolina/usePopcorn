import { createContext, useContext, useState } from "react";
import type { IMovie, IFavouriteMovie } from "../types";
import type { IMovieDescription } from "../components/ListItem/types";

interface IContext {
  searchLoading: boolean;
  setSearchLoading: (value: boolean) => void;
  movies: IMovie[];
  setMovies: (value: IMovie[]) => void;
  searchMovieError: string | null;
  setSearchMovieError: (value: string | null) => void;
  descriptionLoading: boolean;
  setDescriptionLoading: (value: boolean) => void;
  movieDescriptionError: string | null;
  setMovieDescriptionError: (value: string | null) => void;
  movieDescription: IMovieDescription | null;
  setMovieDescription: (value: IMovieDescription | null) => void;
  activeMovie: number | null;
  setActiveMovie: (value: number | null) => void;
  rating: number;
  setRating: (value: number) => void;
  favouriteMovies: IFavouriteMovie[];
  setFavouriteMovies: (value: IFavouriteMovie[]) => void;
}

const Context = createContext<IContext | null>(null);

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchLoading, setSearchLoading] =
    useState<IContext["searchLoading"]>(false);
  const [movies, setMovies] = useState<IContext["movies"]>([]);
  const [searchMovieError, setSearchMovieError] =
    useState<IContext["searchMovieError"]>(null);
  const [descriptionLoading, setDescriptionLoading] =
    useState<IContext["descriptionLoading"]>(false);
  const [movieDescriptionError, setMovieDescriptionError] =
    useState<IContext["movieDescriptionError"]>(null);
  const [movieDescription, setMovieDescription] =
    useState<IContext["movieDescription"]>(null);
  const [activeMovie, setActiveMovie] = useState<IContext["activeMovie"]>(null);
  const [rating, setRating] = useState<IContext["rating"]>(0);
  const [favouriteMovies, setFavouriteMovies] = useState<
    IContext["favouriteMovies"]
  >([]);
  return (
    <Context.Provider
      value={{
        searchLoading,
        setSearchLoading,
        movies,
        setMovies,
        searchMovieError,
        setSearchMovieError,
        descriptionLoading,
        setDescriptionLoading,
        movieDescriptionError,
        setMovieDescriptionError,
        movieDescription,
        setMovieDescription,
        activeMovie,
        setActiveMovie,
        rating,
        setRating,
        favouriteMovies,
        setFavouriteMovies,
      }}
    >
      {children}
    </Context.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
  const context = useContext(Context);
  if (!context) throw new Error("context error");
  return context;
}
