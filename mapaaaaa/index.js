if (process.env.NODE_ENV === 'production') {
  console.log('Welcome to production');
}
if (process.env.DEBUG) {
  console.log('Debugging output');
}

import Marker from "./model/Marker";
let m, map, hash;
window.onload = async () => {
  if (
    !localStorage.getItem("lat") ||
    !localStorage.getItem("long") ||
    !localStorage.getItem("zoom")
  ) {
    localStorage.setItem("lat", "-21");
    localStorage.setItem("long", "-50");
    localStorage.setItem("zoom", "9");
  }

  if (!localStorage.getItem('hash')) {
    console.log('não tem hash')
    const form = new FormData()
    form.append('key', String(Math.random() * 10))
    const optReq = { method: 'post', body: form }
    hash = await fetch(`${window.location.origin}/GenerateHash.php`, optReq)
      .then(data => data.text())
    localStorage.setItem('hash', hash)
  } else {
    hash = localStorage.getItem('hash')
  }
  const loadGoogleMapsApi = require("load-google-maps-api");
  const aas = await fetch(`${window.location.origin}/TController.php`)
    .then((data) => data.text());
  loadGoogleMapsApi({ key: aas }).then(iniciarMap);
};
function iniciarMap(googleMaps) {
  console.log('pc-id: ' + hash)
  const latitude = localStorage.getItem("lat");
  const longitude = localStorage.getItem("long");
  const zoom = Number(localStorage.getItem("zoom"));
  m = new Marker(googleMaps, latitude, longitude, zoom);
  map = m.getMap();
  MontaDados();
  map.addListener("drag", MontaDados);
  async function MontaDados() {
    localStorage.setItem("lat", map.getCenter().lat());
    localStorage.setItem("long", map.getCenter().lng());
    localStorage.setItem("zoom", map.getZoom());
    document.getElementById("lat").value = map.getCenter().lat();
    document.getElementById("long").value = map.getCenter().lng();
    document.getElementById("zoom").value = map.getZoom();
    const centro = m.centerMap(9, 2);
    if (!centro) return;


    const dados2 = await m.getPontos(centro, hash);
    m.criarIcones(dados2.data.pontos, hash);
    console.log(dados2.data)
  }
  document.getElementById("control").addEventListener("click", botaoApertado);
  function botaoApertado(a) {
    var latLng = m.latLong(
      document.getElementById("lat").value,
      document.getElementById("long").value
    );
    map.panTo(latLng);
    map.setZoom(Number(document.getElementById("zoom").value));
    MontaDados();
  }
}
