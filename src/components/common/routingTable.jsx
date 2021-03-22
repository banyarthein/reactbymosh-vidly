import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "../movies";
import Customers from "../customers";
import Rental from "../rental";
import NotFound from "../not-found";
import MoviesForm from "./../movieForm";
import LoginForm from "./../loginForm";

const RoutingTable = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginForm}></Route>
      <Route path="/movies/:id" component={MoviesForm}></Route>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/customers" component={Customers} />
      <Route path="/rental" component={Rental}></Route>
      <Route path="/not-found" component={NotFound} />
      <Redirect from="/" exact to="/movies"></Redirect>
      <Redirect to="/not-found"></Redirect>
    </Switch>
  );
};

export default RoutingTable;
