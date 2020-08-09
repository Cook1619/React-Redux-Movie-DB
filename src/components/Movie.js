import React from "react";
import Proptypes from "prop-types";
import { Poster } from "./Styled-Components/Styled-Components";
import { Link } from "react-router-dom";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

const Movie = ({ movie }) => (
  <Link to={`/${movie.id}`}>
    <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
  </Link>
);

export default Movie;

Movie.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string.isRequired,
  }).isRequired,
};
