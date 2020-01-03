import React, { Component } from 'react';

export class PrimeiraParte extends Component {
    state = {}
    render() {
        return (
            <div className="container-fluid bg-1 text-center">
                <h3>Quem sou eu</h3>
                <img src="http://www.w3schools.com/bootstrap/bird.jpg" alt={"passaro falção"} className="img-circle img-responsive" /*style={"display: inline"}*/ />
                <h3>Eu sou um aventureiro</h3>
            </div>
        );
    }
}