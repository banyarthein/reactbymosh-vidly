import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { register } from "./../services/userService";
import auth from "../services/authService";

class Register extends Form {
  state = {
    data: { username: "", password: "", fullname: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("User Name"),
    password: Joi.string().required().min(5).label("Password"),
    fullname: Joi.string().required().label("Full Name"),
  };

  doSubmit = async () => {
    try {
      const response = await register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);

      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }

    //Call the Server
    console.log("Registered");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "User Name")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("fullname", "Full Name")}

          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
