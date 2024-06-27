
//variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor: ");

console.log(numeroUsuario);
/*
Este codigo 
realiza la comparacion
*/ 
if(numeroUsuario == numeroSecreto) {
    //Acertamos la condicion fue correcta
    alert('Acertaste el numero');
    //No acertamos la condicion no fue correcta
} else {
    alert('Lo siento no acertaste el numero' );
}