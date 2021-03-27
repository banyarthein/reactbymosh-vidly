import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

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

  doSubmit = () => {
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
