const criar_ponto = require('./criar_ponto')
const adcionar_marcador = require('./adcionar_marcador')
const conteudo_balao = require('./conteudo_balao')
const eventos_marcador = require('./eventos_marcador')


module.exports = (array_api_icones) => JSON.parse(array_api_icones).forEach(element => {

    const position_google_maps = criar_ponto(element)

    const marcador = adcionar_marcador(position_google_maps, element)

    const conteudo_balao_html = conteudo_balao(element)

    eventos_marcador(marcador, conteudo_balao_html)


});

// array_api_icones.forEach(dado_icone => {
//     const position_google_maps = criar_ponto(dado_icone)

//     const marcador = adcionar_marcador(position_google_maps, dado_icone)

//     // const conteudo_balao_html = conteudo_balao(dado_icone)

//     // eventos_marcador(marcador, conteudo_balao_html)

// })