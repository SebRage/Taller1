//Leer un número e imprimir un mensaje si es positivo o negativo 

'use strict';
let numero = parseFloat(prompt("Ingrese un número:"));

 if (numero > 0) {
  alert("El número es positivo");
} else if (numero < 0) {
  alert("El número es negativo");
} else {
  alert("El número es neutro (cero)");
}

