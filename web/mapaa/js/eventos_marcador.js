module.exports = (promisse_marcadores, conteudoBalao) => {
    const mapa = require('./mapa')
    const iniciar_google_lib = require('./iniciar_google_lib')
    const google = iniciar_google_lib()
    const infoWindow = new google.maps.InfoWindow

    promisse_marcadores.then(dados => {
        dados.addListener('click', function() {
            infoWindow.setContent(conteudoBalao)
            infoWindow.open(mapa, dados)
        })
    })

}