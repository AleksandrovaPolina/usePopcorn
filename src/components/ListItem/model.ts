import { getMovieDescription } from "./api";
import { transformMovieDescription } from "./mappers";
import { AxiosError } from "axios";
import type { IMovie } from "../../types";
import { useAppContext } from "../../utils/ContextProvider";



export function useGetMovieDescription(){
  const {setDescriptionLoading, setMovieDescriptionError, setMovieDescription} = useAppContext();

  async function getMovieDescriptionWrapper(imdbID: IMovie['imdbID']){
    try{
      setDescriptionLoading(true)
      const data = await getMovieDescription(imdbID);
      const description = transformMovieDescription(data);
      console.log(description)
      setDescriptionLoading(false)
      setMovieDescription(description)
    }catch(error){
        setDescriptionLoading(false)
            if (error instanceof AxiosError || error instanceof Error) {
              setMovieDescriptionError(error.message);
              setMovieDescription(null)
            }
    }
  }
  return getMovieDescriptionWrapper;
}