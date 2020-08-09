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

const Movie = ({ movie }) => (
  <div>
    <h3>{movie.title}</h3>
    <p>{movie.overview}</p>
  </div>
);

Movie.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string.isRequired,
    overview: Proptypes.string.isRequired,
  }).isRequired,
};

export default Movie;
