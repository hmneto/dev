let appTcc = {};
let telaPrincipalTemplate = `

<!doctype html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>

    <style>
        /* --------*/

        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
        }

        .row {
            display: table;
            padding-top: 2px;
            padding-right: 2px;
            padding-bottom: 2px;
            padding-left: 0px;
            width: 100%;
        }

        #banner-gradient {
            background-image: linear-gradient(45deg, rgb(122, 188, 255) 0%, rgb(96, 171, 248) 44%, rgb(64, 150, 238) 100%);
            background-position-x: initial;
            background-position-y: initial;
            background-size: initial;
            background-repeat-x: initial;
            background-repeat-y: initial;
            background-attachment: initial;
            background-origin: initial;
            background-clip: initial;
            background-color: initial;
        }

        .col:empty {
            display: table-cell;
            height: 75px;
        }

        #myForm .col:empty {
            display: table-cell;
            height: 75px;
            position: relative;
        }

        #myForm .col:empty::after {
            content: "Add form elements here";
            color: rgb(136, 136, 136);
            position: absolute;
            left: 10px;
            top: 10px;
            display: block;
            width: 400px;
        }

        nav ul a,
        nav .brand-logo {
            color: rgb(68, 68, 68);
        }

        p {
            line-height: 2rem;
        }

        .parallax-container .section {
            width: 100%;
        }

        footer.gram-footer ul.collection>li.collection-item,
        footer.gram-footer ul.collection>li.collection-header {
            background-image: initial;
            background-position-x: initial;
            background-position-y: initial;
            background-size: initial;
            background-repeat-x: initial;
            background-repeat-y: initial;
            background-attachment: initial;
            background-origin: initial;
            background-clip: initial;
            background-color: transparent;
            border-top-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
            border-left-width: 0px;
            border-top-style: initial;
            border-right-style: initial;
            border-bottom-style: initial;
            border-left-style: initial;
            border-top-color: initial;
            border-right-color: initial;
            border-bottom-color: initial;
            border-left-color: initial;
            border-image-source: initial;
            border-image-slice: initial;
            border-image-width: initial;
            border-image-outset: initial;
            border-image-repeat: initial;
        }

        footer.gram-footer ul.collection {
            border-top-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
            border-left-width: 0px;
            border-top-style: initial;
            border-right-style: initial;
            border-bottom-style: initial;
            border-left-style: initial;
            border-top-color: initial;
            border-right-color: initial;
            border-bottom-color: initial;
            border-left-color: initial;
            border-image-source: initial;
            border-image-slice: initial;
            border-image-width: initial;
            border-image-outset: initial;
            border-image-repeat: initial;
        }

        .input-field [type="checkbox"]+label,
        .input-field [type="radio"]:not(:checked)+label,
        .input-field [type="radio"]:checked+label {
            pointer-events: auto;
        }

        input:not([type]):focus:not([readonly]),
        input[type="text"]:not(.browser-default):focus:not([readonly]),
        input[type="password"]:not(.browser-default):focus:not([readonly]),
        input[type="email"]:not(.browser-default):focus:not([readonly]),
        input[type="url"]:not(.browser-default):focus:not([readonly]),
        input[type="time"]:not(.browser-default):focus:not([readonly]),
        input[type="date"]:not(.browser-default):focus:not([readonly]),
        input[type="datetime"]:not(.browser-default):focus:not([readonly]),
        input[type="datetime-local"]:not(.browser-default):focus:not([readonly]),
        input[type="tel"]:not(.browser-default):focus:not([readonly]),
        input[type="number"]:not(.browser-default):focus:not([readonly]),
        input[type="search"]:not(.browser-default):focus:not([readonly]),
        textarea.materialize-textarea:focus:not([readonly]) {
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: orange;
            box-shadow: orange 0px 1px 0px 0px;
        }

        #contact input#your-email {
            color: rgb(255, 255, 255);
        }

        #contact textarea#your-message {
            color: rgb(255, 255, 255);
        }

        .icon-block .material-icons {
            font-size: inherit;
        }

        footer.page-footer {
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            margin-left: 0px;
        }

        * {
            box-sizing: border-box;
        }

        body {
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            margin-left: 0px;
        }

        #ix2y4m {
            height: 100%;
        }

        .red {
            width: 100%;
        }

        .blue {
            float: right;
            width: 100%;
        }

        @media only screen and (max-width: 992px) {
            .parallax-container .section {
                position: absolute;
                top: 40%;
            }
            #index-banner .section {
                top: 10%;
            }
        }

        @media only screen and (max-width: 600px) {
            #index-banner .section {
                top: 0px;
            }
        }

        @media (max-width: 480px) {
            .c3138 {
                width: 100%;
            }
            .c3138 {
                width: 100%;
            }
        }

        #btn-ok {
            background-color: green;
            color: white;
        }

        #div-declarar>button,
        #div-repeticao>button,
        #div-condicional>button {
            background-color: #2196f3;
            margin-right: 10px;

        }

        #div-inserir>button {
            background-color: red;
            margin-right: 10px;

        }

        button,
        a {
            margin-bottom: 5px;
            margin-top: 5px;
        }

        #div-declarar,
        #div-inserir,
        #div-condicional,
        #div-repeticao,
        #div-declaracao,
        #div-funcao {
            display: none;
            text-align: center;

        }

        .c4462 {
            margin-top: 5px;
            margin-right: 0px;
            margin-bottom: 0px;
            margin-left: 0px;
            font-size: 15px;

        }


        .c4318 {
            text-align: center;
            font-size: 36px;
            margin-top: 5px;
            margin-right: 0px;
            margin-bottom: 0px;
            margin-left: 0px;
        }

        #iwjjee {
            width: 100%;
        }

        #iab7uk {
            width: 100%;
        }

        .mesmo-tamanho {
            width: 50%;
            white-space: normal;
        }

        #btn-condicional {
            margin-left: -12px;
        }

        .modal .modal-content {
            padding: 14px;
        }

        /*modifiquei aqui, subi um pouco o botao */

        #btn-opcoes {
            margin-bottom: 35px;
        }

        /*acrecentar a div para os operadores*/

        #div-operadores {}

        .toolbar-fixed {
            width: 100%;
            padding: 0;
            height: 50px;
            position: fixed;
            bottom: 0px;
        }

        .toolbar-fixed.active>ai {
            opacity: 0;
        }

        .toolbar-fixed ul {
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            top: 0;
            bottom: 0;
        }

        .toolbar-fixed ul li {
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
            display: inline-block;

            height: 100%;
            transition: none;
            position: relative;
            top: -15px;
        }

        .toolbar-fixed ul li a {
            display: block;
            overflow: hidden;
            position: relative;
            width: 100%;
            height: 100%;
            background-color: transparent;
            box-shadow: none;
            color: #fff;
            line-height: 56px;
            z-index: 1;
        }

        .toolbar-fixed ul li ai {
            line-height: inherit;
        }

        .toolbar-fixed ul {
            left: 0;
            right: 0;
            text-align: center;
        }

        .toolbar-fixed ul li {
            margin-bottom: 15px;
        }

        #code {
            margin: 1px;
        }

        .concertaTextoCondicional {
            margin-left: -10px;
        }

        #div-declaracao button {
            background-color: #2196F3;
        }
    </style>
    <!--tirar-->

    <script src="acoes.js"></script>
    <!--tirar-->

</head>

<body>
    <script type="text/javascript">
        $('.modal').modal();
    </script>
    <div id="div-ohonorio">
        <input style="display: none" id="icon_prefix" type="text" class="validate termo" />
        <input style="display: none" id="icon_telephone" type="tel" class="validate posicao" />
        <a style="display: none" class="btn waves-effect waves-light black adicionar">adicionar
            <br/>
        </a>
        <a style="display: none" class="btn waves-effect waves-light black excluir">excluir
            <br data-highlightable="1" />
        </a>
    </div>
    <div id="modal1" class="modal modal-fixed-footer black-text c3138 ">
        <div class="modal-content ">
            <div class="row div-botoes">
                <div class="col m6 btn-condicional  mesmo-tamanho ">
                    <a id="btn-condicional" class="btn waves-light blue btn-classe">
                        <span class="concertaTextoCondicional">CONDICIONAL</span>
                    </a>
                </div>
                <div class="col m6 btn-repeticao  mesmo-tamanho">
                    <a id="btn-repeticao" class="btn waves-light blue">REPETIÇÃO</a>
                </div>
                <div class="col m6 btn-funcao mesmo-tamanho ">
                    <a id="btn-funcao" class="btn blue ">FUNÇÃO</a>
                </div>
                <div class="col m6 btn-declaração mesmo-tamanho">
                    <a id="btn-declaracao" class="btn waves-light blue ">
                        <span class="concertaTextoCondicional">DECLARAÇÃO</span>
                    </a>
                </div>
            </div>
            <hr/>

            <div id="modal-body">
                <div id="div-condicional">
                    <button type="button" id="btn-if" class="btn btn-info btn-lg modal-close" v-on:click="say('if')">IF</button>
                    <button type="button" id="btn-switch" class="btn btn-info btn-lg modal-close" v-on:click="say('switch')">SWITCH</button>
                </div>
                <div id="div-repeticao">
                    <button type="button" id="btn-for" class="btn btn-info btn-lg modal-close" v-on:click="say('for')">FOR</button>
                    <button type="button" id="btn-while" class="btn btn-info btn-lg modal-close" v-on:click="say('while')">WHILE</button>
                    <button type="button" id="btn-doWhile" class="btn btn-info btn-lg modal-close" v-on:click="say('do while')">DO WHILE</button>
                </div>
                <div id="div-declaracao">
                    <button type="button" id="btn-const" class="btn btn-info btn-lg modal-close " v-on:click="say('const')">CONST</button>
                    <button type="button" id="btn-let" class="btn btn-info btn-lg modal-close " v-on:click="say('let')">LET</button>
                    <button type="button" id="btn-var" class="btn btn-info btn-lg modal-close " v-on:click="say('var')">VAR</button>
                </div>

                <div id="div-funcao">
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">casino
                            </i>
                            <input id="input-funcao" type="text" class="validate" />
                            <label for="icon_prefix">Objeto</label>
                        </div>
                    </div>
                    <div id="div-funcao-lista">
                        <table class="responsive-table centered striped highlight bordered">
                          
                            <!--corpo-->
                            <tbody id="myTable">
                              <tr>
                                <td>  prompt
                                </td>
                              </tr>
                              <tr>
                                <td>print
                                </td>
                              </tr>
                              <tr>
                                <td>releaseEvents
                                </td>
                              </tr>
                              <tr>
                                <td>event
                                </td>
                              </tr>
                              <tr>
                                <td>error
                                </td>
                              </tr>
                              <tr>
                                <td>number
                                </td>
                              </tr>
                              <tr>
                                <td>node
                                </td>
                              </tr>
                              <tr>
                                <td>iframe
                                </td>
                              </tr>
                              <tr>
                                <td>bluer
                                </td>
                              </tr>
                              <tr>
                                <td>close
                                </td>
                              </tr>
                              <tr>
                                <td>clearTimeout
                                </td>
                              </tr>
                              <tr>
                                <td>clearInterval
                                </td>
                              </tr>
                              <tr>
                                <td>focus
                                </td>
                              </tr>
                              <tr>
                                <td>find
                                </td>
                              </tr>
                              <tr>
                                <td>moveTo
                                </td>
                              </tr>
                              <tr>
                                <td>moveBy
                                </td>
                              </tr>
                              <tr>
                                <td>resizeTo
                                </td>
                              </tr>
                              <tr>
                                <td>resizeBy
                                </td>
                              </tr>
                              <tr>
                                <td>scroll
                                </td>
                              </tr>
                              <tr>
                                <td>open
                                </td>
                              </tr>
                              <tr>
                                <td>openDatabase
                                </td>
                              </tr>
                            </tbody>
                          </table>

                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>

    </div>

    <script type="text/javascript">
        $('.modal').modal();
    </script>


    <div id="btn-opcoes" class="fixed-action-btn horizontal click-to-toggle">
        <a href="#modal1" class="btn-floating btn-large  modal-trigger green">
            <i class="material-icons">add
            </i>
        </a>
    </div>
    <div id="ix2y4m" class="row">

        <div id="code">
        </div>
        <!-- this page is generateded by Gramateria -->
        <div id="div-operadores">
            <div class="toolbar-fixed black ">
                <ul>
                    <li class="  red">
                        <a href="#!" class="">
                            <i class="material-icons">delete</i>
                        </a>
                    </li>


                    <li class=" blue">
                        <a href="#!" class="">
                            <i class="material-icons">border_color</i>
                        </a>
                    </li>

                    <li class="waves-effect ">
                        <a href="#!">
                            <i class="material-icons">format_quote</i>
                        </a>
                    </li>
                    <li class="waves-effect ">
                        <a href="#!">
                            <i class="material-icons fixo">( )</i>
                        </a>
                    </li>
                    <li class="waves-effect ">
                            <a href="#!">
                                <i class="material-icons">'</i>
                            </a>
                        </li>
                    <li class="waves-effect ">
                        <a href="#!">
                            <i class="material-icons">{ }</i>
                        </a>
                    </li>
                    <li class="waves-effect">
                        <a href="#!">
                            <i class="material-icons">[ ]</i>
                        </a>
                    </li>
                    <li class="waves-effect">
                        <a href="#!">
                            <i class="material-icons">=</i>
                        </a>
                    </li>
                    <li class="waves-effect">
                        <a href="#!">
                            <i class="material-icons">:</i>
                        </a>
                    </li>

                    <li class="waves-effect">
                        <a href="#!">
                            <i class="material-icons">.</i>
                        </a>
                    </li>

                    <li class="waves-effect">
                        <a href="#!">
                            <i class="material-icons">,</i>
                        </a>
                    </li>
                    <li class="waves-effect">
                        <a href="#!">
                            <i class="material-icons">;</i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <script src="acoes.js"></script>
</body>

</html>

`;

