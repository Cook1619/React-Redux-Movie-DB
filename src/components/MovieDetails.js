import React, { Component } from "react";
import {
  Poster,
  MovieWrapper,
  MovieInfo,
} from "./Styled-Components/Styled-Components";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
    };
  }
  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
      );
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  }
  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Poster
            src={`${POSTER_PATH}${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetails;
