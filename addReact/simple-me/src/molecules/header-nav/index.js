import React, { Component } from 'react';
import { ButtonNavCollapse } from "./../button-nav-collapse";
import { BrandNav } from "./../../atoms/brand-nav";
export class HeaderNav extends Component {
    state = {}
    render() {
        return (
        <div class="navbar-header">
            <ButtonNavCollapse />
            <BrandNav/>
        </div >
        );
    }
}
