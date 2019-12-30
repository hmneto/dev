import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { paginas_getpagina, paginaSite_index, sites_get, paginaContato_index, contatos_get, concessionaria_index,fullpage_index } from './Api'
import MyCanvas from './MyCanvas'
import CustomIFrame from './CustomIFrame'
import AppCss from './App.css'

class App extends Component {
  state = {

    pagina: false,
    concessionaria_pagina: 0,
    contatos: [],


    street: [],
    foto: [],
    wiki_sat:[],
    wiki_frio:[],
    pm: [],
    site:[],
    abcr:[], 
    concessionaria: [],
    foto_mapa:[],
    wikipedia: [],
    lei: [],
  }

  get = (name) => {
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(window.location.search))
      return decodeURIComponent(name[1])
  }


  put_type = e => {

    if (e.tipo === "STREET") {
      let street = this.state.street
      street.push(e)
      this.setState({ street })
    }

    if (e.tipo === "FOTO") {
      let foto = this.state.foto
      foto.push(e)
      this.setState({ foto })
    }

    if (e.tipo === "WIKIMAPIA_SAT") {
      let wiki_sat = this.state.wiki_sat
      wiki_sat.push(e)
      this.setState({ wiki_sat })
    }


    
    if (e.tipo === "WIKIMAPIA_FRIO") {
      let wiki_frio = this.state.wiki_frio
      wiki_frio.push(e)
      this.setState({ wiki_frio })
    }


    if (e.tipo === "PM") {
      let pm = this.state.pm
      pm.push(e)
      this.setState({ pm })
    }

    if (e.tipo === "SITE") {
      let site = this.state.site
      site.push(e)
      this.setState({ site })
    }

    if (e.tipo === "ABCR") {
      let abcr = this.state.abcr
      abcr.push(e)
      this.setState({ abcr })
    }

    if (e.tipo === "CONCESSIONARIA") {
      let concessionaria = this.state.concessionaria
      concessionaria.push(e)
      this.setState({ concessionaria })
    }

    if (e.tipo === "FOTO_MAPA") {
      let foto_mapa = this.state.foto_mapa
      foto_mapa.push(e)
      this.setState({ foto_mapa })
    }

    if (e.tipo === "WIKIPEDIA") {
      let wikipedia = this.state.wikipedia
      wikipedia.push(e)
      this.setState({ wikipedia })
    }

    if (e.tipo === "LEI") {
      let lei = this.state.lei
      lei.push(e)
      this.setState({ lei })
    }
  }

  async componentDidMount() {


    const dados = await fullpage_index(this.get('v'))
    const { nome_pagina,endereco,info,sites,contatos } = dados.data
    const pagina = {nome_pagina,endereco,info}
    const concessionaria_pagina = { info }

    if(contatos!==undefined)
    {
      this.setState({contatos})
    }
    
    this.setState({pagina,concessionaria_pagina})
    sites.forEach(element => this.put_type(element))


    // // acesso get pagina_contato e obtem o array da tabela de relaçao com os contatos da pagina
    // const pagina_contato = await paginaContato_index(this.get('v'))
    // // mapeia para variavel o array de promisses de cada relação e trás os contatos
    // const promisses_contatos = pagina_contato.data.map(a => contatos_get(a.contato_id).then(data => data.data))
    // // resolve as promisses e retorna um array de contatos
    // const contatos = await Promise.all(promisses_contatos);
    // // atribui para o state os contatos
    // this.setState({ contatos })



    // // requisição get para carregar as paginas
    // paginas_getpagina(this.get('v')).then(async data => {
    //   // console.log(data.data)
    //   let concessionaria = await concessionaria_index(data.data.concessionaria)
    //   // console.log(concessionaria.data)
    //   if (concessionaria.data.info === "não tem") {
    //     concessionaria = ''
    //   }
    //   await this.setState({ pagina: data.data, concessionaria_pagina: concessionaria.data })
    // })
    // const ad = await paginaSite_index(this.get('v')).then(data => data.data)
    // const asad = await ad.map(element => sites_get(element.site_id).then(data => data.data))
    // const sites = await Promise.all(asad)
    // sites.forEach(element => this.put_type(element))
  }

  render() {
    return (
      <BrowserRouter
      // basename="/bahm/webroot/info/build/index.html"
      >
        {this.state.pagina && <MyCanvas dados={this.state} />}
        {this.state.street.map(e => <CustomIFrame key={e.id_site} dados={e.link} />)}
        {this.state.foto.map(e => <CustomIFrame key={e.id_site} dados={e.link} />)}
        {this.state.wiki_sat.map(e => <CustomIFrame key={e.id_site} dados={e.link} />)}
        {this.state.wiki_frio.map(e => <CustomIFrame key={e.id_site} dados={e.link} />)}
        {this.state.pm.map(e => <CustomIFrame key={e.id_site} dados={e.link} />)}
        {this.state.site.map(e => <CustomIFrame key={e.id_site} dados={e.link} />)}
        {this.state.abcr.map(e => <CustomIFrame key={e.id_site} dados={e.link} />)}
        {this.state.concessionaria.map(e => <CustomIFrame key={e.id_site} dados={e.link} />)}
        {this.state.foto_mapa.map(e => <CustomIFrame key={e.id_site} dados={e.link} />)}
        {this.state.wikipedia.map(e => <CustomIFrame key={e.id_site} dados={e.link} />)}
        {this.state.lei.map(e => <CustomIFrame key={e.id_site} dados={e.link} />)}
        
      </BrowserRouter>
    );
  }
}
export default App;