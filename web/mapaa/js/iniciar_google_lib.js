let googleRef

module.exports = (google) => {
    // se vier variavel com api do google maps == verdadeiro
    if (google) {

        //se verdadeiro atribui para variavel de referencia
        googleRef = google
    }

    // retorna a referencia
    return googleRef
}