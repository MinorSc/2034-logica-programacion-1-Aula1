
//variables
let numeroSecreto = Math.floor(Math.random()*100)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 5;

while (numeroUsuario != numeroSecreto) {
    let numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 100 por favor: "));

    console.log(typeof(numeroUsuario));
    /*
    Este código 
    realiza la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos la condición fue correcta
        alert(`Acertaste, el numero es: ${numeroUsuario} Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        //No acertamos la condición no fue correcta
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        // incrementamos el contador cuando la persona no acierta 
        // intentos = intentos + 1;
        // intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > 5) {
            alert(`Llegaste al numero máximo de ${maximosIntentos} intentos`);
            break
        }
        // alert('Lo siento no acertaste el numero');

    }
}