import React, { Component } from "react";
import Proptypes from "prop-types";

export default class Movie extends Component {
  static propTypes = {
    movie: Proptypes.shape({
      title: Proptypes.string.isRequired,
      desc: Proptypes.string,
    }),
  };
  static defaultProps = {
    desc: "This is a default description",
  };
  render() {
    const { title } = this.props.movie;
    const { desc } = this.props;

    return (
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    );
  }
}
