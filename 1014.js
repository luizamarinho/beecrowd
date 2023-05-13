let input = '500\n35.0'
var lines = input.split('\n');

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])

let x = a/b

console.log(x.toFixed(3) + ' km/l')

