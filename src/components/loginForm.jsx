import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  handleChange = (e) => {
    const myaccount = { ...this.state.account };
    console.log("e.currentTarget.value", e.currentTarget.value);
    myaccount.username = e.currentTarget.value;

    console.log("myaccount", myaccount);
    this.setState({ myaccount });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              id="username"
              type="text"
              value={this.state.account.username}
              onChange={this.handleChange}
              className="form-control"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
