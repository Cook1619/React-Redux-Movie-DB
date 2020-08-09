import React, { Component } from "react";
import Movie from "./Movie";
import "./App.css";

const movies = [
  {
    id: 1,
    title: "Star Wars",
  },
  {
    id: 2,
    title: "300",
  },
  {
    id: 3,
    title: "Grimm",
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Movie Database</header>
        {movies.map((movie) => (
          <Movie title={movie.title} key={movie.id} />
        ))}
      </div>
    );
  }
}

export default App;
