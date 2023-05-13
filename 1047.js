let input = '7 10 8 9'
var lines = input.split(' ')

let h_inicial = parseFloat(lines[0])
let m_inicial = parseFloat(lines[1])
let h_final = parseFloat(lines[2])
let m_final = parseFloat(lines[3])

let total_h = h_final - h_inicial
let total_m = m_final - m_inicial

if(h_inicial === h_final && total_m === 0){

    total_h = 24

}

if(total_m < 0 ){
    total_h = total_h - 1
    total_m = total_m + 60
}

if(total_h < 0){
    total_h = total_h + 24
    
}

console.log('O JOGO DUROU ' + total_h + ' HORA(S) E ' + total_m + ' MINUTO(S)')