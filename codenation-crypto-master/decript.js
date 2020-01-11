const values = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

module.exports = function(data) {
    const texto = JSON.parse(data).cifrado
    const numero_casas = JSON.parse(data).numero_casas
    let textoD = ''
    let numeroCasas = 0
    for (x = 0; x < texto.length; x++) {
        let numeroCasas = (values.indexOf(texto[x]) + numero_casas)

        if (numeroCasas >= 26) {
            numeroCasas -= 26
        }

        if (texto[x] == '.') {
            textoD += '.'
            continue
        }

        if (texto[x] == ' ') {
            textoD += ' '
            continue
        }

        textoD += values[numeroCasas]
    }
    return textoD
}