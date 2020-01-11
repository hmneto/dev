let request = require('request')

module.exports = function (url) {
    return new Promise(function(resolve){
        request(url, (err, res, body) => {
            resolve(body)
        })
    })
}
