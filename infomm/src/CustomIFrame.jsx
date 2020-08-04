import React, { Component } from "react";

class CustomIFrame extends Component {
  render() {
    return (
      <iframe
        src={this.props.dados}
        // scrolling="no"
      />
    );
  }
}

export default CustomIFrame;
