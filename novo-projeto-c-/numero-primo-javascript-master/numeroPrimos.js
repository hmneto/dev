numerosPrimos = (num, max)=>{

		let ar = [];
		if(num >= max+1)return ar

		for(let i = num ; i < num+1; i++){

			if(i % num == 0){

					console.log(num)
					ar.push(num)
				

				
			}
		}

		num ++
		numerosPrimos(num, max)
	
}
numerosPrimos(1,10)

