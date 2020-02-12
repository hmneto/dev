import React, { Component } from "react";
import axios from "axios";
class Cadastro extends Component {
  state = { username: "" };

  myChangeHandler = event => {
    this.setState({ username: event.target.value });
  };

  mySubmitHandler = event => {
    // alert("You are submitting " + this.state.username);
    event.preventDefault();
    axios.post("http://192.168.99.100:81/add", this.state);
    this.setState({ username: ' ' });
  };

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input
          type="text"
          // name="valor"
          value={this.state.username}
          onChange={this.myChangeHandler}
        />
      </form>
    );
  }
}

export default Cadastro;
