//Leer 3 números, determinar el mayor de los 3 e imprimirlo.
'use strict';
let numero1 = parseFloat(prompt("Ingrese el primer número"));
let numero2 = parseFloat(prompt("Ingrese el segundo número"));
let numero3 = parseFloat(prompt("Ingrese el tercero número"));

if (numero1>numero2 && numero1>numero3){
    alert(`El número mayor es: ${numero1}`);
} else if(numero2<numero1 && numero2>numero3){
    alert(`El número mayor es: ${numero2}`);
} else if(numero3<numero1 && numero3>numero2){
    alert(`El número mayor es: ${numero3}`);
}