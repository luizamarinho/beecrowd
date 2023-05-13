let input = '1.0 7.0\n5.0 9.0'
var lines = input.split('\n');

let lista1 = lines[0].split(' ')

let lista2 = lines[1].split(' ')

let x1 = parseFloat(lista1[0])

let y1 = parseFloat(lista1[1])

let x2 = parseFloat(lista2[0])

let y2 = parseFloat(lista2[1])

let a = (x2-x1)*(x2-x1)

let b = (y2-y1)*(y2-y1)

let c = Math.sqrt(a+b)

console.log(c.toFixed(4))