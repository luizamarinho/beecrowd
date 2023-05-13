var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let input = '5.0\n6.0\n7.0'

let a = parseFloat(lines[0])

let b = parseFloat(lines[1])

let c = parseFloat(lines[2])

let x = ((2* a) + (3 * b) + (5 * c)) / 10

console.log('MEDIA = ' + x.toFixed(1))