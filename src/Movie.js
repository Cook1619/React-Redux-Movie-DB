import React, { Component } from "react";
import Proptypes from "prop-types";

export default class Movie extends Component {
  static propTypes = {
    movie: Proptypes.shape({
      title: Proptypes.string.isRequired,
      overview: Proptypes.string.isRequired,
    }),
  };
  render() {
    const { title, overview } = this.props.movie;

    return (
      <div>
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
    );
  }
}
