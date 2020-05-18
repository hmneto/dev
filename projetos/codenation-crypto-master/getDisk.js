const fs = require('fs')

module.exports = function() {
    return fs.readFileSync('./answer.json', 'utf-8')
}