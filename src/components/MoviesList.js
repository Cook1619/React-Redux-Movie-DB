import React, { Component } from "react";
import { MovieGrid } from "./Styled-Components/Styled-Components";
import Movie from "./Movie";

class MoviesList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }
  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      );
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  }
  render() {
    const { movies } = this.state;
    return (
      <MovieGrid>
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </MovieGrid>
    );
  }
}

export default MoviesList;
