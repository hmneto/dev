import React, {Component} from 'react'
import axios from 'axios'
class Lista extends Component{
  state = {
    dados:[]
  }
  componentDidMount(){
    axios.get('http://localhost:8080/get').then(data=>this.setState({dados:data.data}))
  }
  render(){
    return (<div>{this.state.dados.map(cada=><h1>{cada.nome}</h1>)}</div>)
    
  }
}
export default Lista
