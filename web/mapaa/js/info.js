const host = window.location.origin + '/'
const api_icone = host + `icones`

// const host = `https://bahm.herokuapp.com`

const api_pontos = host + '/pontos/index'

const api_fullmarker_index = host + '/Fullmarker/index'

module.exports = {
    api_icone,
    api_pontos,
    api_fullmarker_index,
}