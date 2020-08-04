import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { fullpage_index } from "./Api";

import MyCanvas from "./MyCanvas";
import CustomIFrame from "./CustomIFrame";
import Img from "./CustomImg";
import Appcss from "./App.css";
// import Mapa from './Mapa'
import { Page } from "./bahm_src/page";
import get_url_val from "./bahm_src/get_url_val";
class App extends Component {
  state = {
    pagina: false,
    concessionaria_pagina: 0,
    contatos: [],
    STREET: [],
    foto: [],
    WIKIMAPIA_SAT: [],
    WIKIMAPIA_FRIO: [],
    pm: [],
    site: [],
    abcr: [],
    concessionaria: [],
    FOTO_MAPA: [],
    WIKIPEDIA: [],
    LEI: [],
  };

  async componentDidMount() {


    

    const e = new get_url_val(["v", "u"]);
    const { u, v } = e.get_list();

    const dados = await fullpage_index(v, u);
    // console.log(dados);
    try {
      if (dados.data.dados.nome_pagina == null) return;
      const page = new Page(dados);
      const { pagina, concessionaria_pagina, contatos, obj } = page.get_infos();
      document.title = `BAHM - ${pagina.nome_pagina}`;
      if (contatos !== undefined) this.setState({ contatos });
  
      const {
        STREET,
        LEI,
        FOTO_MAPA,
        FOTO,
        WIKIMAPIA_FRIO,
        WIKIMAPIA_SAT,
        WIKIPEDIA,
        PM,
        SITE,
        ABCR,
        CONCESSIONARIA,
      } = obj;
  
      // console.log(obj)
      // return
      this.setState({
        pagina,
        concessionaria_pagina,
        STREET: STREET ? STREET : [],
        LEI: LEI ? LEI : [],
        FOTO_MAPA: FOTO_MAPA ? FOTO_MAPA : [],
        WIKIMAPIA_FRIO: WIKIMAPIA_FRIO ? WIKIMAPIA_FRIO : [],
        WIKIMAPIA_SAT: WIKIMAPIA_SAT ? WIKIMAPIA_SAT : [],
        WIKIPEDIA: WIKIPEDIA ? WIKIPEDIA : [],
        concessionaria: CONCESSIONARIA ? CONCESSIONARIA : [],
        pm: PM ? PM : [],
        site: SITE ? SITE : [],
        abcr: ABCR ? ABCR : [],
        foto: FOTO ? FOTO : [],
      });
    } catch (error) {
      console.log('Erro para conseguir pagina')
    }
    

  }

  render() {
    return (
      <BrowserRouter basename="/info/build/index.html">
        {
          <div id="principal">
            {this.state.pagina && <MyCanvas dados={this.state} />}
            {[
              this.state.STREET,
              this.state.foto,
              this.state.WIKIMAPIA_SAT,
              this.state.WIKIMAPIA_FRIO,
              this.state.pm,
              this.state.site,
              this.state.abcr,
              this.state.concessionaria,
              this.state.FOTO_MAPA,
              this.state.LEI,
              this.state.WIKIPEDIA,
            ].map((data, index) => {
              return data.map((data) => {
                // console.log(data, index);
                if (index == 8)
                  return (
                    <div>
                      <br></br>
                      <br></br> <Img key={data} dados={data} />
                    </div>
                  );
                return (
                  <div>
                    <br></br>
                    <br></br>
                    <CustomIFrame key={data} dados={data} />
                  </div>
                );
              });
            })}
          </div>
        }
      </BrowserRouter>
    );
  }
}
export default App;
