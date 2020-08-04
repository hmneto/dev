import React, { Component } from "react";

class CustomImg extends Component {
  state = {};
  render() {
    return (
      <img
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        src={this.props.dados}
      />
    );
  }
}
export default CustomImg;
