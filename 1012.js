let input = '3.0 4.0 5.2'
var lines = input.split(' ');

let a = parseFloat(lines[0])

let b = parseFloat(lines[1])

let c = parseFloat(lines[2])

let pi = 3.14159

console.log('TRIANGULO: ' + ((a*c)/2).toFixed(3))
console.log('CIRCULO: ' + ((pi) * (c*c)).toFixed(3))
console.log('TRAPEZIO: ' + (1/2 * c * (a + b)).toFixed(3))
console.log('QUADRADO: ' + (b*b).toFixed(3))
console.log('RETANGULO: ' + (a*b).toFixed(3))