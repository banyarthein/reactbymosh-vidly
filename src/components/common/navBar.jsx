import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Customers from "./../customers";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Vidly
        </Link>
        <div className="navbar-expand expand">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-link" to="/customers">
              Customers
            </NavLink>
            <NavLink className="nav-link" to="/rental">
              Rental
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
