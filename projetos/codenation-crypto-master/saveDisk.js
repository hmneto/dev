const fs = require('fs')

module.exports = function(data) {
    fs.writeFileSync('./answer.json', data, function(err) {
        if (err)
            throw err
        console.log('arquivo salvo')
    })
}