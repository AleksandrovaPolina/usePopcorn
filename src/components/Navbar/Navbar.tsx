import Search from "../Search/Search";
import SearchResults from "../SearchResults/SearchResults";


export default function Navbar() {
  return (
    <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <Search/>
        <SearchResults/>
      </nav>
  )
}
