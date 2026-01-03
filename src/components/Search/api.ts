import axios from "axios";
import type { IMovieAPI } from "./types";
import type { SearchValue } from "./Search";

export async function getMovies(value:SearchValue) :Promise<IMovieAPI[]>{
    const response = await axios.get(`/api/?apikey=${import.meta.env.VITE_API_KEY}&s=${value}`)
    return response.data.Search;
}