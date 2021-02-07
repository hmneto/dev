var single = {
	instancia : null ,
	iniciar : function(){
		function cliente(){
			this.nome = ""

			if(single.instancia == null){
				single.instancia = new cliente()
			}else{
				console.log("já foi")
			}
		}
	}
}


var single = (function(){
	var instancia
	function criaInstacia(){
		var objeto = new Object({jeto : "ok", coisa : "so"})
		console.log("objeto criado")
		return objeto
	}

	return {
		retornaInstancia : function(){
			if(!instancia){
				instancia = criaInstacia()
			}else{
				console.log("já criado")
			}
			return instancia
		}
	}
})()

var v1 = single.retornaInstancia()
var v2 = single.retornaInstancia()

Single = {
	instancia : null ,
	iniciar : function(){

		function Sgooo(){
			this.nome = ""
			this.te = function(){
				console.log(instancia)
			}	
		}
		if(Single.instancia == null ){
			Single.instancia = new Sgooo()
		}
	}
}
