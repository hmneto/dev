import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


class App extends Component {
  state = {
    retorno: ''
  }
  componentDidMount() {

    axios.get('http://192.168.99.100:81/get/').then(dados => this.setState({ retorno: dados.data }))
    axios.get('http://192.168.99.100:81/get/').then(dados => console.log(dados.data))
  }
  render() {

    return (
      <div>
        {/* {this.state.retorno} */}
        <Link to="/add">ADD</Link><br />
        <Link to="/list">LIST</Link>
      </div>
    )
  }
}


export default App;
