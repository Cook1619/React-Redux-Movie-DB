import React from "react";
import Proptypes from "prop-types";

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
  <div>
    <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
  </div>
);

Movie.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string.isRequired,
  }).isRequired,
};

export default Movie;
