import type { IMovie } from "../../types"
import { useAppContext } from "../../utils/ContextProvider";
import { useGetMovieDescription } from "./model";
interface IListItemProps extends IMovie{
  id: number;
}

export default function ListItem({poster, title, year, imdbID, id}:IListItemProps) {
  const {activeMovie, setActiveMovie} = useAppContext();

  const getMovieDescriptionWrapper = useGetMovieDescription();

  function getMovieDescriptionHandler(id: IListItemProps['id'], imdbID: IMovie['imdbID']){
    setActiveMovie(id);
    getMovieDescriptionWrapper(imdbID);
  }

  return (
   <li onClick={()=>getMovieDescriptionHandler(id, imdbID)} className={activeMovie === id? 'active-movie' : ''}>
              <img
                src={poster}
                alt={title}
              />
              <h3>{title}</h3>
              <div>
                <p>
                  <span>🗓</span>
                  <span>{year}</span>
                </p>
              </div>
            </li>
  )
}
