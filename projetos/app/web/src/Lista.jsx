import React, { Component } from "react";
import axios from "axios";
class Lista extends Component {
  state = {
    dados: []
  };
  componentDidMount() {
    axios
      .get('http://192.168.99.100:81/get/')
      .then(data => this.setState({ dados: data.data }));
  }
  render() {
    return (
      <div>
        {this.state.dados.map(cada => (
          <h1 key={cada.id}>{cada.nome}</h1>
        ))}
      </div>
    );
  }
}
export default Lista;
