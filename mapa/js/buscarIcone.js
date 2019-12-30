const requisicaoApi = require('./requisicao')
const { api_icone } = require('./info')

const icones = requisicaoApi(`${api_icone}/todos/`)
let aaa
module.exports = (markerElem) => {
    const { icone_id } = markerElem
    return icones.then(data=>JSON.parse(data)).then(data => data[icone_id - 1]?data[icone_id - 1]:"").then(data => data.link)
}



// const requisicaoApi = require('./requisicao')
// const { api_icone } = require('./../../info')
// module.exports = (markerElem) => {
//     const { icone_id } = markerElem
//     return requisicaoApi(`${api_icone}/um/${icone_id}`).then(data => data.link)
// }


// http: //localhost/bahm-cakephp/icones/todos/