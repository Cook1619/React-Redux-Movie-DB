import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MoviesList from "./MoviesList";
import Movie from "./Movie";
import "./App.css";

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">Movie Database</Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={Movie} />
      </Switch>
    </div>
  </Router>
);

export default App;
