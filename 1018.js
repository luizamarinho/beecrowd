let input = '576'

var lines = input.split('\n');

let entrada = parseFloat(lines[0])

let notas_100 = Math.floor(entrada / 100)

let resto_100 = entrada % 100

let notas_50 = Math.floor(resto_100 / 50)

let resto_50 = resto_100 % 50

let notas_20 = Math.floor(resto_50 / 20)

let resto_20 = resto_50 % 20

let notas_10 = Math.floor(resto_20 / 10)

let resto_10 = resto_20 % 10

let notas_5 = Math.floor(resto_10 / 5)

let resto_5 = resto_10 % 5

let notas_2 = Math.floor(resto_5 / 2)

let resto_2 = resto_5 % 2

let notas_1 = Math.floor(resto_2 / 1)

let resto_1 = resto_2 % 1

console.log(entrada)

console.log(notas_100 + ' nota(s) de R$ 100,00')
// console.log(resto_100)

console.log(notas_50 + ' nota(s) de R$ 50,00')
// console.log(resto_50)

console.log(notas_20 + ' nota(s) de R$ 20,00')
// console.log(resto_20)

console.log(notas_10 + ' nota(s) de R$ 10,00')
// console.log(resto_10)

console.log(notas_5 + ' nota(s) de R$ 5,00')
// console.log(resto_5)

console.log(notas_2 + ' nota(s) de R$ 2,00')
// console.log(resto_2)

console.log(notas_1 + ' nota(s) de R$ 1,00')
// console.log(resto_1)


