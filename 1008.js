let input = '25\n100\n5.50'

var lines = input.split('\n');

let a = parseFloat(lines[0])

let b = parseFloat(lines[1])

let c = parseFloat(lines[2])

let x = b*c

console.log('NUMBER = '+ a + '\nSALARY = U$ ' + x.toFixed(2))
