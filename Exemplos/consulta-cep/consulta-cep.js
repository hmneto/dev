const axios = require('axios')

// cep da avenida paulista
const cepValue = "01311-922"

const requisicao = axios.default({
    url:`https://viacep.com.br/ws/${cepValue}/json/`
})

requisicao.then(data=>console.log(data))