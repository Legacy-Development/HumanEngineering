var numero1 = 0;
var numero2 = 0;
var operacion;

function asignarNumero(numero){
    if(numero1==0 && numero1 !== '0.'){
        numero1 = numero;
    }else{
        numero1 += numero;
    }
    refreshDisplay();
}

function asignarComa(){
	if(numero1 == 0) {
		numero1 = '0.';
	} else if(numero1.indexOf('.') == -1) {
		numero1 += '.';
	}
	refreshDisplay();
}

function teclaC(){
	numero1 = 0;
	numero2 = 0;
	refreshDisplay();
}

function operar(valor){
	if (numero1 == 0){
		numero1 = parseFloat(document.getElementById("txtNumero").value);
	}
	numero2 = parseFloat(numero1);
	numero1= 0;
	operacion = valor;
}

function esIgual(){
    numero1 = parseFloat(numero1);
	switch (operacion){
		case 1:
			numero1 += numero2;
		break;
		case 2:
			numero1 = numero2 - numero1;
		break;
		case 3:
			numero1 *= numero2;
		break;
		case 4:
			numero1 = numero2 / numero1;
		break;
		case 5:
			numero1 = Math.pow(numero2, numero1);
		break;
	}
	refreshDisplay();
	numero2 = parseFloat(numero1);
	numero1 = 0;
}

function refreshDisplay(){
	document.getElementById("txtNumero").value = numero1;
}