let telaPrincipal = new Vue({
  el: "#telaprincipal",
  data: {
    template: telaPrincipalTemplate,
    seen: true
  }
});

let app = new Vue({
  el: "#modal-body",
  methods: {
    say: function (message) {
      $(".termo").val(message);
      $(".adicionar").trigger("click");
    }
  }
});

let render = function () {
  $("#code").empty(); // apaga todos os elementos da div CODE
  $("#code").append(`${montaString(appTcc)}`);
};

let montaString = function (arrayReferencia) {
  let posicaoCodigo = 0;
  return arrayReferencia["main"].reduce(function (acumulador, atual) {
    let className = `class="posicaoArray ${posicaoCodigo}"`;
    acumulador += ` <span ${className}> ${atual} </span>`;
    posicaoCodigo++;
    return acumulador;
  }, "");
};

let carregarClique = function () {
  $(".posicaoArray").on("click", function (eventoClick) {
    eventoClick.target.classList.value.split(" ").forEach(function (element) {
      let teste = Number(element);
      if (!Number.isNaN(teste)) {
        $(".posicao").val(teste);
      }
    });
  });
};

let adicionarNaTela = function (arra) {
  let posicao = appTcc["posicao"];
  arra.forEach(function (elemento) {
    appTcc["main"].splice(posicao, 0, elemento);
    posicao++;
  });
};

