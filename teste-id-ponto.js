const crypto = require('crypto');
let envia = []
let pontos = [
    { id: 0, nome: 'ponto0' },
    { id: 1, nome: 'ponto1' },
    { id: 2, nome: 'ponto2' }
]


function monta(ponteiro) {
    return pontos.map(function (x) {
        const hash = crypto.createHmac('sha256', String(x.id))
            .update('bahm')
            .digest('hex')
            let z = {}
            z.nome = hash
            ponteiro[hash] = x.id
            z.nome = x.nome
            return z
         
    })
}



//console.log(monta(envia),envia)
