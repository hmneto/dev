import React, { Component } from "react";

class MyCanvas extends Component {
    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        const img = this.refs.image;

        canvas.width = window.screen.width - 90;
        canvas.height = window.screen.height - 90;

        img.onload = () => {
            ctx.drawImage(img, 0, 0);
            ctx.font = "40px Courier";
            ctx.font = "25px Calibri"
            ctx.fillStyle = 'white'

            let altura = 400;
            let horizontal = 30
            ctx.fillText(this.props.dados.pagina.nome_pagina, horizontal, altura)
            altura += 30
            ctx.fillText(this.props.dados.pagina.endereco, horizontal, altura)
            altura += 30
            this.props.dados.contatos.forEach(element => {
                ctx.fillText(`${element.nome_contato?element.nome_contato:''} ${element.telefone?element.telefone:''} ${element.email?element.email:''}`, horizontal, altura)
                altura += 30
            });
            if(this.props.dados.concessionaria_pagina)
            ctx.fillText( this.props.dados.concessionaria_pagina.info=="não tem" ?"":this.props.dados.concessionaria_pagina.info, horizontal, altura)
        };
    }
    render() {
        return (
            <div>
                <canvas id="tela" ref="canvas" />
                <img
                    ref="image"
                    // src="..\..\..\imagem\imagembahm.jpg"
                    src="http://localhost/bahm/webroot/pagina/imagem/BAHMCAPA.jpeg"
                    style={{ display: "none" }}
                />
            </div>
        );
    }
}

export default MyCanvas;
