/**Integrantes: Owen Sebastian Murcia Avella, Daniel Felipe Barrueto Ayala
 * Realizar un programa que pida al usuario 2 números y se realicen las 4 operaciones básicas 
(Suma, resta, multiplicación, división). Imprimir los resultados. */

'use strict';
let numero1 = parseFloat(prompt('Ingrese el primer número'));
let numero2 = parseFloat(prompt('Ingrese el segundo número'));

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicación = numero1 * numero2;
let división = numero1 / numero2;

alert(`La suma de los números ingresados es: ${suma}`);
alert(`La resta de los números ingresados es: ${resta}`);
alert(`La multiplicación de los números ingresados es: ${multiplicación}`);
alert(`La división de los números ingresados es: ${división}`);