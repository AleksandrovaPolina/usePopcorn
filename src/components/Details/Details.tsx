import { useAppContext } from "../../utils/ContextProvider"


export default function Details() {
    const {movieDescription} = useAppContext();
  return (
    <div className="details-overview">
                <p>
                  <em>{movieDescription?.plot}</em>
                </p>
                <p>Starring actors: {movieDescription?.actors}</p>
                <p>Directed by: {movieDescription?.director}</p>
              </div>
  )
}
