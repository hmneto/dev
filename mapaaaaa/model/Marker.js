import Axios from "axios";
class Marker {
  constructor(google, lat, long, zoom) {
    let baseURL = window.location.origin;
    //if (process.env.NODE_ENV === 'dev') {
    //  baseURL = 'localhost:3000'
    //}
    
    this.api = Axios.create({
      baseURL,
    });

    this.google = google;
    this._latMax;
    this._latMin;
    this._longMax;
    this._longMin;

    const mapDom = document.getElementById("map");
    const center = new this.google.LatLng(parseFloat(lat), parseFloat(long));
    const mapTypeId = this.google.MapTypeId.HYBRID;
    this.map = new this.google.Map(mapDom, {
      center,
      zoom,
      mapTypeId,
    });
  }

  getMap() {
    return this.map;
  }

  latLong(lat, long) {
    return new this.google.LatLng(parseFloat(lat), parseFloat(long));
  }

  centerMap(zoom, dist) {
    let latMax;
    let latMin;
    let longMax;
    let longMin;
    let retorno_dados = false;

    if (this.map.getZoom() >= zoom) {
      latMax = Math.round(this.map.getCenter().lat() - dist);
      latMin = Math.ceil(this.map.getCenter().lat() + dist);
      longMax = Math.round(this.map.getCenter().lng() - dist);
      longMin = Math.ceil(this.map.getCenter().lng() + dist);

      retorno_dados =
        this._latMax != latMax ||
        this._latMin != latMin ||
        this._longMax != longMax ||
        this._longMin != longMin;

      if (retorno_dados) {
        this._latMax = latMax;
        this._latMin = latMin;
        this._longMax = longMax;
        this._longMin = longMin;
      }
    }

    if (retorno_dados)
      return {
        latMin: this._latMin,
        latMax: this._latMax,
        longMin: this._longMin,
        longMax: this._longMax,
      };
    else return null;
  }

  getPontos(centro,hash) {
    const { latMin, latMax, longMin, longMax } = centro;
    const formData = new FormData();
    formData.append("latMin", latMin);
    formData.append("latMax", latMax);
    formData.append("longMin", longMin);
    formData.append("longMax", longMax);
    formData.append("pc_id", hash);
    return this.api.post(`./FullmarkerController.php`, formData);
  }

  criarIcones(dados,hash) {
    try {
      dados.forEach((element) => {
        const { latitude, longitude, link } = element;
        const position = new this.google.LatLng(
          parseFloat(latitude),
          parseFloat(longitude)
        );

        const icon = link;
        const map = this.map;

        const b = new this.google.Marker({
          map,
          position,
          icon,
        });

        if (element.tipo_icone == "KM") return;

        const div = document.createElement("div");
        const aHref = document.createElement("a");
        const text = document.createElement("text");

        aHref.textContent = element.nome_ponto;
        let baseLink = "./../info/build/index.html?v=" 
        if (process.env.NODE_ENV === 'dev') {
          baseLink = "http://localhost:3000?v="
        }

        let linkIcone = baseLink + element.pagina + "&&" + "u=" + hash

        if (element.pagina != "false")
          aHref.setAttribute(
            "href",
            linkIcone
          );

        div.appendChild(aHref);
        div.appendChild(document.createElement("br"));
        div.appendChild(text);

        const infoWindow = new this.google.InfoWindow();
        b.addListener("click", function () {
          infoWindow.setContent(div);
          infoWindow.open(this.mapa, b);
        });
      });
     
      
    } catch (error) {
      console.log("formato array incorreto");
    }
  }
}

export default Marker;
