import axios from "axios";
import type { IMovieAPI } from "./types";


export async function getMovies(value:string) :Promise<IMovieAPI[]>{
    const response = await axios.get(`/api/?apikey=${import.meta.env.VITE_API_KEY}&s=${value}`)
    console.log(response)
    if(!response.data.Search){
        throw new Error('Movies not found');
      }
    return response.data.Search;
}