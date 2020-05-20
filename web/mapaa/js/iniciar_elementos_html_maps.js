module.exports = () => {
    let mapDiv = document.createElement('div')
    mapDiv.id = 'map'
    document.body.appendChild(mapDiv)
    let script = document.createElement('script')
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBZkRztzytJboga-ppS__Lb8YbettZs8Rk'
    document.body.appendChild(script)
}