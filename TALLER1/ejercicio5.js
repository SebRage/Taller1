//Dado 4 notas de un estudiante, calcular el promedio del estudiante, imprimir las notas y el promedio
let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
let nota4 = parseFloat(prompt("Ingrese la cuarta nota:"));

let total = (nota1 + nota2 + nota3 + nota4) / 4;
alert(`Las notas son: \n Nota 1: ${nota1} \n Nota 2: ${nota2} \n Nota 3: ${nota3} \n Nota 4: ${nota4}`);
alert(`El promedio del estudiante es: ${total}`);


