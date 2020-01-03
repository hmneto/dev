module.exports = async(position, markerElem) => {
    const iniciar_google_lib = require('./iniciar_google_lib')
    const google = iniciar_google_lib()
    const map = require('./mapa')
    const buscarIcone = require('./buscarIcone')
    let icon = ""

    
    await buscarIcone(markerElem).then(link => icon = link)

    return new google.maps.Marker({
        map,
        position,
        icon
    })
}