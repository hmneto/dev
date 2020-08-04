export class Page {
  pagina = null;
  concessionaria_pagina = null;
  sites = null;
  contatos = null;
  obj = null;
  constructor(dados) {
    const { nome_pagina, endereco, info, sites, contatos } = dados.data.dados;
    this.contatos = contatos;
    this.pagina = { nome_pagina, endereco, info };
    this.concessionaria_pagina = { info };
    const obj = {};
    for (var i = 0; i < sites.length; i++) {
      if (!obj[sites[i].tipo]) obj[sites[i].tipo] = [];
      obj[sites[i].tipo].push(sites[i].link);
    }
    this.obj = obj;
  }

  get_infos() {
    return {
      pagina: this.pagina,
      concessionaria_pagina: this.concessionaria_pagina,
      sites: this.sites,
      contatos: this.contatos,
      obj: this.obj,
    };
  }
}
