const fs = require('fs')

module.exports = function(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path,function(err, data){
            if(err) reject(err)
            resolve(data.toString())
        })
    })
}