import React, { Component } from 'react';
import { IconeNavCollapse } from "./../../atoms/icone-nav-collapse";
export class ButtonNavCollapse extends Component {
    render() {
        return (
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mytarget">
                <IconeNavCollapse></IconeNavCollapse>
                <IconeNavCollapse></IconeNavCollapse>
                <IconeNavCollapse></IconeNavCollapse>
            </button>
        );
    }
}