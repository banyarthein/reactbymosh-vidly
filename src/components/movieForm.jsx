import React, { Component } from "react";
import Joi from "joi-browser";

import Form from "./common/form";
import { saveMovie, getMovies } from "./../services/fakeMovieService";
import { genres, getGenres } from "./../services/fakeGenreService";

class MoviesForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .integer()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number().required().min(1).max(5).label("Rate"),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovies(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = () => {
    //Call the server
    console.log("Movie is added");
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <h1>Movie Form {this.props.match.params.id}</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
        </form>

        {this.renderButton("Save")}
      </div>
    );
  }
}

export default MoviesForm;
