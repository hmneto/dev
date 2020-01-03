import React, { Component } from 'react';
export class CollapseNavBar extends Component {
    state = {}
    render() {
        return (
            <div class="collapse navbar-collapse" id="mytarget">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Quem</a></li>
                    <li><a href="#">O que</a></li>
                    <li><a href="#">Onde</a></li>
                </ul>
            </div>
        );
    }
}
