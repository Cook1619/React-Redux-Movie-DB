import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

// export default class Movie extends Component {
//   static propTypes = {
//     movie: Proptypes.shape({
//       title: Proptypes.string.isRequired,
//       overview: Proptypes.string.isRequired,
//     }),
//   };
//   render() {
//     const { title, overview } = this.props.movie;

//     return (
//       <div>
//         <h3>{title}</h3>
//         <p>{overview}</p>
//       </div>
//     );
//   }
// }

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

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;
