interface IMovieDescriptionAPI {
            Actors : string;
            Director : string;
            Genre : string;
            Plot : string;
            Released : string;
            Runtime : string;
            Poster : string;
            imdbRating : string;
            Title: string;
}

interface IMovieDescription {
            actors : string;
            director : string;
            genre : string;
            plot : string;
            released : string;
            runtime : string;
            poster : string;
            imdbRating : string;
            title: string;
}

export type {IMovieDescriptionAPI, IMovieDescription}