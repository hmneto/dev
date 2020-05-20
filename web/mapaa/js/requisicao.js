module.exports = (url, opcoes) => fetch(url, opcoes).then(resposta => resposta.json())
    // .then(resposta => console.log(resposta))