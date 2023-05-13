let input = '12 1 5.30\n16 2 5.10'
var lines = input.split('\n');

let lista1 = lines[0].split(' ')

let lista2 = lines[1].split(' ')

let a = parseFloat(lista1[1])

let b = parseFloat(lista1[2])

let c = parseFloat(lista2[1])

let d = parseFloat(lista2[2])

let x = (a*b) + (c*d)

console.log('VALOR A PAGAR: R$ ' + x.toFixed(2))