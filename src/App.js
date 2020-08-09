import React, { Component } from "react";
import Movie from "./Movie";
import "./App.css";

const movies = [
  {
    id: 1,
    title: "Star Wars",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, obcaecati.",
  },
  {
    id: 2,
    title: "300",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, obcaecati.",
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
          <Movie movie={movie} key={movie.id} desc={movie.desc} />
        ))}
      </div>
    );
  }
}

export default App;
