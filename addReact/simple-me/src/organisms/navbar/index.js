import React, { Component } from 'react';
import { HeaderNav } from '../../molecules/header-nav';
import { CollapseNavBar } from '../../molecules/collapse-navbar';
export class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav class="navbar navbar-default">
                <div class="container">
                    <HeaderNav/>
                    <CollapseNavBar/>
                </div>
            </nav>
        );
    }
}
