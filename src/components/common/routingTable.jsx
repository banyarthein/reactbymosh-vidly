import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "../movies";
import Customers from "../customers";
import Rental from "../rental";
import NotFound from "../not-found";
import MoviesForm from "./../movieForm";
import LoginForm from "./../loginForm";
import Register from "./../register";
import Logout from "./../logout";
import ProtectedRoute from "./protectedRoute";

const RoutingTable = ({ user }) => {
  return (
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/logout" component={Logout} />
      <ProtectedRoute
        path="/movies/:id"
        component={MoviesForm}
        render={(props) => {
          if (!user) return <Redirect to="/login" />;
          return <MoviesForm {...props} />;
        }}
      />
      <Route
        path="/movies"
        render={(props) => <Movies {...props} user={user} />}
      ></Route>
      <ProtectedRoute path="/customers" component={Customers} />
      <Route path="/register" component={Register} />
      <Route path="/rental" component={Rental} />
      <Route path="/not-found" component={NotFound} />
      <Redirect from="/" exact to="/movies" />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default RoutingTable;
