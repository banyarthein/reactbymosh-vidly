import React, { Component } from "react";
import logo from "./logo.svg";
import Movies from "./components/movies";
import { ToastContainer } from "react-toastify";
import auth from "./services/authService";

import NavBar from "./components/common/navBar";
import RoutingTable from "./components/common/routingTable";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <main className="container">
          <NavBar user={this.state.user} />
          <RoutingTable user={this.state.user} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
