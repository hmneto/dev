let request = require('request')

// 'http://localhost:8080/envio/pontos'

module.exports = function (urlServer, payLoad) {
    return new Promise(function (resolve) {
        request.post({
            url: urlServer,
            body: payLoad
        }, function (error, response, body) {
            resolve(body)
        })
    })
}