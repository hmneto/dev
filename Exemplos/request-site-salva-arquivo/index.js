const request = require("request");
const fs = require("fs");

request('http://www.uol.com.br', function(err, res, body){
    if(!err && res.statusCode === 200){
        // console.log(body)
    }
})

request("http://www.uol.com.br").pipe(fs.createWriteStream("home.html"));
