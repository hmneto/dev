const fs = require('fs')

module.exports = function (path, data) {
    fs.writeFile(path, data, function (err) {
        if (err) throw err
        console.log('////// salvo: ' + data + '/////////')
    })
}