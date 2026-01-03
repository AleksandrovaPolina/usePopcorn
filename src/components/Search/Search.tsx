import { useState } from "react";
import { getMovies } from "./api"
import { transformMovieData } from "./mappers";
import { AxiosError } from "axios";

export type SearchValue = string;

export default function Search() {
  const [value, setValue] = useState<SearchValue>('');
  async function getMoviesWrapper(e:React.ChangeEvent<HTMLInputElement>){
    setValue(e.target.value)
    try{
      const data = await getMovies(value);
      if(!data){
        throw new Error('not found');
      }
      const movies = transformMovieData(data)
      return movies;
  } catch(error){
    if(error instanceof AxiosError){
      console.log(error.message)
    }else if(error instanceof Error){
      console.log(error.message)
    }
  }
  }
  
  return (
   <input className="search" onChange={getMoviesWrapper} value={value} type="text" placeholder="Search movies..." />
  )
}
