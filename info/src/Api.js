import Axios from 'axios';

// const url = `http://localhost/bahm/`
const url = `https://${window.location.hostname}/`

const api = Axios.create({
    baseURL:url
})


export const paginas_getpagina = (obj)=> api.get('/paginas/getpagina/'+obj)

export const paginaSite_index = (obj)=> api.get('/paginaSite/index/'+obj)

export const sites_get = (obj)=> api.get('/sites/get/'+obj)

export const paginaContato_index = (obj)=> api.get('/paginaContato/index/'+obj) 

export const contatos_get = (obj)=> api.get('/contatos/get/'+obj) 

export const concessionaria_index = (obj)=> api.get('/concessionarias/index/'+obj) 

export const fullpage_index = (obj)=> api.get('/fullpage/index/'+obj) 
