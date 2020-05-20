const requisicaoApi = require('./requisicao')
const { api_icone } = require('./info')

const icones = requisicaoApi(`${api_icone}/todos/`)

module.exports = (markerElem) => {
    const { icone_id } = markerElem
    return icones.then(data=>data).then(data => data[icone_id - 1]?data[icone_id - 1]:"").then(data => data.link)
}