var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let a = parseInt(lines[0])

let b = parseInt(lines[1]) 

let x = a*b

console.log("PROD = "+ x)