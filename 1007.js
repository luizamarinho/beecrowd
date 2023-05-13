var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let input = '5\n6\n7\n8'
 
/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
 
 let a = parseFloat(lines[0])

let b = parseFloat(lines[1]) 

let c = parseFloat(lines[2])

let d = parseFloat(lines[3])

let x = ((a*b) - (c*d))

console.log("DIFERENCA = "+ x)
