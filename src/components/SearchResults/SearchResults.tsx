import { useAppContext } from "../../utils/ContextProvider"


export default function SearchResults() {
  const {movies} = useAppContext()

  return (
    <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
  )
}
