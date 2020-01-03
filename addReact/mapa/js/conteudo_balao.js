module.exports = function(markerElem) {
    const div = document.createElement('div')
    const aHref = document.createElement('a')
    const text = document.createElement('text')

    aHref.textContent = markerElem.nome_ponto
    aHref.setAttribute('href', './../pagina/index.html?v=' + markerElem.pagina)

    div.appendChild(aHref)
    div.appendChild(document.createElement('br'))
    div.appendChild(text)

    return div
}