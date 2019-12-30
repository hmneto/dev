function criarPonto(markerElem) {
    const iniciar_google_lib = require('./iniciar_google_lib')
    const google = iniciar_google_lib()

    const {
        latitude,
        longitude
    } = markerElem

    return new google.maps.LatLng(
        parseFloat(latitude),
        parseFloat(longitude))
}


module.exports = criarPonto