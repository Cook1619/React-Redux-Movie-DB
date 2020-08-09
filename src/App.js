import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieDetails from "./MovieDetails";
import "./App.css";

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">Movie Database</Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetails} />
      </Switch>
    </div>
  </Router>
);

export default App;
