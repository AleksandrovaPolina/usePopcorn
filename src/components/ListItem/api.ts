import axios from "axios";
import type { IMovie } from "../../types";

type ImdbID = IMovie['imdbID']


export async function getMovieDescription(imdbID:ImdbID){
    const response = await axios.get(`/api/?apikey=${import.meta.env.VITE_API_KEY}&i=${imdbID}`)
    console.log(response)
    if(!response.data){
        throw new Error('Movie information not found');
      }
    return response.data;
}