import Box from '../Box/Box'
import FavouriteFilmList from '../FavouriteFilmList/FavouriteFilmList'
import ListMovies from '../ListMovies/ListMovies'
import MovieCard from '../MovieCard/MovieCard'
import Navbar from '../Navbar/Navbar'
import Rating from '../Rating/Rating'
import Statistics from '../Statistics/Statistics'

function App() {

  return (
    <>
    <Navbar/>
    <main className="main">
        <Box><ListMovies/></Box>
        <Box>
          <div className="details">
            <MovieCard/>
            <Rating/>
          </div>
          <Statistics/>
          <FavouriteFilmList/>
        </Box>
    </main>
   
    </>
  )
}

export default App
