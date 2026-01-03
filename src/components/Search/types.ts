interface IMovieAPI {
Poster : string;
Title : string;
Year : string;
imdbID : string;
}

interface IMovie{
    poster : string;
    title : string;
    year : string;
    imdbID : string;
}

export type {IMovieAPI, IMovie}