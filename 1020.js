let input = '400'

var lines = input.split('\n');

let entrada = parseFloat(lines[0])

let ano = Math.floor(entrada / 365)

let resto_ano = entrada % (365)

let meses = Math.floor(resto_ano / 30)

let dias = resto_ano % 30

// console.log(ano)
// console.log(resto_ano)
// console.log(meses)
// console.log(dias)

console.log(ano + ' ano(s)\n' + meses + ' mes(es)\n' + dias + ' dia(s)')
