import React, { Component } from 'react';
import axios from 'axios';

export class AddCliente extends Component {
    state = {
        nome:null
    }

  render () {
    return (
        <div>
            <input onChange={(d) => this.setState({ nome: d.currentTarget.value })} />
            <button onClick={() => axios.post("Cliente/CriarUsuario", JSON.stringify(this.state) )}> ENVIAR</button>
      </div>
    );
  }
}
