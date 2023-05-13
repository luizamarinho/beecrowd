let input = 'Dia 5\n08 : 12 : 23\nDia 9\n06 : 13 : 23'
let lines = input.split('\n')

let dia_i = lines[0].split(' ')
let dia_inicial = parseFloat(dia_i[1])

let dia_f = lines[2].split(' ')
let dia_final = parseFloat(dia_f[1])

let hora_i = lines[1].split(' : ')
let hora_inicial = parseFloat(hora_i[0])

let minuto_i = lines[1].split(' : ')
let minuto_inicial = parseFloat(minuto_i[1])

let segundo_i = lines[1].split(' : ')
let segundo_inicial = parseFloat(segundo_i[2])

let hora_f = lines[3].split(' : ')
let hora_final = parseFloat(hora_f[0])

let minuto_f = lines[3].split(' : ')
let minuto_final = parseFloat(minuto_f[1])

let segundo_f = lines[3].split(' : ')
let segundo_final = parseFloat(segundo_f[2])

let total_dia = dia_final - dia_inicial
let total_hora = hora_final - hora_inicial
let total_minuto = minuto_final - minuto_inicial
let total_segundo = segundo_final - segundo_inicial

if(total_segundo < 0 ){
    total_minuto = total_minuto - 1
    total_segundo = total_segundo + 60
}

if(total_minuto < 0 ){
    total_hora = total_hora - 1
    total_minuto = total_minuto + 60
}

if(total_hora < 0 ){
    total_dia = total_dia - 1
    total_hora = total_hora + 24
}
console.log(total_dia + ' dia(s)')
console.log(total_hora + ' hora(s)')
console.log(total_minuto + ' minuto(s)')
console.log(total_segundo + ' segundo(s)')