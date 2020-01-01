const btnEnviar = document.getElementById('btnEnviar')
const inputCep = document.getElementById('inputCep')

const spanCep = document.getElementById('cep')
const spanLogradouro = document.getElementById('logradouro')
const spanComplemento = document.getElementById('complemento')
const spanBairro = document.getElementById('bairro')
const spanLocalidade = document.getElementById('localidade')
const spanUf = document.getElementById('uf')

btnEnviar.onclick = function() {
    let cepValue = inputCep.value
    let api = `https://viacep.com.br/ws/${cepValue}/json/`
    let request = new XMLHttpRequest()
    request.onload = function() {

        const {
            cep,
            logradouro,
            complemento,
            bairro,
            localidade,
            uf
        } = JSON.parse(request.responseText)

        spanCep.innerHTML = cep
        spanLogradouro.innerHTML = logradouro
        spanComplemento.innerHTML = complemento
        spanBairro.innerHTML = bairro
        spanLocalidade.innerHTML = localidade
        spanUf.innerHTML = uf
    }
    request.open('GET', api)
    request.send()
}