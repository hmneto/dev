import React, { Component } from 'react';
import { NavBar } from '../../organisms/navbar';
import { PrimeiraParte } from '../../organisms/primeira-parte';
import { SegundaParte } from '../../organisms/segunda-parte';
import { TerceiraParte } from '../../organisms/terceira-parte';
import { Rodape } from '../../organisms/rodape';
export class Projeto extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavBar/>
                <PrimeiraParte/>
                <SegundaParte/>
                <TerceiraParte/>
                <Rodape/>
            </div>
         );
    }
}
 
