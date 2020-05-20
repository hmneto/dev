import React, { Component } from 'react';
import axios from 'axios';

//(dado => JSON.stringify(dado))
//{ this.setState({ dados: data.data }) }

export class Home extends Component {
    state = {
        dados: []
    }
    componentDidMount()
    {
        axios.get("http://localhost:59555/Cliente/ListarUsuarios").then(data => this.setState({ dados: data.data}))
    }
  render () {
    return (
        <div>
            {this.state.dados.map(data => <h1>{data.Nome}</h1>  )}
      </div>
    );
  }
}
