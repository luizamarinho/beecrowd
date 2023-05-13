let input = '556'

var lines = input.split('\n');

let entrada = parseFloat(lines[0])

let horas = Math.floor(entrada / (60*60))

let resto_horas = entrada % (60*60)

let minutos = Math.floor(resto_horas / 60)

let segundos = resto_horas % 60

// console.log(horas)
// console.log(resto_horas)
// console.log(minutos)
// console.log(segundos)

console.log(horas + ':' + minutos + ':' + segundos)
