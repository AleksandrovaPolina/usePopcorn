import type { IMovieDescription, IMovieDescriptionAPI } from "./types";

export function transformMovieDescription(item:IMovieDescriptionAPI): IMovieDescription{
    const result =  {
            actors : item.Actors,
            director : item.Director,
            genre : item.Genre,
            plot : item.Plot,
            released : item.Released,
            runtime : item.Runtime,
            poster : item.Poster,
            imdbRating : item.imdbRating,
            title: item.Title,
        }
    return result;
}