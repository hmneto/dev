module.exports = () => funcao()

const criarIcones = require('./criar_icones')
const requisicaoApi = require('./requisicao')
const { api_pontos } = require('../../info')

const kkk = require('./pegar_centro_mapa')


function funcao() {
    const { map } = require('./mapa')
    map.addListener('drag', function() {
        try {
            const {
                _latMin,
                _latMax,
                _longMin,
                _longMax,
                retorno_dados
            } = kkk(map)

            if (retorno_dados && _latMin && _latMax && _longMin && _longMax) {
                requisicaoApi(`${api_pontos}/get/${_latMin}/${_latMax}/${_longMin}/${_longMax}/`)
                    .then(dados => {
                        criarIcones(dados)
                        console.log(dados)
                    })
            }

        } catch (error) {
            // console.log(error)
        }

    })
}