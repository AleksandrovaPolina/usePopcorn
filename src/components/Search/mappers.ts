import type { IMovieAPI, IMovie } from "./types";

export function transformMovieData(data:IMovieAPI[]): IMovie[]{
    const result = data.map((item)=>{
        return{
            poster : item.Poster,
            title : item.Title,
            year : item.Year,
            imdbID : item.imdbID,}
    })
    return result;
}