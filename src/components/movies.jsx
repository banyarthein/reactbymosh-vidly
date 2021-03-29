import React, { Component } from "react";
import _ from "lodash";
import { NavLink, Link } from "react-router-dom";

import { getMovies } from "../services/fakeMovieService";
import Pagination from "../components/pagination";
import { paginate } from "../util/paginate";
import ListGroup from "../components/common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import PageSize from "../components/pagesize";
import MoviesTable from "./moviesTable";
import SearchBox from "./common/searchBox";

const defaultGrene = { _id: "0", name: "All Genres" };

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 3,
    pageSizeList: [3, 4, 5, 6, 7, 10, 20],
    currentPage: 1,
    searchQuery: "",
    currentGrene: null,
    sortColumn: { path: "title", order: "dec" },
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ currentGrene: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentGrene: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handlePageSizeChange = (pageSize) => {
    this.setState({ pageSize: pageSize });
  };

  render() {
    let { length: movieCount } = this.state.movies;
    const {
      pageSize,
      movies: allMovies,
      currentGrene,
      genres: genreFromList,
      pageSizeList,
      sortColumn,
      searchQuery,
    } = this.state;

    let genres = [defaultGrene, ...genreFromList];
    //let movies = [...allMovies];
    let { currentPage } = this.state;

    let movies = allMovies;
    if (searchQuery) {
      console.log("searchQuery is ", searchQuery);
      movies = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (currentGrene && currentGrene._id !== "0") {
      movies = movies.filter((m) => m.genre._id === currentGrene._id);
    }
    movieCount = movies.length;

    const movieType =
      currentGrene === null || currentGrene._id === "0"
        ? ""
        : currentGrene.name + " ";

    if (movieCount === 0) return <p>There are no movies in the database</p>;
    const sortedList = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);

    const filterMovies = paginate(sortedList, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2">
            <ListGroup
              textProperty="name"
              valueProperty="_id"
              genres={genres}
              onGenreChange={this.handleGenreSelect}
              currentGrene={currentGrene}
            >
              New Movie
            </ListGroup>
          </div>
          <div className="col">
            <Link
              to={"/movies/new"}
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
            >
              New Movie
            </Link>
            <p>
              Currently showing{" "}
              <strong>
                {movies.length} {movieType}
              </strong>
              movies
            </p>
            <SearchBox
              value={searchQuery}
              onChange={this.handleSearch}
            ></SearchBox>

            <MoviesTable
              movies={filterMovies}
              sortColumn={sortColumn}
              onDelete={this.handleDelete}
              onLike={this.handleLike}
              onSort={this.handleSort}
            />
            <div className="row">
              <div className="col">
                <Pagination
                  itemsCount={movieCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                />
              </div>
              <div className="col-2 text-right">
                <PageSize
                  pageSize={pageSize}
                  pageSizeList={pageSizeList}
                  OnPageSizeChange={this.handlePageSizeChange}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
