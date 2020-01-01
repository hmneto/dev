var single = (function() {
    var instancia

    function criaInstacia() {
        var objeto = new Object({ jeto: "ok", coisa: "so" })
        console.log("objeto criado")
        return objeto
    }

    return {
        retornaInstancia: function() {
            if (!instancia) {
                instancia = criaInstacia()
            } else {
                console.log("já criado")
            }
            return instancia
        }
    }
})()

var v1 = single.retornaInstancia()
var v2 = single.retornaInstancia()