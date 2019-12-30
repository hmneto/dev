// importa funcao que guarda variavel do google maps api 
const iniciar_google_lib = require('./iniciar_google_lib')

// importa funcao que cria elementos html para execução da api do google
const iniciar_elementos_html_maps = require('./iniciar_elementos_html_maps')

// executa a funcao que cria elemento html para execucao da api do google
iniciar_elementos_html_maps()

// quando carregar todo o arquivo html e scripts executa
window.onload = () => {

    // executa a funcao que inicia a api do google maps
    iniciar_google_lib(google)

    // importa a funcao de eventos depois que já foi declarada a variavel "GOOGLE" da api do google maps
    const eventos = require('./eventos')

    // importa a funcao que inicia o mapa na tela
    require('./mapa')

    // executa a funcção que ouve os eventos
    eventos()
}