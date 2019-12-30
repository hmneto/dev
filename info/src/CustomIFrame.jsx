import React, { Component } from 'react';
class StreetView extends Component {
    render() { 
        return ( <iframe id="tela" frameBorder="0" marginHeight="0" marginWidth="0" src={this.props.dados}> </iframe> );
    }
}
 
export default StreetView;