import React, { Component } from "react";
import logo from "./logo.svg";
import Movies from "./components/movies";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";

import NavBar from "./components/common/navBar";
import RoutingTable from "./components/common/routingTable";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <main className="container">
          <NavBar user={this.state.user} />
          <RoutingTable />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
