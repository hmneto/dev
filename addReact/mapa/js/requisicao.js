module.exports = (url, opcoes) => fetch(url, opcoes).then(resposta => resposta.text())
    // .then(resposta => console.log(resposta))
