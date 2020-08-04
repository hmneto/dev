import React, { Component } from "react";
import pegar_centro_mapa from "./mapa_lib/pegar_centro_mapa";
import requisicaoApi from "./mapa_lib/requisicao";
import { api_pontos } from "./mapa_lib/info";
import criarIcones from "./mapa_lib/criar_icones";

class Mapa extends Component {
  state = {};
  componentDidMount() {
    // var google = sessionStorage.getItem('google');
    // var latLng = localStorage.getItem('latLng');
    // console.log(latLng)
    // google = JSON.parse(google)
    // console.log(google)
    // eval(google)
    var map;
    console.log(window);
    const center = new window.google.maps.LatLng(
      parseFloat(prompt("lat")),
      parseFloat(prompt("lng"))
    );
    const mapTypeId = window.google.maps.MapTypeId.HYBRID;
    const zoom = parseInt(prompt("zoom"));
    map = new window.google.maps.Map(document.getElementById("map"), {
      center,
      zoom,
      mapTypeId,
    });

    // window.map = map

    // map.addListener("drag", function () {
    //     function getUrl(centro) {
    //         const { _latMin, _latMax, _longMin, _longMax } = centro;
    //         return `${api_pontos}/get/${_latMin}/${_latMax}/${_longMin}/${_longMax}/`;
    //     }

    //     let centro = pegar_centro_mapa(map);

    //     if (centro.retorno_dados) {
    //         const resposta = requisicaoApi(getUrl(centro));
    //         resposta.then(dados => {
    //             criarIcones(dados)
    //         });
    //     }
    // });

    // document.getElementById("map").style.display = 'none'
  }
  render() {
    return <div id="map" style={{ height: "100vh" }}></div>;
  }
}

export default Mapa;
