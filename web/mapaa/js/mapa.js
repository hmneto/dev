const google = require('./iniciar_google_lib')()
const mapDom = document.getElementById('map')
const center = new google.maps.LatLng(parseFloat(prompt('lat')), parseFloat(prompt('long')))
    // -14.235004, -51.92528
const zoom = parseInt(prompt('zoom'))
const mapTypeId = google.maps.MapTypeId.HYBRID
    // const mapTypeId = 'satellite'

const map = new google.maps.Map(mapDom, {
    center,
    zoom,
    mapTypeId
})

module.exports = map