

export default function MovieCard() {
  return (
    <header>
              <button className="btn-back">&larr;</button>
              <img src="https://m.media-amazon.com/images/M/MV5BMDFhNzU4MTMtYzZmNS00ZDEzLTg2MjQtYmUzZDA1ZWU4OTkzXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg" />
              <div className="details-overview">
                <h2>title</h2>
                <p>16 Jul 2010 &bull; 148 min</p>
                <p>Action, Adventure, Sci-fi</p>
                <p>
                  <span>⭐️</span>
                  8.9 IMDb rating
                </p>
              </div>
    </header>
  )
}
