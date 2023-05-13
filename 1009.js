let input = 'JOAO\n500.00\n1230.30'

var lines = input.split('\n');

let b = parseFloat(lines[1])

let c = parseFloat(lines[2])

let x = ((b) + (c*0.15))

console.log('TOTAL = R$ ' + x.toFixed(2))

