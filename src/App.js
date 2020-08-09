import React, { Component } from "react";
import Movie from "./Movie";
import "./App.css";

class App extends Component {
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
      <div className="App">
        <header className="App-header">Movie Database</header>
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    );
  }
}

export default App;
