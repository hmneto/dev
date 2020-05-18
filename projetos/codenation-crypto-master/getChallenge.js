const http = require('https')
const token = '3d91c2389daa3b8e5d9a97e702028e36de7f4093'
const urlApi = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=' + token
let data = ''

function get(resolve) {
    http.get(urlApi, reponseApi => {

        reponseApi.on('data', chunk => {
            data += chunk
        })


        reponseApi.on('end', () => {
            resolve(data)
        })
    })
}

module.exports = new Promise(get)