const formAction = document.getElementById("form_control")
const visorRes = document.getElementById("resHTML")

const criptadorTexto = () =>{




	let txx = "abcdefghijkmñnopqvxwyz"
	let textRess = ""
	let txToMod = "hola mundo"
	for(let i = 0;i<=txx.length -1;i++){
		const e = txToMod[i]
		const eMod = txx[i+2]
		
		if(e == undefined) continue
		textRess += e


		/* switch(i){
			case "a" : textRess =+ "" 

				
		} */
	}
	console.log(textRess)
}


formAction.addEventListener("submit",(e)=>{
    e.preventDefault();
    const valTextArea = e.target[0].value;
    
    

})
criptadorTexto()