function init() {
  if (!appTcc["main"]) {
    // verificacao se nao existe o espaço de memoria main. true = iniciado /// false = undefined
    appTcc["main"] = []; // nao existindo é iniciado o espaco de memoria main e recebe um array vazio
  }

  $(".excluir").on("click", function () {
    // selecionado todos os elementos que tenham class="excluir" e executada a funcao on recebendo 2 parametros.
    // primeiro parametro string indicando o evento. segundo parametro (callback) funcao que vai ser chamada quando
    // a classe excluir receber algum clique
    appTcc["posicao"] = Number($(".posicao").val()); // atribui na variavel da aplicacao a conversao da string para numero do input class="posicao"
    appTcc["main"].splice(appTcc["posicao"], 1); // funcao splice que na implementacao está sendo usado para excluir o elemento do array no espacao de memoria passado
    // passados dois parametros primeiro posicao que sera usada. segundo parametro é quantidade de elementos retirados.
    render(); // chamada a funcao render que limpa e escreve o codigo novamente
    carregarClique();
  });

  $(".adicionar").on("click", function () {
    $(".posicao").val(Number($(".posicao").val()) + 1); // troca o valor do input class="posicao" para a (atual + 1) para proxima posicao a ser inserida
    appTcc["posicao"] = Number($(".posicao").val()); // atribui na variavel da aplicacao a conversao da string para numero do input class="posicao"
    appTcc["termo"] = $(".termo").val(); // atribui para variavel da aplicacao o valor do input class="termo" que foi digitado em string
    if (appTcc["termo"] == "if") {
      adicionarNaTela([
        "if",
        "(",
        '<a href="#" class="linkestilo">°°°</a>',
        ")",
        "{",
        "<br>",
        '<a href="#" class="linkestilo">°°°</a>', //fiz soh para testar, depois se apaga
        "<br>",
        "}"
      ]);
    } else if (appTcc["termo"] == "function") {
      adicionarNaTela(["function", "(", ")", "{", "<br>", "<br>", "}"]);
    } else if (appTcc["termo"] == "for") {
      adicionarNaTela([
        "for",
        "(",
        '<a href="#" class="linkestilo">°°°</a>',
        ")",
        "{",
        "<br>",
        '<a href="#" class="linkestilo">°°°</a>',
        "<br>",
        "}"
      ]);
    } else if (appTcc["termo"] == "while") {
      adicionarNaTela([
        "while",
        "(",
        '<a href="#" class="linkestilo">°°°</a>',
        ")",
        "{",
        "<br>",
        '<a href="#" class="linkestilo">°°°</a>',
        "<br>",
        "}"
      ]);
    } else if (appTcc["termo"] == "do while") {
      adicionarNaTela([
        "do",
        "{",
        "<br>",
        '<a href="#" class="linkestilo">°°°</a>',
        "<br>",
        "}",
        "while",
        "(",
        '<a href="#" class="linkestilo">°°°</a>',
        ")"
      ]);
    } else if (appTcc["termo"] == "switch") {
      adicionarNaTela([
        "switch",
        "(",
        '<a href="#" class="linkestilo">°°°</a>',
        ")",
        "{",
        "<br>",
        "case ",
        '<a href="#" class="linkestilo">°°°</a>:',

        "<br>",

        '<a href="#" class="linkestilo">°°°</a>',
        "<br>",
        "break;",
        "<br>",
        "case ",
        '<a href="#" class="linkestilo">°°°</a>',
        ":",
        "<br>",
        '<a href="#" class="linkestilo">°°°</a>',
        "<br>",
        "break;",
        "<br>", 'default ',
        '<a href="#" class="linkestilo">°°°</a>:', '<br>',
        "}"
      ]);
    } else {
      appTcc["main"].splice(appTcc["posicao"], 0, appTcc["termo"]);
    }

    render(); // chamada a funcao render que limpa e escreve o codigo novamente
    carregarClique();
  });
}

init(); // inicia a funcao init() onde é carregado os espaços de memoria e criado o main main onde será o start do código. iniciados os eventListeners das classes (excluir, adicionar)