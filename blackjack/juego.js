var cont=0;
var suma=0;
var suma1=0;
var puntajeJugardor=[];
var puntajeCPU=[];
class Juego {

    mezclar = (arr) => {
         var i,j,temp;
     for (i = arr.length - 1; i > 0; i--) {
         j = Math.floor(Math.random() * (i + 1));
         temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
     }
     return arr;

    }
    pedirCartaJugador = (mazo) => {
        if (mazo[cont].texto==='A') {
            mazo[cont].valor=parseInt(prompt('Que valor desea darle ingrese el número 11 o 1'));
            let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo +' texto = '+mazo[cont].texto;
            console.log(cartaJugada);
            let num=parseInt(mazo[cont].valor);
            puntajeJugardor.push(num);
            cont++;
        }else{
        let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo +' texto = '+mazo[cont].texto;
        console.log(cartaJugada);
        let num=parseInt(mazo[cont].valor);
        puntajeJugardor.push(num);
        cont++;}
    }
    pedirCartaCpu = (mazo) => {
        
        if (suma1<=21) {
            puntajeCPU.forEach(function(n){
                console.log(n);
                suma1 += n;
            });
            let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo +' texto = '+mazo[cont].texto;
            console.log(cartaJugada);
            let numer=parseInt(mazo[cont].valor);
            puntajeCPU.push(numer);
            cont++;
            this.pedirCartaCpu(mazo);
            suma1=0;
        }else if (suma1>21) {
           
        }
       
    }
    validar = () => {
        puntajeCPU.forEach(function(n){
            console.log(n);
            suma1 += n;
        });
        puntajeJugardor.forEach(function(numero){
            console.log(numero);
            suma += numero;
        });
        console.log(puntajeCPU);

        suma1=suma1-puntajeCPU[puntajeCPU.length-1];
        console.log(suma);
        console.log(suma1);
        if (suma<=21 && suma1<suma) {
            console.log('ganaste');

        } else if(suma>21){
            console.log('perdiste');

        }else if (suma===suma1 && suma<=21 && suma1<=21) {
            console.log('empate');

        }else if (suma<suma1 && suma<=21 && suma1<=21) {
            console.log('perdiste');

        }
    }

}