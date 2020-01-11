const getChallenge = require('./getChallenge')
const saveDisk = require('./saveDisk')
const getDisk = require('./getDisk')
const decript = require('./decript')


function main() {
    getChallenge.then(responseApi => saveDisk(responseApi))
    const textoD = decript(getDisk())
    let n = JSON.parse(getDisk())
    n.decifrado = textoD
    
    var sha1 = require('sha1');
 
    n.resumo_criptografico = sha1(n.decifrado);
    
    
    console.log(n)
    
    var FormData = require('form-data');


    var form = new FormData();
    form.append('answer', n);
    
    form.submit('https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=3d91c2389daa3b8e5d9a97e702028e36de7f4093', function(err, res) {
    // res – response object (http.IncomingMessage)  //
        //console.log(res)
      res.resume();
    });
}

main()
