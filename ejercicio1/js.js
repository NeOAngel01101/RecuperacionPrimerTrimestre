function funcionEjecutar() {

    let pesoPersona1 = document.getElementById("numero1").value;
    let pesoPersona2 = document.getElementById("numero2").value;
    let pesoPersona3 = document.getElementById("numero3").value;
    let pesoPersona4 = document.getElementById("numero4").value;

    let pesos = [pesoPersona1, pesoPersona2, pesoPersona3, pesoPersona4];

    let suma = parseInt(pesoPersona1)+parseInt(pesoPersona2)+parseInt(pesoPersona3)+parseInt(pesoPersona4);
    let media = suma/4;

	for (let i = 0; i < pesos.length; i++) {
    	if (pesos[i] < media) {
    		alert("El peso de la persona " + (i+1) + " no alcanza la media");
    	} else {
    		alert("El peso de la persona " + (i+1) + " alcanza la media");
    	}
    }

    if(pesoPersona1 > pesoPersona2 && pesoPersona1 > pesoPersona3 && pesoPersona1 > pesoPersona4){
            X=pesoPersona1;
        }else{
            if(pesoPersona2 > pesoPersona1 && pesoPersona2 > pesoPersona3 && pesoPersona2 > pesoPersona4){
                X=pesoPersona2;
            }else{
                if(pesoPersona3 > pesoPersona1 && pesoPersona3 > pesoPersona2 && pesoPersona3 > pesoPersona4){
                    X=pesoPersona3;
                }else
                    X=pesoPersona4;
            }
        }
        alert("El mayor peso es de la persona :" + X);

    alert("La media de peso de todos los participantes es :"+ media);

}
