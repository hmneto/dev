// const host = 'http://192.168.0.12'
const host = 'http://localhost'

const api_pontos = host + '/bahm/pontos'

const api_icone = host + `/bahm/icones`

const api_paginas = host + '/bahm/paginas/getpagina/'

const api_pagina_site = host + '/bahm/paginaSite/index/'

const api_sites = host + '/bahm/sites/get/'

module.exports = {
    api_icone,
    api_pontos,
    api_paginas,
    api_pagina_site,
    api_sites,
}


