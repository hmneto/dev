import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cadastro from './Cadastro'
import Lista from './Lista'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(<BrowserRouter
// basename="/build/"
>
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/add" component={Cadastro} />
    <Route path="/list" component={Lista} />
  </Switch>
</BrowserRouter>, document.getElementById('root'));
