let input = '91.01'

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

let moedas_1 = Math.floor(resto_2 / 1)

let resto_1 = resto_2 % 1

let centavos = Math.floor(resto_1*100)

let moedas_050 = Math.floor(centavos/50)

let resto_050 = centavos % 50

let moedas_025 = Math.floor(resto_050 / 25)

let resto_025 = resto_050 % 25

let moedas_010 = Math.floor(resto_025 / 10)

let resto_010 = resto_025 % 10

let moedas_05 = Math.floor(resto_010 / 5)

let resto_05 = resto_010 % 5

let moedas_01 = Math.floor(resto_05 / 1)

let resto_01 = resto_05 % 1

console.log('NOTAS:')

console.log(notas_100 + ' nota(s) de R$ 100.00')

console.log(notas_50 + ' nota(s) de R$ 50.00')

console.log(notas_20 + ' nota(s) de R$ 20.00')

console.log(notas_10 + ' nota(s) de R$ 10.00')

console.log(notas_5 + ' nota(s) de R$ 5.00')

console.log(notas_2 + ' nota(s) de R$ 2.00')

console.log('MOEDAS:')

console.log(moedas_1 + ' moeda(s) de R$ 1.00')

console.log(moedas_050 + ' moeda(s) de R$ 0.50')

console.log(moedas_025 + ' moeda(s) de R$ 0.25')

console.log(moedas_010 + ' moeda(s) de R$ 0.10')

console.log(moedas_05 + ' moeda(s) de R$ 0.05')

console.log(moedas_01 + ' moeda(s) de R$ 0.01')