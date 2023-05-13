var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let input = "5.0\n7.1"
/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let a = parseFloat(lines[0])

let b = parseFloat(lines[1]) 

let x = ((3.5* a) + (7.5 * b)) / 11

console.log('MEDIA = ' + x.toFixed(5))