let _latMax
let _latMin
let _longMax
let _longMin

module.exports = function(map) {
    let latMax
    let latMin
    let longMax
    let longMin
    let retorno_dados = false

    if (map.getZoom() >= 9) {
        latMax = Math.round(map.getCenter().lat() - 1)
        latMin = Math.ceil(map.getCenter().lat())
        longMax = Math.round(map.getCenter().lng() - 1)
        longMin = Math.ceil(map.getCenter().lng())

        retorno_dados = _latMax != latMax ||
            _latMin != latMin ||
            _longMax != longMax ||
            _longMin != longMin



        if (retorno_dados) {
            _latMax = latMax
            _latMin = latMin
            _longMax = longMax
            _longMin = longMin

            // console.log({
            //     _latMin,
            //     _latMax,
            //     _longMin,
            //     _longMax,
            //     retorno_dados
            // })
            
        }
    }
    return {
        _latMin,
        _latMax,
        _longMin,
        _longMax,
        retorno_dados
    }
}

// const zoom_definido = 
// console.log(`${__dirname}js`)