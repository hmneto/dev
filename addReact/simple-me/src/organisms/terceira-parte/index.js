import React, { Component } from 'react';
export class TerceiraParte extends Component {
    state = {}
    render() {
        return (
            <div class="container-fluid bg-3 text-center">
                <h3>O que eu procuro</h3>
                <div class="row">
                    <div class="col-sm-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <img src="http://www.w3schools.com/bootstrap/birds1.jpg" alt="Imagem" class="img-responsive" /*style="width: 100%" *//>
                    </div>
                    <div class="col-sm-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <img src="http://www.w3schools.com/bootstrap/birds2.jpg" alt="Imagem2" class="img-responsive" /*style="width: 100%"*/ />
                    </div>

                    <div class="col-sm-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <img src="http://www.w3schools.com/bootstrap/birds3.jpg" alt="Imagem3" class="img-responsive" /*style="width: 100%"*/ />
                    </div>
                </div>

            </div>
        );
    }
}