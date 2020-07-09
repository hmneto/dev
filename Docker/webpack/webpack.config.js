const path = require('path')

module.exports = {
    entry: path.join(__dirname,'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname),
        // path: path.join(__dirname,'..','webroot', 'mapa')
    }
}