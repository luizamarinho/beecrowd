var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let input = '2.00'

let pi = 3.14159

let raio = parseFloat(lines[0])

let area = (pi) * (raio*raio)

console.log("A=" + area.toFixed(4))


