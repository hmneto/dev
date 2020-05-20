const criarIcones = require('./criar_icones')
const requisicaoApi = require('./requisicao')
const { api_fullmarker_index, api_pontos } = require('./info')
const pegar_centro_mapa = require('./pegar_centro_mapa')

function getUrl(centro) {
    const {
        _latMin,
        _latMax,
        _longMin,
        _longMax
    } = centro
    return `${api_fullmarker_index}/${_latMin}/${_latMax}/${_longMin}/${_longMax}/`
}

module.exports = function () {
    const map = require('./mapa')
    map.addListener('drag', function () {
        let centro = pegar_centro_mapa(map)

        if (centro.retorno_dados) {
            console.log(centro)
            const resposta = requisicaoApi(getUrl(centro))
            resposta.then(dados => {
                console.log(dados)
                criarIcones(dados)
            })
        }

    })
}


